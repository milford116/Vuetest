import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";
import UserLogin from "@/views/Auth/Login/Login.vue";
import Logout from "@/views/Auth/Logout/Logout.vue";
import HomePage from "@/views/HomePage.vue";
import Customerprofilenft from "@/views/customerprofilewithnft/Customerprofilenft.vue";
import Customerprofile from "@/views/customerprofile/Customer.vue";
import Customerdetails from "@/views/customerProfileDetails/Components/Customerdetails.vue";
import Introducer from "@/views/customerProfileDetails/Components/Introducer.vue";
import ModuleHomePage from "@/views/ModuleHomePage.vue";




import NotFound from "@/views/404.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: {
            name: "userLogin",
        },
    },
    {
        path: "/login",
        name: "userLogin",
        component: UserLogin,
        meta: {
            requiresVisitor: true,
        },
    },
    
    {
        path: "/logout",
        name: "Logout",
        component: Logout,
        meta: {
            requiresAuth: false, // all children will need authentication too
        },
    },
     
    {
        path: "/tab-Introducer",
        name:"Introducer",
        component:Introducer
    },
    {
        path: "/customerprofilewithnftUI",
        name:"Customerprofile",
        component:Customerprofilenft
    },

    {
        path: "/customerprofileUI",
        name:"Customerprofileui",
        component:Customerprofile
    },
    {
        path: "/customerProfileDeatilsUI",
        name:"Customerdetails",
        component:Customerdetails
    },
    {
        name: "BU_UltimusNexTestProject",
        path: "/BU_Parameters",
        component: Layout,
        // meta: {
        //     requiresAuth: true, // all children will need authentication too
        // },
        children: [
            {
                path: "/home",
                name: "HomePage",
                component: HomePage,        
            },
            
            
        ],
    },

    
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes,
});

export default router;