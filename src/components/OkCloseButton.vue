<template>
  <v-row>
    <v-col cols="12" md="12" class="text-right">
      <!-- Ok -->
      <v-btn
        class="mr-0 btn-bg-green"
        style="margin-right: 6% !important"
        @click="onOk"
        >{{ button1 }}</v-btn
      >
      <!-- Close -->
      <v-btn
        class="mr-0 btn-bg-red"
        style="margin-right: 2% !important"
        @click="onClose"
        >{{ button2 }}</v-btn
      >
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "OkCloseButton",
  props: {
    button1: {
      type: String,
    },
    button2: {
      type: String,
    }
  },
  methods: {
    onOk() {
      this.$emit("onOkFromChildren");
    },
    onClose() {
      this.$emit("onCloseFromChildren");
    },
  },
};
</script>

<style scoped>
.v-sheet button.v-btn.v-size--default:not(.v-btn--icon):not(.v-btn--fab) {
  padding: 5px 10px !important;
}
</style>
