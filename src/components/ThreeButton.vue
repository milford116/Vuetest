<template>
  <v-row>
    <v-col cols="12" md="6" class="text-right"> </v-col>
    <v-col cols="12" md="6" class="text-right">
      <v-btn
        class="mr-0 btn-bg-green"
        style="margin-right: 2% !important; margin-top: -6% !important"
        @click="onSubmit"
        >Ok</v-btn
      >
      <v-btn
        class="mr-0 btn-bg-blue"
        style="margin-right: 2% !important; margin-top: -6% !important"
        @click="onRefresh"
        >Refresh</v-btn
      >
      <v-btn
        class="mr-0 btn-bg-red"
        style="margin-right: 3% !important; margin-top: -6% !important"
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
    async onSubmit() {
      const confirm = await this.$root.$confirm();
      if (confirm === true) {
        this.$emit("onSubmitFromChildren");
      }
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
