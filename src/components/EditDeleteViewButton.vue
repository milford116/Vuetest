<template>
  <v-row>
    <v-col cols="12" md="12" class="text-right">
      <!-- Ok -->
      <v-btn
        class="mr-0 btn-bg-green"
        style="margin-right: 2% !important"
        @click="onSubmit"
        >{{ button1 }}</v-btn
      >
      <!-- Delete -->
      <v-btn
        class="mr-0 btn-bg-dark-red"
        style="margin-right: 2% !important"
        @click="onDelete"
        >{{ button2 }}</v-btn
      >
      <!-- View -->
      <v-btn
        class="mr-0 btn-bg-purple"
        style="margin-right: 2% !important"
        @click="onView"
        >{{ button3 }}</v-btn
      >
      <!-- Refresh -->
      <v-btn
        class="mr-0 btn-bg-blue"
        style="margin-right: 2% !important"
        @click="onRefresh"
        >{{ button4 }}</v-btn
      >
      <!-- Exit -->
      <v-btn
        class="mr-0 btn-bg-red"
        style="margin-right: 3% !important"
        @click="onExit"
        >{{ button5 }}</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "EditDeleteViewButton",
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
    button5: {
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
    async onDelete() {
      const confirm = await this.$root.$confirm();
      if (confirm === true) {
        this.$emit("onDeleteFromChildren");
      }
    },
    onView() {
      this.$emit("onViewFromChildren");
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
