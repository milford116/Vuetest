<template>
    <div>

        <h4>Address type</h4>
        <br />
        <br />
        <v-form ref="loginForm" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="4">
                    <v-text-field v-model="address_type" label="Address type" required></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field v-model="address" label="Address" required></v-text-field>
                </v-col>
                <v-col cols="4">
                    <v-text-field v-model="location" label="City/town/area" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col cols="3">
                    <v-text-field v-model="address_type" label="zip/postal code" required></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="address" label="country" required></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="location" label="divison/state" required></v-text-field>
                </v-col>
                 <v-col cols="3">
                    <v-text-field v-model="location" label="District" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                 <v-col cols="3">
                    <v-text-field v-model="address_type" label="thana" required></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="address" label="phone no" required></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-text-field v-model="location" label="mobile no" required></v-text-field>
                </v-col>
                 <v-col cols="3">
                    <v-text-field v-model="location" label="email" required></v-text-field>
                </v-col>
            </v-row>

           
        </v-form>
    </div>
</template>


<script>
export default {
    name: 'Address',
    data() {
        return {
            address: "",
            location: "",
            address_type:""
        }
    }
}
</script>