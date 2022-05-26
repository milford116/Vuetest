<template>
  <v-menu v-model="menu" offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-btn icon color="grey" dark elevation="0" v-on="on">
        <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </template>
    <v-date-picker no-title v-model="picker" @click="menu = false"/>
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10)
    }
  },
  data() {
    return {
       menu: false,
    };
  },
  computed: {
    picker: {
      get() {
        if(this.value)
        {
          let formatttedVal = this.$convertToCalendarFormat(this.value);
          return formatttedVal;
        }
        else
          this.value;
      },
      set(val) {
        let formatttedVal = this.$convertFromCalenderToDDMMYYYY(val);
        this.menu = false;
        this.$emit("input", formatttedVal);
      }
    }
  }
};
</script>