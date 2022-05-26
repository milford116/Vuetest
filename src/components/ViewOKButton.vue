<template>
  <v-row>
    <!-- <v-col cols="12" md="6" class="text-right"> </v-col> -->
    <v-col cols="12" md="12" class="text-right">
      <v-btn
        class="mr-0 btn-bg-green"
        style="margin-right: 2% !important"
        @click="onSubmit"
        >{{ button1 }}</v-btn
      >
      <v-btn
        class="mr-0 btn-bg-purple"
        style="margin-right: 2% !important"
        @click="onView"
        >{{ button2 }}</v-btn
      >
      <!-- Ok -->
      <v-btn
        class="mr-0 btn-bg-blue"
        style="margin-right: 2% !important"
        @click="onRefresh"
        >{{ button3 }}</v-btn
      >
      <!-- Refresh -->
      <v-btn
        class="mr-0 btn-bg-red"
        style="margin-right: 3% !important"
        @click="onExit"
        >{{ button4 }}</v-btn
      >
      <!-- Exit -->
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ViewOKButton",
  props: {
    button1: {
      type: String,
    },
    button2: {
      type: String,
    },
    button3: {
      type: String,
    },
    button4: {
      type: String,
    },
  },
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
    onView() {
      this.$emit("onViewFromChildren");
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
