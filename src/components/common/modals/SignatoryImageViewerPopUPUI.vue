<template>
  <v-dialog
    max-width="60%"
    :value="value"
    @input="$emit('input')"
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark color="toolbar-color">
        <v-toolbar-title>Signatory Information</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="close()" class="btn-bg-red">Close</v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="Branch ID"
                v-model="BranchId"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Account No"
                v-model="AccountNo"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Account Name"
                v-model="AccountHolderName"
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="p-t-30">
            <v-col cols="12" md="12">
              <base-material-card
                v-for="(item, ind) in SignatoryInformation"
                v-bind:key="item.IMAGE_ID"
              >
                <template v-slot:heading>
                  <div class="display-2 font-weight-light">
                    Signatory Number - {{ ind + 1 }}
                  </div>
                </template>
                <v-card-text>
                  <v-row>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Image ID :</b> {{ item.IMAGE_ID }}
                      </div>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Sign ID :</b> {{ item.SIGN_ID }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" sm="6">
                      <div class="item">
                        <b>Salutation :</b> {{ item.IMG_NM_PREFIX }}
                      </div>
                    </v-col>
                    <v-col cols="8" sm="6">
                      <div class="item">{{ item.IMG_NM }}</div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Effect Date :</b> {{ item.SIGN_EFFECT_DT }}
                      </div>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Expiry Date :</b> {{ item.SIGN_EXPIRY_DT }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" sm="6">
                      <div class="item">
                        <b>Data never expires No :</b>
                        {{ item.SIGN_DT_NEVER_EXPIRE }}
                      </div>
                    </v-col>
                    <v-col cols="4" sm="6">
                      <div class="item">
                        <b>Group :</b> {{ item.SIGN_CATEGORY }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4" sm="6">
                      <div class="item">
                        <b>Image Type :</b> {{ item.IMG_TYPE }}
                      </div>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Designation :</b> {{ item.DESIGNATION }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b>Debit Limit :</b>
                        {{ item.SIGN_LIMIT_DR_AMT }} (0-Zero means unlimited)
                      </div>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b> Credit Limit : </b
                        >{{ item.SIGN_LIMIT_CR_AMT }} (0-Zero means unlimited)
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6">
                      <div class="item">
                        <b> Relation with customer :</b>
                        {{ item.RELATION_WITH_CUST }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="item">
                        <b> Instruction :</b> {{ item.INSTRUCTION }}
                      </div>
                    </v-col>
                  </v-row>
                  <br /><br />
                  <v-row>
                    <v-col cols="12" sm="12">
                      <div
                        :class="{
                          active: item.Chk_Activision,
                          ImageStatusGreen: 'ImageStatusRed',
                        }"
                      >
                        {{
                          item.Chk_Activision
                            ? "Inactive Image"
                            : "Active Image"
                        }}
                      </div>
                    </v-col>
                  </v-row>
                  <br /><br />
                  <v-row class="p-20">
                    <v-img
                      mx-auto
                      max-height="150"
                      max-width="250"
                      v-bind:src="
                        'data:image/jpeg;base64,' + item.PICTURE_IMAGE
                      "
                    ></v-img>
                  </v-row>
                </v-card-text>
              </base-material-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  async created() {
    this.branchServiceType = this.$store.getters.getBRANCH_SRV_TYPE;
    this.userId = this.$store.getters.getUserId;
    await this.FetchData();
  },
  data() {
    return {
      FunctionNm: "Demand Deposit Balance Inquiry",
      SignatoryInformation: [],
    };
  },
  props: {
    value: {
      required: true,
    },
    AccountNo: {
      type: String,
    },
    AccountHolderName: {
      type: String,
    },
    BranchId: {
      type: String,
    },
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    async FetchData() {
      this.SignatoryInformation = await this.callApi();
    },
    async callApi(){
      const businessData = {
          BRANCH_ID: this.BranchId,
          ACCOUNT_NO: this.AccountNo,
          QUEUE_ID: ""
      };
      const response = await this.$getApiCall(
        this.FunctionNm,
        "customer",
        "/ImgSignatoryInfo/GetSignatoryInformationUI",
        businessData
      );
      return response;
    },
    GetYesNo(pvalue) {
      if (pvalue == 1) return "Yes";
      else return "No";
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>
