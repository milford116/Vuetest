<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Account Information</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-col cols="12" md="2" sm="4">
         <v-btn @click="close()" class="btn-bg-red">Close</v-btn>
          
        </v-col>
      </v-toolbar>
      <br />
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Account Holder Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_TITLE"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Contact Address"
              disabled
              filled
              required
              v-model="ResponseBusinessData.ADDRESS1"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Contact Address"
              disabled
              filled
              required
              v-model="ResponseBusinessData.ADDRESS2"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Special Instruction"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SPECIAL_INST"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="City"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CITY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Account Type"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_TYPE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Country"
              disabled
              filled
              required
              v-model="ResponseBusinessData.COUNTRY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Account Status"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_STATUS"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Telephone"
              disabled
              filled
              required
              v-model="ResponseBusinessData.PHONE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Last Status date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LST_STATE_GEN_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Account Open Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_OPEN_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Total Term"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TOT_TERM_NO"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Renewal Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_RENEWAL_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Currency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURR_SH_NAME"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Maturity Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MATURITY_DT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Principle Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRINCIPAL_AMT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Notice Applicable"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MAT_DUE_NOTICE_DAY"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Renewed Principle Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRINCIPAL_AMT_RENEW"
            />
          </v-col>

        </v-row>
        <v-row>

          <v-col cols="12" md="4">
            <v-text-field
              label="Relational officer"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.RO_EMP_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Maturity Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MATURITY_AMT"
            />
          </v-col>
            <v-col cols="12" md="4">
            <v-text-field
              label="Renewal Criteria"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MATU_AUTO_RENEW"
            />
          </v-col>
        </v-row>
        <v-row>

          <v-col cols="12" md="4">
            <v-text-field
              label="Last Statement Generation Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LST_STATE_GEN_DT"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Renewal Term No"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TOT_TERM_NO"
            />
          </v-col>
            <v-col cols="12" md="4">
            <v-text-field
              label="Renewal Term Paid"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TOT_TERM_PAID"
            />
          </v-col>
        </v-row>

        <v-row>

          <v-col cols="12" md="4">
            <v-text-field
              label="Auto Renewal criteria"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MATU_AUTO_RENEW"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Last Renewal Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_RENEWAL_DT"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Product Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Product ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRODUCT_ID"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Product Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRODUCT_NM"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURR_SH_NAME"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Product Short Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SHORT_NM"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Customer Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Code"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CUSTOMER_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Registration Date"
              disabled
              filled
              required
              v-model="ResponseBusinessData.REGISTRATION_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Category"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CUSTOMER_CATEGORY_NM"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Short Name"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CUSTOMER_SHORT_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Group ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GROUP_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Concentration"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CUSTOMER_CONCENTRATION_NM"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Date of birth"
              disabled
              filled
              required
              v-model="ResponseBusinessData.BIRTH_DATE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Address"
              disabled
              filled
              required
              v-model="ResponseBusinessData.ADDRESS1"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Phone"
              disabled
              filled
              required
              v-model="ResponseBusinessData.PHONE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Customer email"
              disabled
              filled
              required
              v-model="ResponseBusinessData.EMAIL"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Mobile"
              disabled
              filled
              required
              v-model="ResponseBusinessData.MOBILE"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Pay In Mode Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Transfer Transection"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_IN_FLAG"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Account No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_IN_TRF_ACNO"
            />
          </v-col>
        </v-row>
      </v-container>

        <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Pay Out principle Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="By Cash Transection"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_PRIN_CSH"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="By Transfer Transection"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_PRIN_TRN"
            />
          </v-col>
        </v-row>
          <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Account No"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_IN_TRF_ACNO"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="By Sundry Account"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_SUND_ACC"
            />
          </v-col>
        </v-row>
          <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Banker's Cheque Account"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_BANKERS_CHQ_ACC"
            />
          </v-col>
          </v-row>
      </v-container>

        <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Pay Out Interest Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="By Cash Transection"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_CSH"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="By Transfer Transection"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_TRN"
            />
          </v-col>
        </v-row>
          <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Account No"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_ACNO"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="By Sundry Account"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_SUND_ACC"
            />
          </v-col>
        </v-row>
          <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Banker's Cheque Account"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_BANKERS_CHQ_ACC"
            />
          </v-col>
          </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Balance Details</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Available Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.AVAIL_BALANCE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	On Clearing"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CLG_AMOUNT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Current Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURRENT_BALANCE_CCY"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Floating Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.FLOATING_AMOUNT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Hold Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.HOLD_AMOUNT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Blocked Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BLOCKED_AMOUNT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Min Balance Required"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MIN_BALANCE_REQ"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="BOD Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.OPENING_BALANCE_CCY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Sweep In Amount On Lien"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LIEN_AMOUNT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Amt Available for sweep In"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SWP_IN_AMOUNT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Auth. Pending Dr. Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PEND_AUTH_DR"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Ineterest Up to Last Month"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACCUMULATED_INTEREST_CR"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Interest To Month"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_ACCRUED_TO_MONTH_CR"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Parameter Rate"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_POS_INT_CR_VARI"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Payable Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_POS_INT_CR_VARI"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Instrument No"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INSTRUMENT_NO"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Rate ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_RATE_ID"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Total Rate"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_INT_TOT_CR"
            />
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Varience Rate (+)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_POS_INT_CR_VARI"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Varience Rate (-)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_NEG_INT_CR_VARI"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Charge Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="chargeheaders"
          :items="chargetabledata"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Document List in Account</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="documentheaders"
          :items="doctabledata"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

