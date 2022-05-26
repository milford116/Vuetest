<template>
  <v-dialog
    max-width="50%"
    :value="value"
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar :max-height="70" flat dark class="toolbar-color">
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
                label="Customer Type *"
                :items="customerTypeList"
                v-model="customerType"
                item-text="TypeName"
                item-value="Id"
                required
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
              <v-btn @click="callCustomerAPI" depressed color="rgb(63 77 103)"
                >Find</v-btn
              >
            </v-col>
          </v-row>  

          <v-data-table
            @click:row="rowClick"
            @dblclick:row="rowDblClick"
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
import OkCloseButton from "@/components/OkCloseButton.vue";

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
    value: "CUSTOMER_CONCENTRATION_NM",
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
    value: "ADDRESS1",
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
      CUSTOMER_TYPE_ID: "1",
      Customer_nm: "",
    },
  },
};

export default {
   components:{
      "button-component-okclose": OkCloseButton,
  },
  data() {
    return {
      customerType: -1,
      homeBranch: "",
      customerName: "",
      customerListApiBody: customerListApiBodyData,
      selectedItem: {},
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
  },

  created() {},

  methods: {
    close() {
      this.$emit("input", !this.value);
    },

    callCustomerAPI() {
      if (this.customerType === -1) {
        this.$root.$snackbar.seterrortext("No Customer Type Selected");
        return;
      }

      this.customerListApiBody.data.BusinessData.CUSTOMER_TYPE_ID = this.customerType;
      this.$Progress.start();
      let config = commonConfig(this.customerListApiBody, CoreCustomerAPI);

      Axios(config)
        .then((response) => {
          this.tableDataFromAPI = JSON.parse(
            response["data"].responseBusinessData
          );
          this.$Progress.finish();
        })
        .catch(function(error) {
          this.$Progress.fail();
          this.$root.$snackbar.seterrortext(error.response.data.responseMessage);
        });
    },

    onChange() {
      this.$Progress.start();
      this.customerListApiBodyData.data.BusinessData.CUSTOMER_TYPE_ID = this.customerType;
    },

    sendSelectedItemToParent() {
      this.selectedItem.CUSTOMER_TYPE_ID = this.customerType.toString();
      this.$emit("getSelectedTableItem", this.selectedItem);
      this.close();
    },
    rowClick: function(item, row) {
      row.select(true);
      this.selectedId = item.CUSTOMER_ID;
      this.selectedItem = item;
    },
    rowDblClick: function(mouseEvent, row) {
      this.selectedItem = row.item;
      this.sendSelectedItemToParent();
    }
  },
};
</script>

