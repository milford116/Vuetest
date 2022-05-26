

var BlackListInfoData = {
    THANA_LGID: null,
    ASSOCIATE_COMPANIES: null,
    ADDRESS1: null,
    ADDRESS2: null,
    CITY: null,
    ZIP_CODE: null,
    DISTRICT_LGID: null,
    STATE_LGID: null,
    COUNTRY_ID: null,
    COUNTRY_NM: null,
    PHONE: null,
    MOBILE: null,
    FAX: null,
    TELEX: null,
    SWIFT: null,
    EMAIL: null,
    WEB: null,
    SOURCE_REF: null,
    SOURCE_DT: null,
    SOURCE_PARTICULARS: null,
    BLACKLISTED_REASONS: null,
    MAKE_BY: null,
    MAKE_DT: null,
    AUTH_1ST_BY: null,
    AUTH_1ST_DT: null,
    AUTH_STATUS_ID: null,
    LAST_ACTION: null,
    CUSTOMER_ID: null,
    CUSTOMER_FULL_NM: null,
    CUSTOMER_CATEGORY_ID: null,
    HOME_BRANCH_ID: null,
    HOME_BRANCH_NM: null,
    NATURE_OF_BUSINESS: null,
    REMARK_DETAILS: null,
    FIRST_NAME: null,
    SECOND_NAME: null,
    THIRD_NAME: null,
    FOURTH_NAME: null,
    LIST_TYPE: null,
    LISTING_DT: null,
    SUBMITTED_BY: null,
    GENDER: null,
    NAME_BY_ORGN: null,
    NATIONALITY: null,
    ALT_NATIONALITY: null,
    SORT_KEY: null,
    LAST_SORTED: null,
    PASSPORT_NO: null,
    IDENTY_INFO: null,
    JUSTIFICATION: null,
    ALIAS_NAME1: null,
    ALIAS_NAME2: null,
    BIRTH_DT: null,
    BIRTH_PLACE: null,
    LAST_UPDATED: null,
    DATA_ID: null,
    ROWID: null,
    NFT_LOG_MSG: null,
    TRACKING_ID: null,
    CloneObj: null,
    isAdd: true,
    isDelete: false,
    isOld: false,
    CreateByLoginId: null,
    MakeByLoginId: null,
    AuthByLoginId: null
};

const state = {
    blacklistinfo: {...BlackListInfoData },
};

const getters = {
    // isLoggedIn(state) {
    //     return state.access_token !== null;
    // },
};

const mutations = {
    setBlacklistinfo(state, blacklistinfo) {
        state.blacklistinfo = blacklistinfo;
    },
    resetBlacklistinfo(state) {
        state.blacklistinfo = {...BlackListInfoData };
    },
    setOtherInfo(state, { MAKE_BY, MAKE_DT, AUTH_1ST_BY, AUTH_1ST_DT, LAST_ACTION, HOME_BRANCH_ID, HOME_BRANCH_NM }) {
        state.blacklistinfo.MAKE_BY = MAKE_BY;
        state.blacklistinfo.MAKE_DT = MAKE_DT;
        state.blacklistinfo.AUTH_1ST_BY = AUTH_1ST_BY;
        state.blacklistinfo.AUTH_1ST_DT = AUTH_1ST_DT;
        state.blacklistinfo.LAST_ACTION = LAST_ACTION;
        state.blacklistinfo.HOME_BRANCH_ID = HOME_BRANCH_ID;
        state.blacklistinfo.HOME_BRANCH_NM = HOME_BRANCH_NM;
    }
};

const actions = {

};

export default {
    state,
    getters,
    actions,
    mutations,
};