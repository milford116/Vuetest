<template>
  <div>
    <header
      class="navbar pcoded-header navbar-expand-lg navbar-light responsive-left"
    >
      <div class="m-header">
        <a class="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
        <a href="#" class="b-brand">
          <div class="b-bg">
            <i class="feather icon-trending-up"></i>
          </div>
          <span class="b-title">Customer profile nft</span>
        </a>
      </div>
      <a class="mobile-menu" id="mobile-header" href="">
        <i class="feather icon-more-horizontal"></i>
      </a>
      <div class="fix-menu">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li>
              <a>
                <img src="../assets/images/leads.png" />
              </a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li>
              <a href="#!" class="full-screen" @click="toggleFullScreen()"
                ><i class="feather icon-maximize"></i
              ></a>
            </li>
            <li class="nav-item dropdown">
              <!-- <v-autocomplete
                v-model="selectedApp"
                :items="AppList"
                background-color="grey lighten-2"
                clearable
                hide-details
                hide-selected
                item-text="ApplicationName"
                item-value="ApplicationId"
                label="Applications"
                :menu-props="{ closeOnContentClick: true }"
                solo
                :allow-overflow="false"
                no-data-text="No data found"
                return-object
                @change="(event) => redirectToAnotherApp(selectedApp)"
              >
              </v-autocomplete> -->
            </li>
            <li class="nav-item">
              <div class="main-search">
                <!-- <v-autocomplete
                  v-model="selectedItem"
                  :items="items"
                  :search-input="search"
                  background-color="grey lighten-2"
                  clearable
                  hide-details
                  hide-selected
                  item-text="ConcatName"
                  item-value="TargetPath"
                  label="Search..."
                  :menu-props="{ closeOnContentClick: true }"
                  solo
                  :allow-overflow="false"
                  no-data-text="No data found"
                >
                  <template v-slot:item="{ item }">
                    <v-list-item link :to="{ path: item.TargetPath }">{{
                      item.ConcatName
                    }}</v-list-item>
                  </template>
                </v-autocomplete> -->
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li>
              <a>
                <i class="icon feather icon-home"> </i>
              </a>
            </li>
            <li>
              <div class="dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown"
                  ><i class="icon feather icon-bell"></i
                ></a>
                <div class="dropdown-menu dropdown-menu-right notification">
                  <div class="noti-head">
                    <h6 class="d-inline-block m-b-0">Notifications</h6>
                    <div class="float-right">
                      <a href="#!" class="m-r-10">mark as read</a>
                      <a href="#!">clear all</a>
                    </div>
                  </div>
                  <ul class="noti-body">
                    <li class="n-title">
                      <p class="m-b-0">NEW</p>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="../assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Salma Sultana</strong
                            ><span class="n-time text-muted"
                              ><i class="icon feather icon-clock m-r-10"></i>30
                              min</span
                            >
                          </p>
                          <p>New ticket Added</p>
                        </div>
                      </div>
                    </li>
                    <li class="n-title">
                      <p class="m-b-0">EARLIER</p>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="../assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Joseph William</strong
                            ><span class="n-time text-muted"
                              ><i class="icon feather icon-clock m-r-10"></i>30
                              min</span
                            >
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="../assets/images/user/avatar-3.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Sara Soudein</strong
                            ><span class="n-time text-muted"
                              ><i class="icon feather icon-clock m-r-10"></i>30
                              min</span
                            >
                          </p>
                          <p>currently login</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="noti-footer">
                    <a href="#!">show all</a>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="dropdown drp-user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="icon feather icon-settings"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right profile-notification"
                >
                  <div class="pro-head">
                    <img
                      src="../assets/images/user/avatar-2.jpg"
                      class="img-radius"
                      alt="User-Profile-Image"
                    />
                    <span>Shafiqur Rahman</span>
                    <!-- <a href="auth-signin.html" class="dud-logout" title="Logout">
                    <i class="feather icon-log-out"></i>
                  </a> -->
                  </div>
                  <ul class="pro-body">
                    <li>
                      <a href="#!" class="dropdown-item"
                        ><i class="feather icon-settings"></i> Settings</a
                      >
                    </li>
                    <li>
                      <a href="#!" class="dropdown-item"
                        ><i class="feather icon-user"></i> Profile</a
                      >
                    </li>
                    <li>
                      <a href="message.html" class="dropdown-item"
                        ><i class="feather icon-mail"></i> My Messages</a
                      >
                    </li>
                    <li>
                      <a href="auth-signin.html" class="dropdown-item"
                        ><i class="feather icon-lock"></i> Lock Screen</a
                      >
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'Logout' }"
                        class="dropdown-item"
                      >
                        <i class="feather icon-log-out"></i> Log Out
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- [ chat user list ] start -->
    <section class="header-user-list">
      <div class="h-list-header">
        <div class="input-group">
          <input
            type="text"
            id="search-friends"
            class="form-control"
            placeholder="Search Friend . . ."
          />
        </div>
      </div>
      <div class="h-list-body">
        <a href="#!" class="h-close-text"
          ><i class="feather icon-chevrons-right"></i
        ></a>
        <div class="main-friend-cont scroll-div">
          <div class="main-friend-list">
            <div
              class="media userlist-box"
              data-id="1"
              data-status="online"
              data-username="Josephin Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image "
                />
                <div class="live-status">3</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Josephin Doe<small class="d-block text-c-green"
                    >Typing . .
                  </small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="2"
              data-status="online"
              data-username="Lary Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Lary Doe<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="3"
              data-status="online"
              data-username="Alice"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-3.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alice<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="4"
              data-status="offline"
              data-username="Alia"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alia<small class="d-block text-muted">10 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="5"
              data-status="offline"
              data-username="Suzen"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-4.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Suzen<small class="d-block text-muted">15 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="1"
              data-status="online"
              data-username="Josephin Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image "
                />
                <div class="live-status">3</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Josephin Doe<small class="d-block text-c-green"
                    >Typing . .
                  </small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="2"
              data-status="online"
              data-username="Lary Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Lary Doe<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="3"
              data-status="online"
              data-username="Alice"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-3.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alice<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="4"
              data-status="offline"
              data-username="Alia"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alia<small class="d-block text-muted">10 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="5"
              data-status="offline"
              data-username="Suzen"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-4.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Suzen<small class="d-block text-muted">15 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="1"
              data-status="online"
              data-username="Josephin Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image "
                />
                <div class="live-status">3</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Josephin Doe<small class="d-block text-c-green"
                    >Typing . .
                  </small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="2"
              data-status="online"
              data-username="Lary Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Lary Doe<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="3"
              data-status="online"
              data-username="Alice"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-3.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alice<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="4"
              data-status="offline"
              data-username="Alia"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alia<small class="d-block text-muted">10 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="5"
              data-status="offline"
              data-username="Suzen"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-4.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Suzen<small class="d-block text-muted">15 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="1"
              data-status="online"
              data-username="Josephin Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image "
                />
                <div class="live-status">3</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Josephin Doe<small class="d-block text-c-green"
                    >Typing . .
                  </small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="2"
              data-status="online"
              data-username="Lary Doe"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Lary Doe<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="3"
              data-status="online"
              data-username="Alice"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-3.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alice<small class="d-block text-c-green">online</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="4"
              data-status="offline"
              data-username="Alia"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-1.jpg"
                  alt="Generic placeholder image"
                />
                <div class="live-status">1</div>
              </a>
              <div class="media-body">
                <h6 class="chat-header">
                  Alia<small class="d-block text-muted">10 min ago</small>
                </h6>
              </div>
            </div>
            <div
              class="media userlist-box"
              data-id="5"
              data-status="offline"
              data-username="Suzen"
            >
              <a class="media-left" href="#!"
                ><img
                  class="media-object img-radius"
                  src="../assets/images/user/avatar-4.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body">
                <h6 class="chat-header">
                  Suzen<small class="d-block text-muted">15 min ago</small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- [ chat user list ] end -->

    <!-- [ chat message ] start -->
    <section class="header-chat">
      <div class="h-list-header">
        <h6>Josephin Doe</h6>
        <a href="#!" class="h-back-user-list"
          ><i class="feather icon-chevron-left"></i
        ></a>
      </div>
      <div class="h-list-body">
        <div class="main-chat-cont scroll-div">
          <div class="main-friend-chat">
            <div class="media chat-messages">
              <a class="media-left photo-table" href="#!"
                ><img
                  class="media-object img-radius img-radius m-t-5"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body chat-menu-content">
                <div class="">
                  <p class="chat-cont">
                    hello Datta! Will you tell me something
                  </p>
                  <p class="chat-cont">about yourself?</p>
                </div>
                <p class="chat-time">8:20 a.m.</p>
              </div>
            </div>
            <div class="media chat-messages">
              <div class="media-body chat-menu-reply">
                <div class="">
                  <p class="chat-cont">Ohh! very nice</p>
                </div>
                <p class="chat-time">8:22 a.m.</p>
              </div>
            </div>
            <div class="media chat-messages">
              <a class="media-left photo-table" href="#!"
                ><img
                  class="media-object img-radius img-radius m-t-5"
                  src="../assets/images/user/avatar-2.jpg"
                  alt="Generic placeholder image"
              /></a>
              <div class="media-body chat-menu-content">
                <div class="">
                  <p class="chat-cont">can you help me?</p>
                </div>
                <p class="chat-time">8:20 a.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-list-footer">
        <div class="input-group">
          <input type="file" class="chat-attach" style="display: none" />
          <a href="#!" class="input-group-prepend btn btn-info btn-attach">
            <i class="feather icon-paperclip"></i>
          </a>
          <input
            type="text"
            name="h-chat-text"
            class="form-control h-send-chat"
            placeholder="Write hear . . "
          />
          <button
            type="submit"
            class="input-group-append btn-send btn btn-primary"
          >
            <i class="feather icon-message-circle"></i>
          </button>
        </div>
      </div>
    </section>
    <!-- [ chat message ] end -->
  </div>
