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
              v-model="DemandDepositData.ACC_TITLE"
            />
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              label="Contact Address"
              disabled
              filled
              required
              v-model="conaddress"
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
              v-model="specialIns"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Last Status Date"
              disabled
              filled
              required
              v-model="lastStatusDate"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Account Open Date"
              disabled
              filled
              required
              v-model="DemandDepositData.ACC_OPEN_DT"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Account Type"
              disabled
              filled
              required
              v-model="DemandDepositData.ACC_TYPE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Account Status"
              disabled
              filled
              required
              v-model="DemandDepositData.ACC_STATUS_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Notice Applicable"
              disabled
              filled
              required
              v-model="DemandDepositData.NOTICE_APPLICABLE"
              
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="ATM Use"
              disabled
              filled
              required
              v-model="atmUse"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Last Statement Generation Date"
              disabled
              filled
              required
              v-model="lastStatdate"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="currency"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="City"
              disabled
              filled
              required
              v-model="city"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Telephone"
              disabled
              filled
              required
              v-model="telephone"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Country"
              disabled
              filled
              required
              v-model="country"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Status change Date"
              disabled
              filled
              required
              v-model="statuschngdate"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Withdrawal Condition"
              disabled
              filled
              required
              v-model="withdrawCon"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Standing Instruction"
              disabled
              filled
              required
              v-model="standIns"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Sweep In"
              disabled
              filled
              required
              v-model="sweepIn"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Sweep Out"
              disabled
              filled
              required
              v-model="sweepOut"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Relational Officer"
              disabled
              filled
              required
              v-model="relofficer"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="	Remote Branch Use"
              disabled
              filled
              required
              v-model="remoteUse"
            />
          </v-col>

          <v-col cols="12" md="8">
            <v-text-field
              label="Introducer"
              disabled
              filled
              required
              v-model="introducerModel"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Product Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Product ID"
              disabled
              filled
              required
              v-model="productID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Product Name"
              disabled
              filled
              required
              v-model="DemandDepositData.PRODUCT_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Rate ID"
              disabled
              filled
              required
              v-model="rateId"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Total Rate"
              disabled
              filled
              required
              v-model="rateName"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="currency"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Product Short Name"
              disabled
              filled
              required
              v-model="proShortName"
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
              v-model="cusCode"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Registration Date"
              disabled
              filled
              required
              v-model="regdate"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Category"
              disabled
              filled
              required
              v-model="cusCat"
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
              v-model="shortname"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Group ID"
              disabled
              filled
              required
              v-model="groupId"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Concentration"
              disabled
              filled
              required
              v-model="cusCon"
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
              v-model="dob"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Address"
              disabled
              filled
              required
              v-model="cusAdd"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Phone"
              disabled
              filled
              required
              v-model="cusPhone"
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
              v-model="cusEmail"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer Mobile"
              disabled
              filled
              required
              v-model="cusMobile"
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
              v-model="availablebal"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	On Clearing"
              disabled
              filled
              required
              v-model="onClear"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Current Balance"
              disabled
              filled
              required
              v-model="curbalance"
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
              v-model="floatAmount"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Hold Balance"
              disabled
              filled
              required
              v-model="holdbal"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="	Blocked Amount"
              disabled
              filled
              required
              v-model="blockAmount"
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
              v-model="minBalance"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="BOD Balance"
              disabled
              filled
              required
              v-model="bodbalance"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Lien Amount"
              disabled
              filled
              required
              v-model="lienAmount"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Auth. Pending Dr. Amount"
              disabled
              filled
              required
              v-model="authPenDrAmount"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Interest To Month"
              disabled
              filled
              required
              v-model="intMonth"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Auth. Pending Cr. Amount"
              disabled
              filled
              required
              v-model="authPenCrAmount"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Interest Up To Last Month"
              disabled
              filled
              required
              v-model="intUpLastMonth"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Transaction Profile Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="headers"
          :items="tableDataFromAPI"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Cheque Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="chequeheaders"
          :items="tableDataFromAPI"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
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
          :items="tableDataFromAPI"
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
          :items="tableDataFromAPI"
          :items-per-page="10"
          class="elevation-1"
          dense
        ></v-data-table>
      </v-container>

      <v-container>
        <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
          <v-toolbar-title>Transaction Profile Rating</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <br />

        <v-data-table
          item-key="CUSTOMER_ID"
          single-select
          :headers="transectionheaders"
          :items="tableDataFromAPI"
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
    value: "CUSTOMER_ID",
  },
  {
    text: "Rule Name",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "Rule Type",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Waiver(Customer Level)",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Waiver(A/C Level)",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
];

var documentheadersData = [
  {
    text: "DOC Id",
    value: "CUSTOMER_ID",
  },
  {
    text: "DOC Name",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "Necessity of Doc",
    value: "CUSTOMER_CONCENTRATION_NM",
  },
  {
    text: "Input Date",
    value: "CUSTOMER_CONCENTRATION_NM",
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
  name: "DemandDepositModal",
  data() {
    return {
      customerType: -1,
      homeBranch: "",
      customerName: "",
      headers: headersData,
      tableDataFromAPI: [],
      chequeheaders: chequeheadersData,
      chargeheaders: chargeheadersData,
      documentheaders: documentheadersData,
      transectionheaders: transectionheadersData,

    
    };
  },
  props: {
    value: {
      required: true,
    },
  },

  computed: {
    DemandDepositData: {
      get() {
        return this.$store.state.DemandDepositData.DemandDepositData;
      },
    },
  },

  created() {},

  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
