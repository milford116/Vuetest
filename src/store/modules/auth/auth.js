import axios from "axios";
import {
    CoreAPIGatewatyAPI,
    CoreSecurityAPI
} from "../../../../public/config.js";
import {
    CommonData
} from "../../../../public/loginConfig.js";
var LoginBusinessData = {
    UserId: null,
    Password: null,
    Application: CommonData.APPLICATION_ID,
};

var LoginBody = {
    port: CoreSecurityAPI.PORT,
    path: CoreSecurityAPI.LOGIN_PATH,
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
    data: {
        requestId: null,
        requestCliedIP: CommonData.LOCAL_IP,
        requestCliedAgent: null,
        requestAppIP: CommonData.LOCAL_IP,
        requestAppBaseUrl: null,
        BusinessData: null,
        functionId: null,
        branchId: null,
        userId: null,
        institueId: null,
        sessionId: null,
        requestDateTime: null,
        sessionTimeout: 0,
    },
};

const state = {
    access_token: sessionStorage.getItem("access_token") || null,
    logIn_User_Info: JSON.parse(sessionStorage.getItem("logIn_User_Info")) || null,
    user_Access_Info: JSON.parse(sessionStorage.getItem("user_Access_Info")) || null,
    general_Info: JSON.parse(sessionStorage.getItem("general_Info")) || null,
    logIn_Info: JSON.parse(sessionStorage.getItem("logIn_Info")) || null,
    user_app_access: JSON.parse(sessionStorage.getItem("userApp_Access")) || null
};

const getters = {
    isLoggedIn(state, getters) {
        return state.access_token !== null && state.access_token !== "null" && getters.getUserId;
    },
    getToken(state) {
        return state.access_token;
    },
    getUserAccessData(state) {
        return state.user_Access_Info;
    },
    getTransDate(state) {
        // let transdt = state.logIn_Info.TransDate.split('T');
        // const revTransdt = transdt[0].split('-').reverse().join('-').replaceAll("-", "/");
        // return revTransdt;
    },
    getBranchID(state) {
        //return state.logIn_User_Info.HOME_BRANCH_ID;
    },
    getBranchName(state) {
        //return state.logIn_User_Info.HOME_BRANCH_NM;
    },
    getBranchServiceType(state) {
        //return state.logIn_User_Info.BRANCH_SERVICE_TYPE;
    },
    getInstituteType(state) {
        //return state.general_Info.InstituteType;
    },
    getUserId(state) {
        // if (!state.logIn_Info)
        //     return null;
        // return state.logIn_Info.UserId;
    },
    getFunctionID: (state) => (functionName) => {
        // var filteredFunctions = state.user_Access_Info.filter(function(funcData) {
        //     return funcData.FunctionName == functionName;
        // });
        // return filteredFunctions[0].FunctionId;
    },
    getPasswordExpiryMessage(state) {
        //return state.logIn_User_Info.ALERT_MSG;
    },
    getCenterId(state) {
       // return state.logIn_User_Info.CENTER_ID;
    },
    getCenterName(state) {
        //return state.logIn_User_Info.CENTER_NM;
    },
    getUserName(state) {
        //return state.logIn_User_Info.USER_NM;
    },
    getOperationMode(state) {
        //return state.logIn_User_Info.OPERATION_MODE;
    },
    getIsIslamiUser(state) {
        //return state.logIn_User_Info.ISLAMIC_USER;
    },
    getBankId(state) {
        //return state.logIn_User_Info.BANK_ID;
    },
    getBankName(state) {
        //return state.logIn_User_Info.BANK_NM;
    },
    getLocalCurrencyId(state) {
        //return state.logIn_User_Info.LOCAL_CURRENCY_ID;
    },
    getForcedPassChangedFlag(state) {
        //return state.logIn_User_Info.FORCE_PASSWORD_CHANGED_FLAG;
    },
    getankServiceType(state) {
        //return state.logIn_User_Info.BANK_SERVICE_TYPE;
    },
    getAnyBranchOperation(state) {
        //return state.logIn_User_Info.ANY_BR_OPERATION;
    },
    getBankingModelId(state) {
        //return state.logIn_User_Info.BANKING_MODEL_ID;
    },
    getApiBodyData: (state, getters) => (functionName) => {
        let apiBodyData = {
            "UserId": state.logIn_Info.UserId,
            "BranchId": state.logIn_User_Info.HOME_BRANCH_ID,
            "FunctionId": getters.getFunctionID(functionName),
            "BusinessData": {}
        };
        return apiBodyData;
    },
    getUserAppList(state) {
        return state.user_app_access;
    }
};

