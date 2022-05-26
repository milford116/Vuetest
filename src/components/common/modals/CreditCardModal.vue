<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <v-toolbar-title>Credit Card Information</v-toolbar-title>
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
              label="CCS Code"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CCS_CODE"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Card PA No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CARD_PA_NO"
            />
          </v-col>
           <v-col cols="12" md="4">
            <v-text-field
              label="Card Account No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CARD_AC_NO"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Card PA Title"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CARD_PA_TITLE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Card Limit Amount (Lcy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CARD_LIMIT_AMT_LCY"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Card Limit Amount (Ccy)"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.CARD_LIMIT_AMT_CCY"
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

          <v-col cols="12" md="4">
            <v-text-field
              label="Bank Branch Id"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BANK_BR_ID"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Bank Account No."
              disabled
              filled
              required
              v-model="EnquiryDataInfo.BANK_ACC_NO"
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
              v-model="EnquiryDataInfo.PHONE"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              label="Date of Birth"
              disabled
              filled
              required
              v-model="EnquiryDataInfo.DATE_OF_BIRTH"
            />
          </v-col>

        </v-row>
      </v-container>
      
    </v-card>
  </v-dialog>
</template>

<script>
 


export default {
  name: "CreditCardModal",
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
        return this.$store.state.CustomerEnquiryData.EnquiryDataInfoCredit;
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
