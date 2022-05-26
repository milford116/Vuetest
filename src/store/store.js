import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user/user";
import auth from "./modules/auth/auth";
import menu from "./modules/menu/menu";
import customerpfoile from "./modules/customerprofile/customerprofile.js";


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    auth,
    menu,
    customerpfoile, 
    
  },
});
