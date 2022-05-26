<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Customer Import LC</v-toolbar-title>
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
              label="LC Branch Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_BRANCH_ID"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="LC Year"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_YEAR"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="LC Product Type"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_PRD_TYPE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="LC Serial"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_SERIAL"
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

          <v-col cols="12" md="4">
            <v-text-field
              label="Proposal Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PROPOSAL_ID"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="LC Ammend No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMEND_NO"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="LC Ammend Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LC_AMEND_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Credit Line Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CREDIT_LINE_ID"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Commitment Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.COMMIT_ID"
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

           <v-col cols="12" md="4">
            <v-text-field
              label="Benf Code"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BENF_CODE"
            />
          </v-col>

        </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Economic Purpose Code"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.ECO_PURPOSE_CODE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="LCaf No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LCAF_NO"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Tenor Period"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TENOR_PERIOD"
            />
          </v-col>
         </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Transmit Mode Code"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRANSMIT_MODE_CODE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Transmit Mode"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.TRANSMIT_MODE"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Shipping Marks"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SHIPPING_MARKS"
            />
          </v-col>
         </v-row>

          <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURRENCY_SH_NM"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Exchange Rate Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXC_RATE_ID"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Exchange Rate"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXC_RATE"
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
              label="Liability Issued"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LIABILITY_ISSUED"
            />
          </v-col>
         </v-row>

          <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Liability Reversed"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.LIABILITY_REVERSED"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Margin Percent"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MARGIN_PCT"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Margin Amount Lcy"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MARGIN_AMOUNT_LCY"
            />
          </v-col>
         </v-row>
         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Paid Margin Percent"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAID_MARGIN_PCT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Paid Margin Amount (Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PAID_MARGIN_AMOUNT_LCY"
            />
          </v-col>

           <v-col cols="12" md="4">
            <v-text-field
              label="Refund Margin (Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.REFUNDED_MARGIN_LCY"
            />
          </v-col>
         </v-row>

          <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Bill Amount (Ccy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BILL_AMOUNT_CCY"
            />
          </v-col>

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
         </v-row>

         <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Shipment Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.SHIPMENT_DT"
            />
          </v-col>

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
  name: "CustomerImportLCModal",
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
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoImport;
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
