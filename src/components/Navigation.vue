<template>
  <div class="navbar-wrapper">
    <div
      v-show="showFloatingMenu || keepFloatingMenu"
      @mouseover="keepFloatingMenu = true"
      @mouseleave="keepFloatingMenu = false"
    >
      <floating-menu-card
        v-model="currentGroupsFunctionList"
        :function_name_vs_func_data_dict="function_name_vs_func_data_dict"
      />
    </div>

    <div class="navbar-brand header-logo">
      <a href="/home" class="b-brand">
        <img
          src="../assets/images/LEADS-logo.png"
          title="leads"
          width="200"
          height="40"
        />
      </a>
      <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
    </div>

    <v-list color="#3f4d67" dense >
     

      <v-list-item-group v-model="selectedItem" color="primary" >
        <v-list-item 
          v-for="(item, i) in items"
          :key="i"
          @mouseover="mouseOverOnGroupName(item)"
          @mouseleave="mouseLeaveGroupName"
        >
          <!-- @mouseover="mouseOverOnGroupName(item)"
          @mouseleave="mouseLeaveGroupName" 
          
          @click="mouseClickOnGroupName(item)"
          -->

          <!-- <v-hover v-slot="{ hover }" open-delay="200"> -->
          <!-- {{ (showFloatingMenu = hover) }} -->

          <!-- <div> -->
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="generateSidebarOptions(item)"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import FloatingMenuCard from "@/components/common/FloatingMenuCard/FloatingMenuCard.vue";

import {
  generateDynamicMenu,
  getClusterNamesForSidebar,
} from "./js/Navigation";

export default {
  name: "Navigation",
  data: () => {
    return {
      showFloatingMenu: false,
      keepFloatingMenu: false,
      selectedItem: 1,
      items: [],
      currentGroupName: "",
      currentGroupsFunctionList: [],

      currentUserAccessData: null,
      group_name_vs_child_func_cluster_dict: null,
      fastpath_vs_function_name_dict: null,
      function_name_vs_func_data_dict: null,

      group_names_list: null,

      previousItem: null,
    };
  },
  methods: {
    mouseOverOnGroupName(item) {
      this.currentGroupName = item.text;
      this.currentGroupsFunctionList = this.getChildFunctionList();
      this.showFloatingMenu = true;
    },
    mouseClickOnGroupName(item) {
      console.log(item);

      if (this.showFloatingMenu === false) {
        this.currentGroupName = item.text;
        this.currentGroupsFunctionList = this.getChildFunctionList();
        this.showFloatingMenu = !this.showFloatingMenu;
      } else {
        if (item.text !== this.previousItem.text) {
          // clicked on a different group
          this.currentGroupName = item.text;
          this.currentGroupsFunctionList = this.getChildFunctionList();
        } else {
          // clicked on the same group
          this.showFloatingMenu = !this.showFloatingMenu;
        }
      }
      this.previousItem = item;
    },
    mouseLeaveGroupName() {
      this.showFloatingMenu = false;
    },
    cmp(a, b) {
      // ascending order sorting comparator
      if (a.FastPath < b.FastPath) return -1;
      else return 1;
    },
    getChildFunctionList() {
      return this.group_name_vs_child_func_cluster_dict[
        this.currentGroupName
      ].FunctionsArray.sort(this.cmp);
    },
    generateSidebarOptions(item) {
      return (
        item.text +
        " (" +
        this.group_name_vs_child_func_cluster_dict[item.text].FunctionsArray
          .length +
        ")"
      );
    },
  },
  components: {
    FloatingMenuCard,
  },
   watch: {
    "$store.getters.getUserAccessData": {
      // immediate: true,
      deep: true,
      handler(newValue) {
        this.currentUserAccessData = newValue;
        if (this.currentUserAccessData !== null) {
          [
            this.group_name_vs_child_func_cluster_dict,
            this.fastpath_vs_function_name_dict,
            this.function_name_vs_func_data_dict,
          ] = generateDynamicMenu(this.currentUserAccessData);

          this.items = getClusterNamesForSidebar(
            this.group_name_vs_child_func_cluster_dict
          );
        }
      },
    },
  },
  created() {
    this.currentUserAccessData = null;
    try {
      this.currentUserAccessData = this.$store.getters.getUserAccessData;
    } catch (err) {
    }
    if (this.currentUserAccessData !== null) {
      [
        this.group_name_vs_child_func_cluster_dict,
        this.fastpath_vs_function_name_dict,
        this.function_name_vs_func_data_dict,
      ] = generateDynamicMenu(this.currentUserAccessData);

      this.items = getClusterNamesForSidebar(
        this.group_name_vs_child_func_cluster_dict
      );
    }
  },
};
</script>
<style scoped>
.v-list-item__title {
      font-size: 16px !important;
      color: white !important;
  }
</style>
