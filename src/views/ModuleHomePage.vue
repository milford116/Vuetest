<template>
  <v-container class="fill-height" fluid style="min-height: 434px">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="3"></v-col>
        <v-col cols="9" md="7">
          <v-hover v-slot="{ hover }">
            <a v-on:click="redirectToHomeApp(HomeApplication)">
              <v-img src="@/assets/images/module/leads.png" height="100">
              </v-img>
            </a>
          </v-hover>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import { HomeApplication } from "@/../public/configURL";
export default {
  name: "HomePage",
  data() {
    return {
      title: "This is home page",
      result: "",
      HomeApplication,
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
body {
  margin-left: 300px !important;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>



