<template>
  <v-row>
    <v-col cols="12" md="6" class="text-right"> </v-col>
    <v-col cols="12" md="6" class="text-right">
      <v-btn
        color="#18ab86"
        class="mr-0"
        style="margin-right: 2%  !important; margin-top:-4% !important"
        @click="onSubmit"
        >Ok</v-btn
      >
      <v-btn
        color="#0080ff"
        class="mr-0"
        style="margin-right: 2% !important; margin-top:-4% !important"
        @click="onRefresh"
        >Refresh</v-btn
      >
      <v-btn
        color="#eb5050"
        class="mr-0"
        style="margin-right: 3% !important; margin-top:-4% !important"
        @click="onExit"
        >Exit</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ThreeButton",
  methods: {
    onSubmit() {
      this.$emit("onSubmitFromChildren");
    },

    onRefresh() {
      this.$emit("onRefreshFromChildren");
    },

    onExit() {
      this.$emit("onExitFromChildren");
    },
  },
};
</script>

<style scoped>
.v-sheet button.v-btn.v-size--default:not(.v-btn--icon):not(.v-btn--fab) {
    padding: 5px 10px !important;
}
</style>
