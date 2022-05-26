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
        <v-toolbar-title>Customer Information</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          @click="sendSelectedItemToParent()"          
          style="margin-right: 3% !important"
          class="btn-bg-green"
        >
          OK
        </v-btn>              
        <v-btn @click="close()" class="btn-bg-red">Close</v-btn>
        
      </v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-autocomplete
                label="Customer Type"
                :items="customerTypeList"
                v-model="customerType"
                item-text="TypeName"
                item-value="Id"
                disabled
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-text-field
                label="Home Branch"
                v-model="homeBranch"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="8">
              <v-text-field
                label="Customer Name"
                v-model="customerName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2" sm="4">
              <v-btn @click="callCustomerAPI" class="v-btn-search" :disabled="disableButton" small
                >Find
                </v-btn>
            </v-col>
          </v-row>
          <br>
          <!-- <div>{{ selectedItem }}</div> -->
          <v-data-table
            @click:row="rowClick"
            @dblclick:row="sendSelectedItemToParent"
            item-key="CUSTOMER_ID"
            single-select
            :headers="headers"
            :items="tableDataFromAPI"
            :items-per-page="10"
            class="elevation-1"
            dense
          ></v-data-table>
          <v-col cols="12" md="3">
              
              
            </v-col>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>



<script>
import Axios from "axios";

import { commonConfig } from "../../js/ApiLib.js";
import { CoreCustomerAPI } from "../../../../public/config.js";

import {
  CoreAPIGatewatyAPI,
  CoreGLAPI,
  CoreSecurityAPI,
  ConfigParameterAPI,
} from "../../../../public/config.js";

var headersData = [
  {
    text: "Customer ID",
    value: "CUSTOMER_ID",
  },
  {
    text: "Customer Name",
    value: "CUSTOMER_FULL_NM",
  },
  {
    text: "Concentration Name",
    value: "CONCENTRATION_NM",
  },
  {
    text: "TIN",
    value: "TIN_NO",
  },
  {
    text: "National ID",
    value: "NATIONAL_ID",
  },
  {
    text: "Business Address",
    value: "BUSINESS_ADDRESS",
  },
  {
    text: "Trade License No",
    value: "TRADE_LICENSE_NO",
  },
  {
    text: "Nature of Ownership",
    value: "OWNERSHIP_TYPE_ID_CIB",
  },
];

var customerListApiBodyData = {
  //port: 44343,
  path: "/CorCusProfileFetch/GetCorCusProfileList",
  method: "GET",
  data: {
    BusinessData: {
      Name_Value_List: "3",
      HOME_BRANCH_ID: "0001",
      CUSTOMER_TYPE_ID: "",
      Customer_nm: "",
    },
  },
};

export default {
  data() {
    return {
      selectedItem: null,
      customerType: 2,
      homeBranch: "0001",
      disableButton: false,
      customerName: "",
      customerListApiBody: customerListApiBodyData,
      customerTypeList: [
        {
          Id: 1,
          TypeName: "Individual",
        },
        {
          Id: 2,
          TypeName: "Organization",
        },
      ],
      headers: headersData,
      tableDataFromAPI: [],
    };
  },
  props: {
    value: {
      required: true,
    },
    currentSelectedItem: {
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit("input", !this.value);
    },

    callCustomerAPI() {
      this.disableButton = true;
      console.log("test");
      this.$Progress.start();
      console.log(this.homeBranch);
      console.log(this.customerName);
      this.customerListApiBody.data.BusinessData.HOME_BRANCH_ID = this.homeBranch;
      this.customerListApiBody.data.BusinessData.Customer_nm = this.customerName;
      this.customerListApiBody.data.BusinessData.CUSTOMER_TYPE_ID = this.customerType;
      console.log(this.customerListApiBody.data.BusinessData);

      let config = commonConfig(this.customerListApiBody, CoreCustomerAPI);

      Axios(config)
        .then((response) => {
          console.log(response["data"]);
          this.tableDataFromAPI = JSON.parse(
            response["data"].responseBusinessData
          );
          // console.log(this.tableDataFromAPI);
          this.$Progress.finish();
        })
        .catch(function (error) {
          console.error(error);
          this.$Progress.fail();
        });

      this.disableButton = false;
    },
    sendSelectedItemToParent() {
      this.$emit("getSelectedTableItem", this.selectedItem);
      this.close();
    },
    rowClick: function (item, row) {
      console.log(item);
      row.select(true);
      this.selectedId = item.CUSTOMER_ID;
      // console.log(this.selectedId);
      this.selectedItem = item;
    },
  },
};
</script>