var headersData = [
  {
    text: "Transaction Profile",
    value: "CUSTOMER_ID",
  },
  {
    text: "Period",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "No. Of Transaction / Period",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Maximum Size / Per Transaction",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Total Value",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "REMARKS",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
];

var chequeheadersData = [
  {
    text: "Account No.",
    value: "CUSTOMER_ID",
  },
  {
    text: "Account Name",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "Start Leaf No.",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "End Leaf No.",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Total Leaves No.",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Used Leaves No.",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Issue date",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
];

var chargeheadersData = [
  {
    text: "Rule ID",
    value: "CHARGE_RULE_ID",
  },
  {
    text: "Rule Name",
    value: "CHARGE_RULE_NM",
  },
  {
    text: "Rule Type",
    value: "CUSRULE_TYPE_NM",
  },
  {
    text: "Waiver(Customer Level)",
    value: "WAIVER_CUST",
  },
  {
    text: "Waiver(A/C Level)",
    value: "WAIVER_ACCT",
  },
];

var documentheadersData = [
  {
    text: "DOC Id",
    value: "DOC_Id",
  },
  {
    text: "DOC Name",
    value: "DOC_Name",
  },
  {
    text: "Necessity of Doc",
    value: "Necessity_of_Doc",
  },
  {
    text: "Input Date",
    value: "Input_Date",
  },
];

var transectionheadersData = [
  {
    text: "Expected value of tansaction",
    value: "CUSTOMER_ID",
  },
  {
    text: "Expected number of tansaction",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "Expected value of transaction Rating",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Expected value of cash transaction",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Expected number of cash transaction",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Expected value of cash rating",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Expected number of cash rating",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
];

export default {
  name: "TimeAccountModal",
  data() {
    return {
      customerData: {
        CustomerAccTDData: {},
        EnquiryData: {},
      },
      customerType: -1,
      homeBranch: "",
      customerName: "",
      headers: headersData,
      tableDataFromAPI: [],
      chequeheaders: chequeheadersData,
      chargeheaders: chargeheadersData,
      documentheaders: documentheadersData,
      transectionheaders: transectionheadersData,
      ResponseBusinessData: [],
      doctabledata: [],
      chargetabledata: [],
    };
  },
  props: {
    value: {
      required: true,
    },
  },

  created() {
    
    //this.GetCustomerInfoDataAPI();
    this.Tabledata()
    
  },
  computed: {
    
    EnquiryDataInfo: {
      get() {
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfo;
      },
    },
  },
 

  methods: {
    Tabledata(){
      this.doctabledata= this.EnquiryDataInfo.RTL_ACC_DOC
      this.chargetabledata= this.EnquiryDataInfo.LIST_COR_CHG_DEDUCT_PROD
    },
    
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
