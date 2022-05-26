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
              label="Account Title"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_TITLE"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Account Ref."
              disabled
              filled
              required
              v-model="ResponseBusinessData.ADDRESS1"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Customer ID"
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
              label="Account Status"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SPECIAL_INST"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Product"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CITY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
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
              label="Commitment ID"
              disabled
              filled
              required
              v-model="ResponseBusinessData.COUNTRY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Last Proposal ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_STATUS"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Rollover SL"
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
              label="Rollover Type"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_STATUS_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Account Opening Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_OPEN_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Interest Rate %"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRM_TOT_NO"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Disbursement Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_MATURITY_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Disbursed Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURR_SH_NAME"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Loan Limit"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.FUTURE_AMT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Allowable Limit"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MAT_DUE_NOTICE_DAY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Term Period"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.FUTURE_AMT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Block Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LST_STATE_GEN_DT"
            />
          </v-col>

        </v-row>
       
        <v-row>

          <v-col cols="12" md="4">
            <v-text-field
              label="Effective Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MAT_PRE_ENCASH_FLAG"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Limit Available"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_PRN_TRN"
            />
          </v-col>
            <v-col cols="12" md="4">
            <v-text-field
              label="Expiry Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_TRN"
            />
          </v-col>
        </v-row>

        <v-row>

          <v-col cols="12" md="4">
            <v-text-field
              label="Advance Payment Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_PRN_ACC_NO"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Loan Status"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_INT_ACC_NO"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Loan Department"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.Remote_flag"
            />
          </v-col>
         
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
            <v-text-field
              label="Last Rescheduling SL."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MAT_PST_DEPO_FLAG"
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="	Schedule Based Interest Calculation"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAY_OUT_PRN_ACC_NO"
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
              label="Address "
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CUSTOMER_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Zip/Postal Code"
              disabled
              filled
              required
              v-model="ResponseBusinessData.REGISTRATION_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="District"
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
              label="Phone"
              disabled
              filled
              required
              v-model="ResponseBusinessData.CUSTOMER_SHORT_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Division/State"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GROUP_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Mobile"
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
              label="City/Town/Areas"
              disabled
              filled
              required
              v-model="ResponseBusinessData.BIRTH_DATE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Email"
              disabled
              filled
              required
              v-model="ResponseBusinessData.ADDRESS1"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Country"
              disabled
              filled
              required
              v-model="ResponseBusinessData.PHONE"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Loan Outstanding Balance</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="outstandingheaders"
          :items="Outstanding"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

       <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Interest Suspense Amount</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="interestheaders"
          :items="interest"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

       <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Accrued Interest</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="Acinterestheaders"
          :items="Acinterest"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

       <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Late Fee</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="latefeeheaders"
          :items="latefee"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>


      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Scheme information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Open Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_OPEN_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="	Maturity Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACC_MATURITY_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Total Term"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRM_TOT_NO"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Term frequency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRM_FREQ"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Term Paid"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRM_TOT_ON"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="irregular Payment"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRM_TOT_IRG_NO"
            />
          </v-col>
        </v-row>
        <v-row>
        

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Interest Rate ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_RATE_ID_PRM"
            />
          </v-col>
             <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Parameter Rate"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_RATE_TOT"
            />
          </v-col>
             <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Last Int. Calc. date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LST_INT_CAL_DT_CR"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Installment Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INSTL_AMT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Interest calc."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_CAL_FLAG"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Panelty Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PNL_AMT_PAID"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Renewal Term NO"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.RENEW_TRM_NO"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Renewal Term paid"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.RENEW_TRM_ON"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Last Renewal date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.RENEW_LST_DT"
            />
          </v-col>
           <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="principle Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRINCIPAL_AMT"
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
              color="info"
              class="purple-input"
              label="Available Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.AVAIL_BALANCE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="	On Clearing"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CLG_AMOUNT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
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
              color="info"
              class="purple-input"
              label="Floating Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.FLOATING_AMOUNT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Hold Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.HOLD_AMOUNT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
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
              color="info"
              class="purple-input"
              label="Sweep In Amount On Lien"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LIEN_AMOUNT"
            />
          </v-col>
             <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Amt Available for sweep In"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SWP_IN_AMOUNT"
            />
          </v-col>
             <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Authorized Debit Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SWP_IN_AMOUNT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Interest Up To Last Month"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SWP_IN_AMOUNT"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Interest To Month"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_ACCRUED_TO_MONTH_CR"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              color="info"
              class="purple-input"
              label="Total Ineterest"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ACCUMULATED_INTEREST_CR"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Interest Payable"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_ACCRUED_TO_MONTH_CR"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="BOD Balance"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_POS_INT_CR_VARI"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Down Payment"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROD_POS_INT_CR_VARI"
            />
          </v-col>
           <v-col cols="12" md="3">
            <v-text-field
              color="info"
              class="purple-input"
              label="Down Payment Paid"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INSTRUMENT_NO"
            />
          </v-col>
        </v-row>
         
      </v-container>

      

    </v-card>
  </v-dialog>
