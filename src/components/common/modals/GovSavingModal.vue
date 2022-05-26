<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Government Savings Instrument</v-toolbar-title>
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
              label="Registration No"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.REG_NO"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Card PA No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.PRODUCT_NAME"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Currency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CURRENCY_CODE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Exchange Rate"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.EXCHANGE_RATE_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Customer"
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
              v-model="EnquiryDataInfo.REG_DATE"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Maturity Date"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.MATURITY_DT"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Capt. Frequency"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.INT_CAPT_FREQ_FULL_NAME"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Transaction Amount LCY"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.AMOUNT_LCY"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Transaction Amount CCY"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.AMOUNT_CCY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Nominee Name"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.NOMI_NAME"
            />
          </v-col>

        </v-row>
      </v-container>
      
    </v-card>
  </v-dialog>
</template>

<script>


export default {
  name: "GovSavingModal",
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
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoGovt;
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
