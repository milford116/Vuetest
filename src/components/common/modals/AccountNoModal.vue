<template>
  <v-dialog
    v-model="value"
    halfscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
        <!-- <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
        <v-toolbar-title>Add New Child Account</v-toolbar-title>
        <v-spacer></v-spacer>
         <v-btn @click="close()" class="btn-bg-red">Close</v-btn>
        <v-toolbar-items>
          <v-btn dark text @click="value = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text>
        <v-form v-model="formValid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="GL Key"
                  :placeholder="'[Auto]'"
                  readonly
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  :items="glTypeItems"
                  required
                  readonly
                  v-model="form.glType"
                  label="GL Type"
                  placeholder="Asset"
                ></v-select>
              </v-col>

              <v-col cols="12" md="4"> </v-col>

              <v-col v-if="currGLItemData" cols="12" md="4">
                <v-text-field
                  v-model="form.glPrefix"
                  label="GL Prefix"
                  required
                  readonly
                  :placeholder="this.initializeFromItemData"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col v-if="currGLItemData" cols="12" md="4">
                <v-text-field
                  v-model="form.glAccountNo"
                  label="GL Account No"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4"> </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.openingDate"
                  label="Opening Date"
                  required
                  readonly
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.accountName"
                  label="Account Name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  :items="currencyItems"
                  required
                  item-text="label"
                  item-value="value"
                  v-model="form.currency"
                  label="Currency"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.level"
                  label="Level"
                  required
                  readonly
                >
                </v-text-field>
                (Level no. - length of level)
              </v-col>

              <v-col cols="12" md="4"> </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.accountType"
                  label="Account Type"
                  required
                  readonly
                >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.totallingAccount"
                  label="Totalling Account"
                  required
                  readonly
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" md="4"> </v-col>
              <v-col cols="12" md="4">
                <v-select
                  :items="postOptions"
                  item-text="text"
                  item-value="value"
                  v-model="form.accountPosting"
                  label="Account Posting"
                  required
                >
                </v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.totallingAccountName"
                  label="Totalling Account Name"
                  :value="getTotallingAccName(form.totallingAccount)"
                  required
                  readonly
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4"> </v-col>
              <v-col cols="12" md="4">
                <v-select
                  :items="balanceSheetItems"
                  item-text="text"
                  item-value="value"
                  v-model="form.balanceSheetVal"
                  label="Balance Sheet Item"
                  required
                >
                </v-select>
              </v-col>
            </v-row>

            <p class="font-weight-black">Accounting Group</p>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="16" md="4">
                <v-checkbox
                  v-model="form.glBreakUpRegister"
                  label="GL Break up Register"
                ></v-checkbox>
              </v-col>

              <v-col cols="16" md="4">
                <v-checkbox
                  v-model="form.ibtaAccount"
                  label="IBTA Account	"
                ></v-checkbox>
              </v-col>

              <v-col cols="16" md="4">
                <v-text-field label="Maker" value="rumman1" required readonly>
                </v-text-field>

                <v-text-field label="Last Action" value="Add" required readonly>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    value: {
      required: true,
    },
    currGLItemData: {
      required: true,
    },
    allGLItemsData: {
      required: true,
    },
    SLNovsObjectDict: {
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    getTodayDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;
      console.log(today);
      // this.form.openingDate = today;
      return today;
    },
    getTotallingAccName(totallingAccSLNo) {
      this.form.totallingAccountName = this.SLNovsObjectDict[
        totallingAccSLNo
      ].GL_ACC_NM;
      console.log(this.form.totallingAccountName);

      return this.form.totallingAccountName;
    },
  },
  computed: {
    initializeFromItemData() {
      this.form.glPrefix = this.currGLItemData
        ? String(this.currGLItemData.id.substring(0, 3))
        : "";

      this.form.glAccountNo = this.form.glPrefix;

      this.form.balanceSheetVal = this.SLNovsObjectDict[
        this.currGLItemData.id
      ].OFF_BS_FLAG;

      this.form.accountPosting = this.SLNovsObjectDict[
        this.currGLItemData.id
      ].POSTABLE;

      this.form.totallingAccount = this.currGLItemData.id; // curr item will be parent of its child node

      return this.form.glPrefix;
    },
  },
  data() {
    return {
      formValid: true,
      glTypeItems: ["Asset"],
      postOptions: [
        {
          value: 0,
          text: "Non-Postable",
        },
        {
          value: 1,
          text: "Postable",
        },
      ],
      balanceSheetItems: [
        {
          value: 0,
          text: "Balance Sheet",
        },
        {
          value: 1,
          text: "Off Balance Sheet",
        },
      ],
      currencyItems: [],
      form: {
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
      },
      requestBody: {
        port: 44368,
        path: "/CorGLChartAccountParameter/GetCurrencyListDDL",
        method: "GET",
        data: {
          BusinessData: {
            nameValueList: 1,
            currencyShNm: "",
            currencyFullNm: "",
            currencyReportNm: "",
          },
        },
      },
    };
  },
  mounted() {
    this.form.openingDate = this.getTodayDate();

    const proxy_server_ip = "http://localhost:5000/";

    Axios.post(proxy_server_ip, this.requestBody)
      .then((response) => {
        // convert businessdata from string to object
        // console.log('response is~~~ ', response);
        this.currencyItems = JSON.parse(response["data"].ResponseBusinessData);
        console.log(this.currencyItems);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
</script>

<style scoped>
</style>