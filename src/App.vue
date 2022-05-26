<template>
  <v-app>
    <router-view /> <vue-progress-bar></vue-progress-bar>
    <confirm-dialog ref="confirm"
  /></v-app>
</template>

<script>
import ConfirmDialog from "@/components/ConfirmDialog.vue";
export default {
  name: "App",
  components: {
    "confirm-dialog": ConfirmDialog,
  },
  mounted() {
    window.onpopstate = (event) => {
      history.go(1);
    };
    document.addEventListener(
      "contextmenu",
      function (e) {
        if (e.currentTarget.activeElement.localName === "a") e.preventDefault();
      },
      false
    );
    this.$root.$confirm = this.$refs.confirm.open;
  },
};
</script>

<style>
@import "./css/main.css";
</style>
