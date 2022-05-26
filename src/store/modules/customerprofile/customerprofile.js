let customerprofiledata = {
    customer_id: "",
    customer_name: "",
    father_name: "",
    mother_name: "",
    gender: "",
    date_of_birth: "",
    marital_status: "",
    spouse_name: "",
    nid: "",
    auth_status_id: "",
    make_by: "shafique",
    make_dt: "",
    auth_1st_by: "",
    auth_1st_dt: "",
    auth_2nd_by: "",
    auth_2nd_dt: "",
    last_action: "ADD",    
    isAdd: true,
    isDelete: false,
    isOld: false,
    Obj_Customer_Introducer: {
        introducer_id: "",
        introducer_type: "01",
        introducer_account_br: "",
        introducer_account_no: "",
        employee_id: "",
        employee_pa_no: "",
        introducer_details: "",
        isAdd: true,
        isDelete: false,
        isOld: false,
    },
    customeraddresses: {
        addr_type_id: "",
        customer_id: "",
        address: "",
        city: "",
        zip_code: "",
        country_id: "",
        division_id: "",
        district_id: "",
        thana_id: "",
        phone: "",
        mobile: "",
        email: "",
    },
    //List_Customer_Introducer:[],
    //Obj_Customer_Introducer:{},
    List_Customer_Address:[]
}

const state = {
    customerprofileinfo: { ...customerprofiledata }
};
const getters = {
    // customer: state => {
    //     return state.customerprofileinfo;
    // }
};
const mutations = {
    setcustomerprofileinfo(state, customerinfo) {
        state.customerprofileinfo = customerinfo;
    },
    resetcustomerprofileinfo(state, customerinfo) {
        state.customerprofiledata = { ...customerinfo };

    }

};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
}