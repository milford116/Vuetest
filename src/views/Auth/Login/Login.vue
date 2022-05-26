<template>
  <div id="app">
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
      <div>
        <v-tabs
          v-model="tab"
          show-arrows
          background-color="deep-purple accent-4"
          icons-and-text
          dark
          grow
        >
          <v-tabs-slider color="purple darken-4"></v-tabs-slider>
          <v-tab v-for="(i, index) in tabs" :key="index">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginUserID"
                        :rules="loginUserIDRules"
                        label="User ID"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="loginPassword"
                        :append-icon="show1 ? 'eye' : 'eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 1 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn
                        x-large
                        block
                        :disabled="!valid"
                        color="success"
                        @click="login"
                      >
                        Login
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
        <v-snackbar
          v-model="snackbar"
          :vertical="vertical"
          timeout="10000"
          :color="snackbarColor"
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
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },
  methods: {
    login() {     
      let usernm = "";
      let userpw = "";
      let login = false;
      for (let user of this.loginInfo) {
        if (user.userName === this.loginUserID) {
          usernm = user.userName;
          if (user.userPassword === this.loginPassword) {
            userpw = user.userPassword;
            login = true;
            break;
          }
        }
      }

      if (login) this.$router.push({ path: "/home" });
      else {
        this.seterrortext("User Name or Password invalid");
        this.loginUserID = "";
        this.loginPassword = "";
      }
      // this.$Progress.start();
      // if (this.$refs.loginForm.validate()) {
      //   this.$store
      //     .dispatch("LogIn", {
      //       userid: this.loginUserID,
      //       password: this.loginPassword,
      //     })
      //     .then((response) => {
      //       if (
      //         !response.data.ResponseStatus ||
      //         response.data.ResponseMessage
      //       ) {
      //         this.seterrortext(response.data.ResponseMessage);
      //         this.$Progress.fail();
      //         this.$router.push({ path: "/" });
      //       } else {
      //         this.$store
      //           .dispatch("CreateMenuByID", this.loginUserID)
      //           .then((response) => {
      //             if (!response.data.ResponseStatus) {
      //               this.seterrortext(response.data.ResponseMessage);
      //               this.$Progress.fail();
      //               this.$router.push({ path: "/" });
      //             } else {
      //               this.$Progress.finish();
      //               this.$router.push({ name: "Home Page" });
      //             }
      //           })
      //           .catch((e) => {
      //             if ("data" in e) {
      //               if ("responseMessage" in e.data) {
      //                 this.seterrortext(e.data.responseMessage);
      //               } else {
      //                 this.seterrortext(e.data.ResponseMessage);
      //               }
      //             } else {
      //               if ("response" in e) {
      //                 if ("responseMessage" in e.response.data) {
      //                   this.seterrortext(e.response.data.responseMessage);
      //                 } else {
      //                   this.seterrortext(e.response.data.ResponseMessage);
      //                 }
      //               } else {
      //                 this.seterrortext(e);
      //               }
      //             }
      //             this.$Progress.fail();
      //           });
      //       }
      //     })
      //     .catch((e) => {
      //       if ("data" in e) {
      //         if ("responseMessage" in e.data) {
      //           this.seterrortext(e.data.responseMessage);
      //         } else {
      //           this.seterrortext(e.data.ResponseMessage);
      //         }
      //       } else {
      //         if ("response" in e) {
      //           if ("responseMessage" in e.response.data) {
      //             this.seterrortext(e.response.data.responseMessage);
      //           } else {
      //             this.seterrortext(e.response.data.ResponseMessage);
      //           }
      //         } else {
      //           this.seterrortext(e);
      //         }
      //       }
      //       this.$Progress.fail();
      //     });
      // }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    seterrortext(
      text = "There was an unexpected error. Please contact with system Administrator."
    ) {
      this.text = text;
      this.snackbar = true;
      this.snackbarColor = "red darken-2";
    },
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [{ name: "Login", icon: "mdi-account" }],
    valid: true,
    loginPassword: "",
    loginUserID: "",

    loginInfo: [
      { userName: "shafique", userPassword: "1" },
      { userName: "nur", userPassword: "1" },
      { userName: "noor", userPassword: "1" },
	  { userName: "tanvir", userPassword: "1" },
      { userName: "sania", userPassword: "1" },
      { userName: "razib", userPassword: "1" },
      { userName: "alamgir", userPassword: "1" },
      { userName: "shafique2", userPassword: "1" },
      { userName: "shafique3", userPassword: "1" },
    ],
    loginUserIDRules: [
      (v) => !!v || "Required",
      // (v) => /.+@.+\..+/.test(v) || "User ID must be valid",
      (v) => v.length >= 4 || "User ID must be at least 4 characters long",
      (v) =>
        /[a-z0-9]+/.test(v) ||
        "User ID must contain only alpha-numeric characters",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 1) || "Min 1 characters",
    },
    multiLine: true,
    snackbar: false,
    snackbarColor: "red darken-2",
    text: ``,
    vertical: true,
  }),
};
</script>
