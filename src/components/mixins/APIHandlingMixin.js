import {
    CoreTestProjectAPI,

} from "@/../public/config.js";
import axios from "axios";

export default {
    created() {},
    data: () => {
        return {
            reqBodyCommon: {},
            returnPostResult: {
                status: false,
                message: "",
                responseData: null
            }
        };
    },
    methods: {
        $postConfig(requestpath, serviceConfig) {
            let config = serviceConfig.URL + serviceConfig.ServicePath + requestpath;
            return config;
        },
        $commonConfig(requestData, serviceConfig) {
            let requestString = JSON.stringify(requestData.data);
            let config = {
                method: requestData.method,
                url: serviceConfig.URL + serviceConfig.ServicePath + requestData.path,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                params: {
                    requestString: btoa(requestString),
                },
            };
            return config;
        },
        //functionName - current page function name, apiName - Which API to call, apiPath - API path to call, businessData - Business data to send to API
        $getApiCall(apiName, apiPath, businessData) {
            //this.reqBodyCommon = this.$store.getters.getApiBodyData(functionName);
            this.reqBodyCommon.BusinessData = businessData;
            const parameter = {
                path: apiPath,
                method: "GET",
                data: this.reqBodyCommon,
            };
            const apiConfig = this.$getApiConfig(apiName);
            const config = this.$commonConfig(parameter, apiConfig);
            this.$Progress.start();
            return axios(config)
                .then((response) => {
                    if ("responseStatus" in response.data) {
                        if (!response.data.responseStatus) {
                            if (response.data.responseMessage)
                                this.$root.$snackbar.seterrortext(response.data.responseMessage);
                            else
                                this.$root.$snackbar.seterrortext("Error occurred in API");
                            this.$Progress.fail();
                            return null;
                        } else {
                            const responseData = JSON.parse(response.data.responseBusinessData);
                            if (responseData !== 0 && (!responseData || responseData === null || responseData.length === 0 || this.$lodash.isEmpty(responseData))) {
                                this.$root.$snackbar.seterrortext("No data found");
                                this.$Progress.fail();
                                return null;
                            } else {
                                this.$Progress.finish();
                                return responseData;
                            }
                        }
                    } else {
                        if (!response.data.ResponseStatus) {
                            if (response.data.ResponseMessage)
                                this.$root.$snackbar.seterrortext(response.data.ResponseMessage);
                            else
                                this.$root.$snackbar.seterrortext("Error occurred in API");
                            this.$Progress.fail();
                            return null;
                        } else {
                            const responseData = JSON.parse(response.data.ResponseBusinessData);
                            if (responseData !== 0 && (!responseData || responseData === null || responseData.length === 0 || this.$lodash.isEmpty(responseData))) {
                                this.$root.$snackbar.seterrortext("No data found");
                                this.$Progress.fail();
                                return null;
                            } else {
                                this.$Progress.finish();
                                return responseData;
                            }
                        }
                    }
                })
                .catch((e) => {
                    if ("response" in e) {
                        if ("responseMessage" in e.response.data)
                            this.$root.$snackbar.seterrortext(e.response.data.responseMessage);
                        else
                            this.$root.$snackbar.seterrortext(e.response.data.ResponseMessage);
                    } else this.$root.$snackbar.seterrortext(e);
                    this.$Progress.fail();
                    return null;
                });
        },
        $postApiCall(apiName, apiPath, businessData) { 
            debugger;           
            this.reqBodyCommon.BusinessData = businessData;
            const apiConfig = this.$getApiConfig(apiName);
            let config = this.$postConfig(apiPath, apiConfig);
            this.$Progress.start();
            return axios
                .post(config, this.reqBodyCommon)
                .then((response) => {
                    let returnMsg = response.data;
                    if (returnMsg === null || returnMsg.length === 0) {
                        this.$root.$snackbar.seterrortext("No response returned");
                        this.returnPostResult.status = false;
                        this.$Progress.fail();
                        return this.returnPostResult;
                    } else {
                        if ("responseStatus" in response.data) {
                            if (returnMsg.responseStatus) {
                                this.$root.$snackbar.setsuccesstext(returnMsg.responseMessage);
                                this.returnPostResult.status = true;
                                this.returnPostResult.message = returnMsg.responseMessage;
                                this.returnPostResult.responseData = JSON.parse(returnMsg.responseBusinessData);
                                this.$Progress.finish();
                                return this.returnPostResult;
                            } else {
                                this.$root.$snackbar.seterrortext(returnMsg.responseMessage);
                                this.returnPostResult.status = false;
                                this.returnPostResult.message = returnMsg.responseMessage;
                                this.$Progress.fail();
                                return this.returnPostResult;
                            }
                        } else {
                            if (returnMsg.ResponseStatus) {
                                this.$root.$snackbar.setsuccesstext(returnMsg.ResponseMessage);
                                this.returnPostResult.status = true;
                                this.returnPostResult.message = returnMsg.ResponseMessage;
                                this.returnPostResult.responseData = JSON.parse(returnMsg.ResponseBusinessData);
                                this.$Progress.finish();
                                return this.returnPostResult;
                            } else {
                                this.$root.$snackbar.seterrortext(returnMsg.ResponseMessage);
                                this.returnPostResult.status = false;
                                this.returnPostResult.message = returnMsg.ResponseMessage;
                                this.$Progress.fail();
                                return this.returnPostResult;
                            }
                        }
                    }
                })
                .catch((e) => {
                    if ("response" in e) {
                        if ("responseMessage" in e.response.data) {
                            this.$root.$snackbar.seterrortext(e.response.data.responseMessage);
                            this.returnPostResult.message = e.response.data.responseMessage;
                        } else {
                            this.$root.$snackbar.seterrortext(e.response.data.ResponseMessage);
                            this.returnPostResult.message = e.response.data.ResponseMessage;
                        }
                    } else {
                        this.$root.$snackbar.seterrortext(e);
                        this.returnPostResult.message = e;
                    }
                    this.returnPostResult.status = false;
                    this.$Progress.fail();
                    return this.returnPostResult;
                });
        },
        $getApiConfig(apiName) {
            if (!apiName) {
                this.$root.$snackbar.seterrortext("getApiConfig got null as parameter");
                return null;
            } else {
                if (apiName.toLowerCase() == "testproject")
                    return CoreTestProjectAPI;               
                else
                    return CoreTestProjectAPI; //default should be the API related to this application
            }
        },

        $getApiCallOld(functionName, apiName, apiPath, businessData) {
            this.reqBodyCommon = this.$store.getters.getApiBodyData(functionName);
            this.reqBodyCommon.BusinessData = businessData;
            const parameter = {
                path: apiPath,
                method: "GET",
                data: this.reqBodyCommon,
            };
            const apiConfig = this.$getApiConfig(apiName);
            const config = this.$commonConfig(parameter, apiConfig);
            this.$Progress.start();
            return axios(config)
                .then((response) => {
                    if ("responseStatus" in response.data) {
                        if (!response.data.responseStatus) {
                            if (response.data.responseMessage)
                                this.$root.$snackbar.seterrortext(response.data.responseMessage);
                            else
                                this.$root.$snackbar.seterrortext("Error occurred in API");
                            this.$Progress.fail();
                            return null;
                        } else {
                            const responseData = JSON.parse(response.data.responseBusinessData);
                            if (responseData !== 0 && (!responseData || responseData === null || responseData.length === 0 || this.$lodash.isEmpty(responseData))) {
                                this.$root.$snackbar.seterrortext("No data found");
                                this.$Progress.fail();
                                return null;
                            } else {
                                this.$Progress.finish();
                                return responseData;
                            }
                        }
                    } else {
                        if (!response.data.ResponseStatus) {
                            if (response.data.ResponseMessage)
                                this.$root.$snackbar.seterrortext(response.data.ResponseMessage);
                            else
                                this.$root.$snackbar.seterrortext("Error occurred in API");
                            this.$Progress.fail();
                            return null;
                        } else {
                            const responseData = JSON.parse(response.data.ResponseBusinessData);
                            if (responseData !== 0 && (!responseData || responseData === null || responseData.length === 0 || this.$lodash.isEmpty(responseData))) {
                                this.$root.$snackbar.seterrortext("No data found");
                                this.$Progress.fail();
                                return null;
                            } else {
                                this.$Progress.finish();
                                return responseData;
                            }
                        }
                    }
                })
                .catch((e) => {
                    if ("response" in e) {
                        if ("responseMessage" in e.response.data)
                            this.$root.$snackbar.seterrortext(e.response.data.responseMessage);
                        else
                            this.$root.$snackbar.seterrortext(e.response.data.ResponseMessage);
                    } else this.$root.$snackbar.seterrortext(e);
                    this.$Progress.fail();
                    return null;
                });
        },
        $postApiCallOld(functionName, apiName, apiPath, businessData) {
            this.reqBodyCommon = this.$store.getters.getApiBodyData(functionName);
            this.reqBodyCommon.BusinessData = businessData;
            const apiConfig = this.$getApiConfig(apiName);
            let config = this.$postConfig(apiPath, apiConfig);
            this.$Progress.start();
            return axios
                .post(config, this.reqBodyCommon)
                .then((response) => {
                    let returnMsg = response.data;
                    if (returnMsg === null || returnMsg.length === 0) {
                        this.$root.$snackbar.seterrortext("No response returned");
                        this.returnPostResult.status = false;
                        this.$Progress.fail();
                        return this.returnPostResult;
                    } else {
                        if ("responseStatus" in response.data) {
                            if (returnMsg.responseStatus) {
                                this.$root.$snackbar.setsuccesstext(returnMsg.responseMessage);
                                this.returnPostResult.status = true;
                                this.returnPostResult.message = returnMsg.responseMessage;
                                this.returnPostResult.responseData = JSON.parse(returnMsg.responseBusinessData);
                                this.$Progress.finish();
                                return this.returnPostResult;
                            } else {
                                this.$root.$snackbar.seterrortext(returnMsg.responseMessage);
                                this.returnPostResult.status = false;
                                this.returnPostResult.message = returnMsg.responseMessage;
                                this.$Progress.fail();
                                return this.returnPostResult;
                            }
                        } else {
                            if (returnMsg.ResponseStatus) {
                                this.$root.$snackbar.setsuccesstext(returnMsg.ResponseMessage);
                                this.returnPostResult.status = true;
                                this.returnPostResult.message = returnMsg.ResponseMessage;
                                this.returnPostResult.responseData = JSON.parse(returnMsg.ResponseBusinessData);
                                this.$Progress.finish();
                                return this.returnPostResult;
                            } else {
                                this.$root.$snackbar.seterrortext(returnMsg.ResponseMessage);
                                this.returnPostResult.status = false;
                                this.returnPostResult.message = returnMsg.ResponseMessage;
                                this.$Progress.fail();
                                return this.returnPostResult;
                            }
                        }
                    }
                })
                .catch((e) => {
                    if ("response" in e) {
                        if ("responseMessage" in e.response.data) {
                            this.$root.$snackbar.seterrortext(e.response.data.responseMessage);
                            this.returnPostResult.message = e.response.data.responseMessage;
                        } else {
                            this.$root.$snackbar.seterrortext(e.response.data.ResponseMessage);
                            this.returnPostResult.message = e.response.data.ResponseMessage;
                        }
                    } else {
                        this.$root.$snackbar.seterrortext(e);
                        this.returnPostResult.message = e;
                    }
                    this.returnPostResult.status = false;
                    this.$Progress.fail();
                    return this.returnPostResult;
                });
        },
    }
};