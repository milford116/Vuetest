var baseRule = {
    required: (value) => !!value || 'Required.',
    minLength(len) {
        return v => v === null || v === '' || v === undefined || v.length >= len || 'minimum ' + len.toString() + ' characters';
    },
    maxLength(len) {
        return v => v === null || v === '' || v === undefined || v.length <= len || 'maximum ' + len.toString() + ' characters';
    },
    exactLength(len) {
        return v => v === null || v === '' || v === undefined || v.length === len || "exactly " + len.toString() + " characters";
    },
    onlyAlphaNumeric: (v) => /^[a-z0-9]+$/.test(v) || "must contain alpha-numeric characters",
    onlyNumeric: (v) => /^[0-9]+$/.test(v) || "must contain only numeric characters",
    onlyAlphabate: (v) => /^[a-zA-Z]+$/.test(v) || "must contain only alphabate characters",
    dateRule: (v) => /^[0-9\/]+$/.test(v) || "only 0-9 and \/ are allowed",
    emailValidity: (v) => /^.+@.+\..+$/.test(v) || "E-mail has to contain @ and .",
    decimalNumber: (v) => /^[0-9]*\.?[0-9]+$/.test(v) || "must contain a valid decimal number",
    contactValidity: (v) => /^(01)([0-9]{9})$/.test(v) || "Contact number must start with 01 and the required length is 11"
};

var elementaryRules = {
    required: [(value) => !!value || 'Required.'],
    minLength(len) {
        return [v => (v === null || v === '' || v === undefined || v.length >= len) || 'minimum ' + len.toString() + ' characters'];
    },
    maxLength(len) {
        return [v => (v === null || v === '' || v === undefined || v.length <= len) || 'maximum ' + len.toString() + ' characters'];
    },
    exactLength(len) {
        return [v => (v === null || v === '' || v === undefined || v.length === len) || "exactly " + len.toString() + " characters"];
    },
    onlyAlphaNumeric: [(v) => /^[a-z0-9]+$/.test(v) || "must contain alpha-numeric characters"],
    onlyNumeric: [(v) => /^[0-9]+$/.test(v) || "must contain only numeric characters"],
    onlyAlphabate: [(v) => /^[a-zA-Z]+$/.test(v) || "must contain only alphabate characters"],
    dateRule: [(v) => /^[0-9\/]+$/.test(v) || "only 0-9 and \/ are allowed"],
    emailValidity: [(v) => /^.+@.+\..+$/.test(v) || "E-mail has to contain @ and ."],
    decimalNumber: [(v) => /^[0-9]*\.?[0-9]+$/.test(v) || "must contain a valid decimal number"],
    contactValidityWithoutRequired: (v) => v === null || v === '' || v === undefined || /^(01)([0-9]{9})$/.test(v) || "Contact number must start with 01 and the required length is 11",
    onlyNumericWithoutRequired: (v) => v === null || v === '' || v === undefined || /^[0-9]+$/.test(v) || "must contain only numeric characters",
    emailValidityWithoutRequired: (v) => v === null || v === '' || v === undefined || /^.+@.+\..+$/.test(v) || "E-mail has to contain @ and .",
    maxLengthWithoutRequired(len) {
        return v => v === null || v === '' || v === undefined || v.length <= len || 'maximum ' + len.toString() + ' characters';
    }
}
var compositeRules = {
    glKeyRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.exactLength(11),
    ],
    branchIdRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.maxLength(10)
    ],
    accountNoRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.exactLength(11)
    ],
    customerIdwithrequiedRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.maxLength(10)
    ],
    customerIdwithoutrequiedRule: [
        baseRule.onlyNumeric,
        baseRule.maxLength(10)
    ],
    nameRule: [
        baseRule.required,
        baseRule
    ],
    emailRule: [
        baseRule.required,
        baseRule.onlyAlphaNumeric,
        baseRule.emailValidity
    ],
    passwordRule: [
        baseRule.required,
        baseRule.minLength(1),
    ],
    batchNoRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.exactLength(6)
    ],
    tracerNoRule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.exactLength(7)
    ],
    regSLNORule: [
        baseRule.required,
        baseRule.onlyNumeric,
        baseRule.maxLength(11)
    ],
    dateRule: [
        baseRule.required,
        baseRule.exactLength(10),
        baseRule.dateRule,
    ],
    decimalRule: [
        baseRule.required,
        baseRule.decimalNumber,
    ]
}

export {
    elementaryRules,
    compositeRules,
    baseRule
};