<template>
  <div id="styleSelector" class="menu-styler" :class="isMenuOpen ? 'open' : ''">
    <div class="style-toggler" @click="toggleMenu">
      <a > </a>
    </div>
    <div class="style-block">
      <div class="navbar-wrapper">
          <v-list>
            <v-list-item v-for="subItem in menuList" :key="subItem.TargetPath">                
                <v-list-item-content>
                  <v-list-item-title><router-link :to="{ path: subItem.TargetPath }">                    
                      {{ subItem.FunctionName }}
                    </router-link></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

          </v-list>
      </div>
    </div>
  </div>
</template>

<script>
// import FloatingMenuCard from "@/components/common/FloatingMenuCard/FloatingMenuCard.vue";
// import {
//   generateDynamicMenu,
//   getClusterNamesForSidebar,
// } from "./js/Navigation";

export default {
  name: "MenuCustomizer",
  data: () => {
    return {
      showFloatingMenu: false,
      items: [],
      currentGroupName: "",
      currentGroupsFunctionList: [],
      currentUserAccessData: null,
      group_name_vs_child_func_cluster_dict: null,
      fastpath_vs_function_name_dict: null,
      function_name_vs_func_data_dict: null,
      isMenuOpen: false,

menuList:[
  {
    TargetPath:"/customerprofileUI",
  FunctionName:"Customer Profile"
  },
  {
    TargetPath:"/customerProfileDeatilsUI",
  FunctionName:"Customer Profile Details"
  },
  {
    TargetPath:"/customerprofilewithnftUI",
  FunctionName:"Customer Profile with NFT"
  }
]

    };
  },
  methods: {
   
  
   
   close() {
      this.items.forEach((item) => {
        if (item.active) {
          _.delay(function () {
            item.active = false;
          }, 300);
          return false;
        }
      });
    },
    getCurrentFunctionList(item) {
      this.currentGroupName = item.text;
      this.currentGroupsFunctionList = this.getChildFunctionList(item.text);
      return this.currentGroupsFunctionList;
    },
    cmp(a, b) {
      // ascending order sorting comparator
      if (a.FastPath < b.FastPath) return -1;
      else return 1;
    },
    getChildFunctionList(currentGroupName) {
      let groupFunctions = this.group_name_vs_child_func_cluster_dict[
        currentGroupName
      ];
      return groupFunctions.FunctionsArray.sort(this.cmp);
    },
    toggleMenu() {
      const elm = document.getElementById("styleSelector");
      if (elm.classList.contains("open")) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = true;
      }
      this.$emit("isMenuOpen", this.isMenuOpen);
    },
  },
  // components: {
  //   FloatingMenuCard,
  // },
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
      // ignore
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
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  font-size: 18px;
  color: white !important;
}

.v-application a {
  color: white;
}

.theme--light.v-list {
  background: rgb(5 75 117);
}

.v-icon {
  color: white;
}

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 5px;
}

.v-list {
  height: 520px; /* or any height you want */
  overflow-y: auto;
}

.v-list::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.v-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.v-application a[data-v-eb718b04] {
  color: white;
  font-size: 12px;
}
</style>