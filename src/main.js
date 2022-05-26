import Vue from "vue";
import App from "./App.vue";
import router from "@/router/app-router.js";
import axios from "axios";

import "./assets/css/fontawesome-all.min.css";
import "./assets/css/animate.min.css";

import "./assets/css/googleapifonts.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/feather/css/feather.css";
import "./assets/css/perfect-scrollbar.css";
import "./assets/css/datta-icon.css";
import "./assets/css/style.css";

import "jquery";
import "popper.js";
import "./assets/js/vendor-all.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./assets/js/pcoded.min.js";
import "./assets/js/menu-setting.min.js";

import "./assets/css/materialdesignicons.min.css";
import store from "./store/store";
import "./plugins/base";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import "./assets/css/main.css";
import VueProgressBar from "vue-progressbar";
import lodash from 'lodash/lang';

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import "./rules/validationRules.js";
import DatePickerWithText from "@/components/DatePickerWithText.vue";
import moment from 'moment';
import DateMixin from "@/components/mixins/DateMixin";
import APIHandlingMixin from "@/components/mixins/APIHandlingMixin";
import CommonMixin from "@/components/mixins/CommonMixin";

Vue.config.productionTip = false;
Vue.use(VueProgressBar, {
    color: "#CA226B",
    failedColor: "red",
    height: "10%",
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (!store.getters.isLoggedIn && to.params.requestData) {
//             const request = to.params.requestData;
//             const requestDecript = atob(request);
//             const requestBody = JSON.parse(requestDecript);
//             //need to check if the JWT token is valid here

//             if (requestBody.data.JwtToken) {
//                 next();
//             } else {
//                 next({
//                     name: "userLogin",
//                 });
//             }
//         } else if (!store.getters.isLoggedIn) {
//             // user is NOT logged in
//             next({
//                 name: "userLogin",
//             });
//         } else {
//             next();
//         }
//     } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
//         if (store.getters.isLoggedIn) {
//             // user IS logged in
//             next({
//                 name: "Home Page",
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("DatePickerWithText", DatePickerWithText);

Vue.mixin(DateMixin);
Vue.mixin(APIHandlingMixin);
Vue.mixin(CommonMixin);

Vue.prototype.$moment = moment;
Vue.prototype.$lodash = lodash;

const vm = new Vue({
    router,
    axios,
    store,
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount("#app");