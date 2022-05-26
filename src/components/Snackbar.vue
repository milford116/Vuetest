<template>
  <v-snackbar
    v-model="snackbar"
    :vertical="vertical"
    timeout="10000"
    :color="snackbarColor"
    :class="menuOpen ? 'snackbar-padding' : ''"
    bottom
    right
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  name: "BaseMaterialSnackbar",
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      multiLine: true,
      snackbar: false,
      snackbarColor: "red darken-2",
      text: ``,
      vertical: true,
    };
  },
  watch: {},
  methods: {
    //show error message
    seterrortext(text = 'There was an unexpected error. Please contact with system Administrator.') {
      this.text = text;
      this.snackbar = true;
      this.snackbarColor = "red darken-2";
    },
    //show Success message
    setsuccesstext(text = 'The operation was completed successfully.') {
      this.text = text;
      this.snackbar = true;
      this.snackbarColor = "green darken-2";
    },
  },
};
</script>
<style>
.snackbar-padding{
  padding-right: 33%;
}
</style>
