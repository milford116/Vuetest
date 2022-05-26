var customerAccountTime = {
  CustomerAccTDData: {
    ACCOUNT_NUMBER: null,
    AC_TITLE: null,
    BRANCH_ID: null,
  },
};

var customerAccountScheme = {
  CustomerAccScmData: {
    ACCOUNT_NUMBER: null,
    AC_TITLE: null,
    BRANCH_ID: null,
  },
};

var customerAccountExport = {
  CustomerAccScmData: {
    branch_id: null,
    LC_NO: null,
  },
};

var customerAccountImport = {
  CustomerAccScmData: {
    LC_Branch_id: null,
    Lc_Serial: null,
  },
};

var customerAccountGuarantee = {
  CustomerAccScmData: {
    BRANCH_ID: null,
    guarantee_id: null,
  },
};

var customerAccountNominee = {
  CustomerAccScmData: {
    BRANCH_ID: null,
    REG_NO: null,
  },
};

var customerAccountGsi = {
  CustomerAccScmData: {
    BRANCH_ID: null,
    REG_NO: null,
  },
};

var customerAccountCRM = {
  CustomerAccScmData: {
    card_pa_no: null,
    ccs_code: null,
  },
};

const state = {
  customerEnqID: { ...customerAccountTime },
  customerEnqIDScm: { ...customerAccountScheme },
  customerEnqIDExport: { ...customerAccountExport },
  customerEnqIDImport: { ...customerAccountImport },
  customerEnqIDGuarantee: { ...customerAccountGuarantee },
  customerEnqIDGsi: { ...customerAccountGsi },
  customerEnqIDCRM: { ...customerAccountCRM },
};



const getters = {
  // customer: state => {
  //     return state.customerInfo;
  // }
};

const mutations = {
  setCustomerENQid(state, customerEnqID) {
   // console.log("from set");
   // console.log(customerEnqID);
    state.customerEnqID = customerEnqID;
  },
  setCustomerENQidScm(state, customerEnqIDScm) {
  //  console.log("from set scm");
  //  console.log(customerEnqIDScm);
    state.customerEnqIDScm = customerEnqIDScm;
  },
  resetsetCustomerENQid(state) {
  //  console.log("from reset");
    state.customerEnqID = { ...customerEnqID };
  },
  resetCustomerENQidScm(state) {
  //  console.log("from scm reset");
    state.customerEnqID = { ...customerEnqIDScm };
  },

  setCustomerENQidExport(state, customerEnqIDExport) {
   // console.log("from set");
    console.log(customerEnqIDExport);
    state.customerEnqIDExport = customerEnqIDExport;
  },

  resetsetCustomerENQidExport(state) {
  //  console.log("from reset");
    state.customerEnqIDExport = { ...customerEnqIDExport };
  },

  setCustomerENQidImport(state, customerEnqIDImport) {
  //  console.log("from set");
  //  console.log(customerEnqIDImport);
    state.customerEnqIDImport = customerEnqIDImport;
  },

  resetsetCustomerENQidImport(state) {
  //  console.log("from reset");
    state.customerEnqIDImport = { ...customerEnqIDImport };
  },

  setCustomerENQidGuarantee(state, customerEnqIDGuarantee) {
  //  console.log("from set");
  //  console.log(customerEnqIDGuarantee);
    state.customerEnqIDGuarantee = customerEnqIDGuarantee;
  },

  resetsetCustomerENQidGuarantee(state) {
  //  console.log("from reset");
    state.customerEnqIDGuarantee = { ...customerEnqIDGuarantee };
  },

  setCustomerENQidNominee(state, customerEnqIDNominee) {
  //  console.log("from set");
  //  console.log(customerEnqIDNominee);
    state.customerEnqIDNominee = customerEnqIDNominee;
  },

  resetsetCustomerENQidNominee(state) {
  //  console.log("from reset");
    state.customerEnqIDNominee = { ...customerEnqIDNominee };
  },

  setCustomerENQidGsi(state, customerEnqIDGsi) {
   // console.log("from set");
   // console.log(customerEnqIDGsi);
    state.customerEnqIDGsi = customerEnqIDGsi;
  },

  resetsetCustomerENQidGsi(state) {
  //  console.log("from reset");
    state.customerEnqIDGsi = { ...customerEnqIDGsi };
  },

  setCustomerENQidCRM(state, customerEnqIDCRM) {
  //  console.log("from set");
  //  console.log(customerEnqIDCRM);
    state.customerEnqIDCRM = customerEnqIDCRM;
  },

  resetsetCustomerENQidCRM(state) {
  //  console.log("from reset");
    state.customerEnqIDCRM = { ...customerEnqIDCRM };
  },
  // setOtherInfo(
  //   state,
  //   { MAKE_BY, MAKE_DT, AUTH_1ST_BY, AUTH_1ST_DT, LAST_ACTION }
  // ) {},
};

const actions = {
  // changeCustomer (context, payload) {
  //     setTimeout(() => {
  //       context.commit("changeCustomer", payload);
  //     }, 2000);
  //   }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
