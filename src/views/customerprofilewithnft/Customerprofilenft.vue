<template>
    
    <v-form ref="loginForm" v-model="valid" lazy-validation>
   
    <v-app-bar
      
      absolute
      color="deep-blue accent-4"
      dark
     
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Customer Details with NFT</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
        <v-row>
            <v-col cols="5">
                <v-text-field v-model="customername" label="Customer Name" required></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field v-model="fathername" label="Father Name" required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3">
                <v-text-field v-model="mothername" label="Mother Name"></v-text-field>
            </v-col>
            <v-col cols="3">
                <v-select v-model="select" :items="items" item-text="state" item-value="abbr" label="Gender"
                    persistent-hint return-object single-line></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Date of Birth" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                            Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-spacer></v-spacer>
            <!-- martial status -->
            <v-col cols="2">
                <v-select v-model="select2" :items="items2" item-text="state" item-value="abbr" label="Marital Status"
                    persistent-hint return-object single-line></v-select>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="5">
                <v-text-field v-model="spousename" label="Spouse Name"></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field v-model="nid" label="NID" required></v-text-field>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { HomeApplication } from "@/../public/configURL";
import datepicker from 'vue-date-picker'

export default {
    name: "Customerprofilenft",
    data() {
        return {
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
        datepicker
    },
    computed: {},
    methods: {},
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



