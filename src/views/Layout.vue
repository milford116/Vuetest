<template>
  <div>
    <!-- [ Pre-loader ] start -->

    <!-- [ Pre-loader ] End -->
    <!-- [ navigation menu ] start -->

    <!-- [ navigation menu ] end -->
    <!-- [ Header ] start -->
    <header-component></header-component>
    <!-- [ Header ] end -->

    <!-- [ Main Content ] start -->
    <div
      id="main-container"
      class="pcoded-main-container"
      :class="isMenuOpenOrClose ? 'main-container-shrink' : ''"
    >
      <div class="pcoded-wrapper">
        <div class="pcoded-content">
          <div class="pcoded-inner-content">
            <!-- [ breadcrumb ] start -->
            <div class="page-header">
              <div class="page-block">
                <div class="row align-items-center">
                  <!-- <breadcrumb-component></breadcrumb-component> -->
                  <!-- <div class="col-md-12">
                                    <div class="page-header-title">
                                        <h5 class="m-b-5">Dashboard</h5>
                                    </div>
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/home"><i class="feather icon-home"></i></router-link></li>
                                        <li class="breadcrumb-item"><a href="#!">Project Dashboard</a></li>
                                    </ul>
                                </div> -->
                </div>
              </div>
            </div>
            <!-- [ breadcrumb ] end -->
            <div class="main-body">
              <div class="page-wrapper">
                <!-- [ Main Content ] start -->
                <router-view />
                <!-- [ Main Content ] end -->
              </div>
            </div>
          </div>
        </div>
        <snackbar :menuOpen="isMenuOpenOrClose" ref="snackbar" />
      </div>
      <footer-component></footer-component>
    </div>
    <!-- [ Main Content ] end -->
    <menucustomizer-component
      @isMenuOpen="toggleMainContainer"
    ></menucustomizer-component>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
import MenuCustomizer from "@/components/MenuCustomizer.vue";
import Footer from "@/components/Footer.vue";
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "Layout",
  components: {
    "nav-component": Navigation,
    "header-component": Header,
    "menucustomizer-component": MenuCustomizer,
    "footer-component": Footer,
    snackbar: Snackbar,
  },
  data: () => ({
    isMenuOpenOrClose: false,
  }),
  async created() {
    // if (!this.$store.getters.isLoggedIn) {
    //   const request = this.$route.params.requestData;
    //   const requestDecript = atob(request);
    //   const requestBody = JSON.parse(requestDecript);
    //   if (requestBody.data.JwtToken) {
    //     this.$store
    //       .dispatch("setStateFromLogInData", requestBody)
    //       .then((response) => {})
    //       .catch((e) => {
    //         this.$router.push({ path: "/login" });
    //       });
    //   } else {
    //     this.$router.push({ path: "/login" });
    //   }
    //   this.$Progress.start();
    //   const response = await this.$store.dispatch(
    //     "CreateMenuByID",
    //     requestBody.data.UserId
    //   );
    //   if (response && response.data.ResponseStatus) {
    //     this.$router.push({ path: "/home" });
    //   } else {
    //     this.$router.push({ path: "/login" });
    //   }
    // }
  },
  methods: {
    toggleMainContainer() {
      const elm = document.getElementById("main-container");
      if (elm.classList.contains("main-container-shrink")) {
        this.isMenuOpenOrClose = false;
      } else {
        this.isMenuOpenOrClose = true;
      }
    },
  },
  mounted() {
    this.$root.$snackbar = this.$refs.snackbar;
  },
};
</script>
