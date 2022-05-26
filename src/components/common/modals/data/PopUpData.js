var postOptionsData = [{
    value: 0,
    text: "Non-Postable",
  },
  {
    value: 1,
    text: "Postable",
  },
];

var accTypeItemsData = [{
    value: 0,
    text: "Asset",
  },
  {
    value: 1,
    text: "Liability",
  },
  {
    value: 2,
    text: "Expenditure",
  },
  {
    value: 3,
    text: "Income",
  },
];

var currencyItemsData = [{
    value: 0,
    text: "All",
  },
  {
    value: 1,
    text: "Local",
  },
  {
    value: 2,
    text: "Foreign",
  },
];

var formData = {
  accType: 0,
  currencyType: 1,
  postabilityType: 1,
  searchTypeSelection: "0",
  startNo: "",
  endNo: "",
  AccountName: "",

  glKey: "dummykey",
  glType: "Asset",
  glPrefix: "",
  glAccountNo: "",
  openingDate: "",
  accountName: "",
  currency: "000",
  level: "--select--",
  accountType: "Debit",
  totallingAccount: "",
  accountPosting: "",
  totallingAccountName: "",
  balanceSheetVal: null,
  glBreakUpRegister: false,
  ibtaAccount: false,
};

var headersData = [
  {
    text: "GL A/C SL",
    value: "GL_ACC_SL"
  },
  {
    text: "GL A/C NO",
    value: "GL_ACC_NO"
  },
  {
    text: "GL A/C NAME",
    value: "GL_ACC_NM"
  },
];

var masterAccRequestBodyData = {
  port: 44343,
  path: "/CorGlLedger/GetCorGLMasterAccountList",
  method: "GET",
  data: {
    "BusinessData": {
      "Name_Value_List": "",
      "GL_BRANCH_ID": "0031",
      "CurrencyType": "",
      "Gl_CURRENCY_ID": "",
      "POSTABLE": "",
      "OFF_BS_FLAG": "",
      "RangeType": "",
      "StartAcc": "",
      "EndAcc": "",
      "GLACC_NM": ""
    }
  }
};

export {
  postOptionsData,
  accTypeItemsData,
  currencyItemsData,
  formData,
  headersData,
  masterAccRequestBodyData
};