</template>

<script>

var outstandingheadersData = [

{
          align: 'start',
          sortable: false,
          value: 'name',
        },
  {
    text: "	Principal",
    value: "Principal",
  },
  {
    text: "Interest",
    value: "Interest",
  },
  {
    text: "Charge",
    value: "Charge",
  },
  {
    text: "Total Outstanding",
    value: "TotalOutstanding",
  },
  
];

var interestheadersData = [

{
          align: 'start',
          sortable: false,
          value: 'name',
        },
  {
    text: "	Interest Amount",
    value: "InterestAmount",
  },
  {
    text: "Penalty Suspense",
    value: "PenaltySuspense",
  },
  {
    text: "	Total Suspense",
    value: "TotalSuspense",
  },
  
  
];

var AcinterestheadersData = [

{
          align: 'start',
          sortable: false,
          value: 'name',
        },
  {
    text: "Normal Interest",
    value: "NormalInterest",
  },
  {
    text: "Penalty Interest",
    value: "PenaltyInterest",
  },
  {
    text: "Total Accrued",
    value: "TotalAccrued",
  },
  
  
];

var latefeeheadersData = [

{
          align: 'start',
          sortable: false,
          value: 'name',
        },
  {
    text: "Late Fee",
    value: "LateFee",
  },
  {
    text: "VatAmount",
    value: "VatAmount",
  },
  {
    text: "Total",
    value: "Total",
  },
  
  
];





export default {
  name: "LoanModal",
  data() {
    return {
      customerData: {
        CustomerAccTDData: {},
        EnquiryData: {},
      },
      customerType: -1,
      homeBranch: "",
      customerName: "",
      outstandingheaders: outstandingheadersData,
      interestheaders: interestheadersData,
      Acinterestheaders: AcinterestheadersData,
      latefeeheaders: latefeeheadersData,
     

       Outstanding: [
        {
          name: 'A) Current Outstanding Balance :',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
        {
          name: 'B) Authorization Pending (Dr) :',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
        {
          name: 'C) Authorization Pending (Cr) :',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
        {
          name: 'D) Uncleared Clearing (Cr) :',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
        {
          name: 'E) Uncleared Clearing (Dr) ::',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
        {
          name: 'F) Actual O/S Balance [A-C-D-E] :',
          Principal: null,
          Interest: null,
          Charge: null,
          TotalOutstanding: null,
          
        },
       ],

        interest: [
        {
          name: 'SMA :',
          InterestAmount: null,
          PenaltySuspense: null,
          TotalSuspense: null,
          
          
        },
        {
          name: 'Classified :',
          InterestAmount: null,
          PenaltySuspense: null,
          TotalSuspense: null,
          
          
        },
        {
          name: 'Total Suspense Amount :',
          InterestAmount: null,
          PenaltySuspense: null,
          ChTotalSuspensearge: null,
         
          
        },
        ],

        Acinterest: [
        {
          name: 'G)Interest Accrued(Unprovisioned) :',
          NormalInterest: null,
          PenaltyInterest: null,
          TotalAccrued: null,
          
          
        },
        {
          name: 'H)Interest Accrued(Provisioned) :',
          NormalInterest: null,
          PenaltyInterest: null,
          TotalAccrued: null,
          
          
        },
       
        {
          name: 'J) Total Accrued Interest (G+H+I) :',
          NormalInterest: null,
          PenaltyInterest: null,
          TotalAccrued: null,
         
          
        },
        ],

        latefee: [
        {
          name: 'Late Fee Amount :',
          LateFee: null,
          VatAmount: null,
          Total: null,
          
          
        },
        ],
    };
  },
  props: {
    value: {
      required: true,
    },
  },
  created() {

  },
  computed: {
    
    EnquiryDataInfo: {
      get() {
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoSCM;
      },
    },
  },

  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
