<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Customer Export LC</v-toolbar-title>
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
              label="Branch Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BRANCH_ID"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Export LC No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXP_LC_NO"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Product Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRODUCT_ID"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Advice Year"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ADVICE_YEAR"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Advice SL"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ADVICE_SL"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="LC Ammend No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMEND_NO"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="LC Ammend Date."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMEND_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Account No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CUST_AC_NO"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="LC Pay Mode"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_PAY_MODE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Tenor Period"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TENOR_PERIOD"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Applicant Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPLICANT_NAME"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Applicant Address"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.APPLICANT_ADDRS"
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
              label="Beneficiary Address"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BENF_ADDRS"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Export File No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXPORT_FILE_NO"
            />
          </v-col>
         </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="LC Amount (Ccy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMOUNT_CCY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="LC Amount (Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMOUNT_LCY"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Bill Amount (Ccy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BILL_AMOUNT_CCY"
            />
          </v-col>
         </v-row>

          <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Bill Amount (Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BILL_AMOUNT_LCY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Execution Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXEC_DATE"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Shipment Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SHIPMENT_DT"
            />
          </v-col>
         </v-row>

           <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Expiry Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXPIRY_DT"
            />
          </v-col>
           
         </v-row>
      </v-container>
      
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: "CustomerExportLCModal",
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
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoExport;
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