</template>

<script>
import { generateFunctionList } from "./js/Navigation";
import { HomeApplication } from "@/../public/configURL";
export default {
  name: "Header",
  computed: {
    AppList() {
      return this.generateAppicationList(this.$store.getters.getUserAppList);
    },
  },
  data: () => {
    return {
      selectedItem: null,
      search: null,
      items: [],
      currentUserAccessData: null,
      selectedApp: null,
      HomeApplication,
    };
  },
  methods: {
    cmp(a, b) {
      // ascending order sorting comparator
      if (a.FastPath < b.FastPath) return -1;
      else return 1;
    },
    toggleFullScreen() {
      if (
        !document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
  created() {
    this.currentUserAccessData = null;
    try {
      this.currentUserAccessData = this.$store.getters.getUserAccessData;
    } catch (err) {
      // ignore
    }
    if (this.currentUserAccessData !== null) {
      let functionList = generateFunctionList(this.currentUserAccessData);
      this.items = functionList.sort(this.cmp);
    }
  },
  watch: {
    "$store.getters.getUserAccessData": {
      deep: true,
      handler(newValue) {
        this.currentUserAccessData = newValue;
        if (this.currentUserAccessData !== null) {
          let functionList = generateFunctionList(this.currentUserAccessData);
          this.items = functionList.sort(this.cmp);
        }
      },
    },
  },
};
</script>
<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled)
  a {
  color: rgba(0, 0, 0, 0.87);
}
</style>

