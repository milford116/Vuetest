<template>
  <v-dialog
    max-width="50%"
    v-model="value"
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark color="rgb(63 77 103)">
        <!-- <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
        <v-toolbar-title>Select Account Informations</v-toolbar-title>
        <v-spacer></v-spacer>
         <v-btn @click="close()" class="btn-bg-red">Close</v-btn>
        <v-toolbar-items>
          <v-btn dark text @click="value = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- {{ form }} -->
      <!-- ---------------
      {{ value }}
      ---------------
      <br />
      {{ allGLItemsData.length }}
      <br />

      ---------------
      {{ currGLItemData }}
      --------------- -->

      <v-card-text>
        <v-form v-model="formValid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  :items="accTypeItems"
                  required
                  v-model="form.accType"
                  color="info"
                  label="A/C Type"
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-select
                  color="info"
                  :items="currencyItems"
                  required
                  v-model="form.currencyType"
                  label="Currency"
                ></v-select>
              </v-col>

              <v-col cols="12" md="4">
                <v-select
                  color="info"
                  :items="postOptions"
                  required
                  v-model="form.postabilityType"
                  label="Postability"
                  readonly
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-radio-group v-model="form.searchTypeSelection" row>
                <v-radio
                  color="rgb(63 77 103)"
                  label="Account Serial No."
                  value="0"
                ></v-radio>
                <v-radio
                  color="rgb(63 77 103)"
                  label="Account Number"
                  value="1"
                ></v-radio>
              </v-radio-group>
            </v-row>

            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  color="info"
                  v-model="form.startNo"
                  label="Start"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  color="info"
                  v-model="form.endNo"
                  label="End"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  color="info"
                  v-model="form.AccountName"
                  label="Account Name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-btn
                  @click="callMasterAccountsAPI"
                  depressed
                  color="rgb(63 77 103)"
                >
                  Find
                </v-btn>
              </v-col>
            </v-row>

            <!-- <div>{{ selectedItem }}</div> -->

            <v-data-table
              @click:row="rowClick"
              @dblclick:row="sendSelectedItemToParent"
              item-key="GL_ACC_SL"
              single-select
              :headers="headers"
              :items="tableDataFromAPI"
              :items-per-page="10"
              class="elevation-1"
              dense
            ></v-data-table>

           <v-col cols="12" md="3">
            <v-btn @click="sendSelectedItemToParent()" class="btn-bg-green">
              OK
            </v-btn>
          </v-col>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Axios from "axios";
import {
  postOptionsData,
  accTypeItemsData,
  currencyItemsData,
  formData,
  headersData,
  masterAccRequestBodyData,
} from "./data/PopUpData.js";
import {
  CoreAPIGatewatyAPI,
  CoreGLAPI,
  CoreSecurityAPI,
  ConfigParameterAPI,
} from "../../../../public/config.js";
import { commonConfig } from "../../js/ApiLib.js";
export default {
  data() {
    return {
      selectedId: -1,
      selectedItem: {},
      formValid: true,
      glTypeItems: ["Asset"],
      postOptions: postOptionsData,
      accTypeItems: accTypeItemsData,
      currencyItems: currencyItemsData,
      form: formData,
      masterAccRequestBody: masterAccRequestBodyData,
      headers: headersData,

      tableDataFromAPI: [],
    };
  },

  methods: {
    callMasterAccountsAPI() {
      console.log("hiii");
      this.$Progress.start();

      // this.masterAccRequestBody.port = 44343;
      // this.masterAccRequestBody.path = "/CorGlLedger/GetCorGLMasterAccountList";

      var tempData = {
        BusinessData: {
          Name_Value_List: "",
          GL_BRANCH_ID: this.$store.getters.getBranchID,
          CurrencyType: "",
          Gl_CURRENCY_ID: "",
          POSTABLE: "",
          OFF_BS_FLAG: "",
          RangeType: "",
          StartAcc: "",
          EndAcc: "",
          GLACC_NM: "",
          // StartAcc: this.form.startNo,
          // EndAcc: this.form.endNo,
          // GLACC_NM: this.form.AccountName,
        },
      };

      this.masterAccRequestBody.data = tempData; 

      let config = commonConfig(this.masterAccRequestBody, CoreGLAPI);

      Axios(config)
        .then((response) => {
          this.tableDataFromAPI = JSON.parse(
            response["data"].ResponseBusinessData
          );
          // console.log(this.tableDataFromAPI);
          this.$Progress.finish();
        })
        .catch(function (error) {
          console.error(error);
          this.$Progress.fail();
        });
    },
    sendSelectedItemToParent() {
      this.$emit("getSelectedTableItem", this.selectedItem);
      this.close();
    },
    rowClick: function (item, row) {
      row.select(true);
      this.selectedId = item.GL_ACC_SL;
      this.selectedItem = item;
    },
    close() {
      this.$emit("input", !this.value);
    },
  },

  props: {
    value: {
      required: true,
    },
    currentSelectedItems: {
      required: true,
    },
  },
};
</script>

