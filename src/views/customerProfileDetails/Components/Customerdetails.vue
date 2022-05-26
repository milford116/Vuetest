<template>
 <div>
     <Customerprofile />
    <v-app-bar
       absolute
      color="#6A76AB"
      dark
    >
    
    <v-row
    align="left"
    justify="space-around"
  >
    <v-btn text @click="value=1">
      Introducer info
    </v-btn>
     <v-btn text @click=" value=2">
      address list
    </v-btn>
    </v-row>
    </v-app-bar>

   
 <Introducer v-if="value==1" />
 <Address v-else-if="value==2" />
 
    
</div>
</template>

<script>
import { HomeApplication } from "@/../public/configURL";
import datepicker from 'vue-date-picker'
import Introducer from "./Introducer.vue";
import Address from "./Address.vue";
import Customerprofile from "../../customerprofile/Customer.vue";

export default {
    name: "Customerdetails",
    data() {
        return {
            value:0,
           
            collapseOnScroll: true,
            title: "This is customer nft page",
            customername: "",
            fathername: "",
            mothername: "",
            spousename: "",
            nid: "",
            HomeApplication,
            //for gender
            select: { state: 'Gender', abbr: '' },
            items: [
                { state: 'Male', abbr: 'M' },
                { state: 'Female', abbr: 'F' },


            ],
            //for date of birth
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            // for ,arital stat
            select2: { state: '' },
            items2: [
                { state: 'Married' },
                { state: 'Unmarried' },


            ],

        }

    },
    components: {
    datepicker,
    Customerprofile,
    Introducer,
    Address
},
    computed: {},
    methods: {
      show(){
          console.log('hu');
         value=true;
      }
    },
    created() { },
    mounted() { },
};
</script>

<style scoped>
body {
    margin-left: 300px !important;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
}
</style>



