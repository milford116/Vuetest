<template>
<div>


<h4>Introducer type</h4>
<br/>
<br/>
<v-form ref="loginForm" v-model="valid" lazy-validation>
<v-row>
            <v-col cols="4">
                <v-text-field v-model="Acc_holder" label="Account Holder" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="Acc_branch" label="Introducer Acc Branch" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="Acc_num" label="Introducer Acc Number" required></v-text-field>
            </v-col>
           
        </v-row>
        <v-row>
           <v-col cols="4">
                <v-text-field v-model="details" label="Introducer details" required></v-text-field>
            </v-col>
        </v-row>
</v-form>
</div>
</template>


<script>
export default {
  name: 'Introducer',
    data() {
        return {
          Acc_holder:"",
          Acc_branch:"",
          Acc_num:"",
          details:""
        }
    }

}
</script>