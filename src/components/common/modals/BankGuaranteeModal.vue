<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Bank Guarantee</v-toolbar-title>
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
              label="GUARANTEE_ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GUARANTEE_ID"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Issue Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ISSUE_DATE"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Status"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.STATUS"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Guarantee Product"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GUR_PRD_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Effective Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EFFECT_DATE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURRENCY_SH_NM"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Guarantee Type"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GUR_TYPE_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Expiry Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXP_DATE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ISSUED_AMOUNT_CCY"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Customer ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPL_CUST_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Group ID"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPL_CUST_GRP_ID"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Amount"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ISSUED_AMOUNT_LCY"
            />
          </v-col>

        </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Applicant Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.GROUP_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Commitment"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.COMMIT_ID"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Address"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPL_CUST_ADDR1"
            />
          </v-col>
         </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Available Limit"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.AVAIL_LIMIT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Country"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPL_CUST_COUNTRY_NM"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Security Type"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SECURITY_TYPE"
            />
          </v-col>
         </v-row>

          <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Beneficiary Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BENF_NAME"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Margin Issued(Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ISSUED_AMOUNT_LCY"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Address"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BENF_CUST_ADD"
            />
          </v-col>
         </v-row>

           <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Margin Paid(Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MARGIN_PAID_AMT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Country"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BENF_CUST_COUNTRY_NM"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Refund Margin(Ccy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.REFUNDED_MARGIN_AMT"
            />
          </v-col>
         </v-row>
      </v-container>
      
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: "BankGuaranteeModal",
  data() {
    return {
      customerData: {
        CustomerAccTDData: {},
        EnquiryData: {},
      },
     
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
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoGuarantee;
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
