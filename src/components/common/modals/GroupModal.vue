<template>
  <v-dialog
    max-width="50%"
    v-model="value"
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
               <v-col cols="12" md="4">
          <v-text-field
            label="Home Branch"
    
            required
            v-model="homeBranch"
          />
        </v-col>
            <v-col cols="12" sm="6" md="4">
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
            <v-col cols="12" md="9" sm="6">
              <v-text-field
                label="Group Name"
                v-model="customerName"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" md="2" sm="4">
              <v-btn @click="getGroupList()" class="v-btn-search"> Find </v-btn>
            </v-col>
          </v-row>  

          <v-data-table
            @click:row="rowClick"
            @dblclick:row="sendSelectedItemToParent"
            item-key="GROUP_ID"
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

var headersData = [
  {
    text: "Group ID",
    value: "GROUP_ID",
  },
  {
    text: "Group Name",
    value: "GROUP_NM",
  },
  {
    text: "Customer Concentration Name",
    value: "CONCENTRATION_NM",
  },
];

export default {
  data() {
    return {
      customerType: -1,
      homeBranch: "",
      customerName: "",
      selectedItem: {},
      customerTypeList: [
        {
          Id: 1,
          TypeName: "Corporate Group",
        },
        {
          Id: 2,
          TypeName: "Joint Account",
        },
        {
          Id: 3,
          TypeName: "Joint Venture",
        },
      ],
      headers: headersData,
      tableDataFromAPI: [],
      reqBodyData: {},
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
      this.$emit("closeGroupSearch", !this.value);
    },
    getGroupList() {
      this.reqBodyData.BusinessData = {
        NameValueList: "1",
        HomeBranchId: this.homeBranch,
        GroupTypeId: this.customerType,
        GroupName: this.customerName
      };
      const parameter = {
        path: "/CoreCusGroupProfile/GetCorCusGroupProfileList",
        method: "GET",
        data: this.reqBodyData,
      };
      let config = commonConfig(parameter, CoreCustomerAPI);
      Axios(config)
        .then((response) => {
          this.tableDataFromAPI = JSON.parse(response.data.responseBusinessData);
          if (this.tableDataFromAPI === null || this.tableDataFromAPI.length === 0) {
            return;
          }
        })
        .catch((e) => {
        });
    },
    sendSelectedItemToParent() {
      this.$emit("getSelectedTableItem", this.selectedItem);
      this.close();
    },
    rowClick: function(item, row) {
      row.select(true);
      this.selectedId = item.GROUP_ID;
      this.selectedItem = item;
    },
  },
};
</script>