const mutations = {
    setToken(state, access_token) {
        state.access_token = access_token;
    },
    setLogInBaseData(state, logIn_Info) {
        state.logIn_Info = logIn_Info;
    },
    setLoginUserData(state, logInUserInfo) {
        state.logIn_User_Info = logInUserInfo;
    },
    setUserAccessData(state, userAccessInfo) {
        state.user_Access_Info = userAccessInfo;
    },
    setGeneralData(state, generalInfo) {
        state.general_Info = generalInfo;
    },
    setUserAppAccess(state, user_App_Access) {
        state.user_app_access = user_App_Access;
    }
};

const actions = {
    Logout({ context, dispatch }) {
        return new Promise((resolve, reject) => {
            var LogoutBody = {
                port: CoreSecurityAPI.PORT,
                path: CoreSecurityAPI.LOGOUT_PATH,
                method: "POST",
                data: {
                    RequestAppIP: CommonData.LOCAL_IP,
                    RequestCliedIP: CommonData.LOCAL_IP,
                    SessionTimeout: "1",
                    SessionId: "199",
                    BusinessData: JSON.stringify({
                        UserId: state.logIn_Info.UserId,
                    }),
                },
            };
            let requestPath =
                CoreAPIGatewatyAPI.URL + CoreSecurityAPI.ServicePath + LogoutBody.path;

            axios
                .post(requestPath, LogoutBody.data)
                .then((response) => {
                    dispatch('resetSession').then(() => {
                        resolve(response);
                    })
                })
                .catch(function(error) {
                    dispatch('resetSession').then(() => {
                        reject(response);
                    })
                });
        });
    },
    LogIn({ context, dispatch }, credentials) {
        // creating login body
        LoginBusinessData.UserId = credentials.userid;
        LoginBusinessData.Password = credentials.password;
        LoginBody.data.BusinessData = JSON.stringify(LoginBusinessData);
        let requestPath = CoreAPIGatewatyAPI.URL + CoreSecurityAPI.ServicePath + LoginBody.path;
        // make axios call
        return new Promise((resolve, reject) => {
            axios
                .post(requestPath, LoginBody.data)
                .then((response) => {
                    if (response.data.ResponseStatus === false) {
                        reject(response);
                    } else {
                        dispatch('setStateFromLogInData', response).then(() => {
                            resolve(response);
                        })
                    }
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    },
    CreateMenuByID({
        context,
        dispatch
    }, userid) {
        var get_menu_by_id_body = {
            path: "/Security/GetUserAccessAfterLogin",
            method: "POST",
            data: {
                businessData: {
                    UserId: userid,
                    ModuleId: CommonData.MODULE_ID,
                    ApplicationId: CommonData.APPLICATION_ID,
                },
            },
        };
        let requestPath =
            CoreAPIGatewatyAPI.URL + CoreSecurityAPI.ServicePath + get_menu_by_id_body.path;
        // make axios call

        return new Promise((resolve, reject) => {
            axios
                .post(requestPath, get_menu_by_id_body.data)
                .then((response) => {
                    if (response.data.ResponseStatus === false) {
                        return reject(response);
                    } else {
                        dispatch('setStateFromModuleWiseData', response).then(() => {
                            return resolve(response);
                        })
                    }
                })
                .catch(function(error) {
                    return reject(response);
                });
        });
    },
    setStateFromLogInData(context, apiResponse) {
        const actualData = apiResponse.data;
        sessionStorage.setItem("access_token", actualData.JwtToken);
        context.commit("setToken", actualData.JwtToken);
    },
    setStateFromModuleWiseData(context, apiResponse) {
        let actualData = JSON.parse(apiResponse.data.ResponseBusinessData);
        const logInUser = actualData.LogInUserModuleWise;
        const functionAccess = logInUser.UserFunctionAccess;
        const userAppAccess = logInUser.UserApplicationAccess;
        sessionStorage.setItem("logIn_User_Info", JSON.stringify(logInUser));
        sessionStorage.setItem("user_Access_Info", JSON.stringify(functionAccess));
        sessionStorage.setItem("general_Info", JSON.stringify(actualData));
        sessionStorage.setItem("logIn_Info", JSON.stringify(actualData.LoginUser));
        sessionStorage.setItem("userApp_Access", JSON.stringify(userAppAccess));
        context.commit("setLogInBaseData", actualData.LoginUser);
        context.commit("setLoginUserData", logInUser);
        context.commit("setUserAccessData", functionAccess);
        context.commit("setGeneralData", actualData);
        context.commit("setUserAppAccess", userAppAccess);
    },
    resetSession(context) {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("logIn_Info");
        sessionStorage.removeItem("logIn_User_Info");
        sessionStorage.removeItem("user_Access_Info");
        sessionStorage.removeItem("general_Info");
        sessionStorage.removeItem("userApp_Access");
        context.commit("setToken", null);
        context.commit("setLogInBaseData", null);
        context.commit("setLoginUserData", null);
        context.commit("setUserAccessData", null);
        context.commit("setGeneralData", null);
        context.commit("setUserAppAccess", null);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};