var fieldBasedRules = {
    glKeyRule: {
        required: true,
        numeric: true,
        length: 11,
    },
    branchIdRule: {
        required: true,
        numeric: true,
        max: 10,
    },
    accountNoRule: {
        required: true,
        numeric: true,
        length: 11,
    },
    customerIdwithrequiedRule: {
        required: true,
        numeric: true,
        length: 10,
    },
    customerIdwithoutrequiedRule: {
        numeric: true,
        length: 10,
    },
    emailRule: {
        email: true
    },
    contactWithRequiredRule: {
        required: true,
        regex: /^(01)([0-9]{9})$/, // starts with 01, total digits 11 
        length: 11,
    },
    contactWithoutRequiredRule: {
        regex: /^(01)([0-9]{9})$/,
        length: 11,
    },
    passwordRule: {
        required: true,
        min: 1,
    },
    batchNoRule: {
        required: true,
        numeric: true,
        max: 6,
    },
    tracerNoRule: {
        required: true,
        numeric: true,
        max: 7,
    },
    regSLNORule: {
        required: true,
        numeric: true,
        max: 11,
    },
    // dateRule: [
    //     baseRule.required,
    //     baseRule.exactLength(10),
    //     baseRule.dateRule,
    // ],
    decimalRule: {
        required: true,
        double: true,
    }
}
export {
    fieldBasedRules
};