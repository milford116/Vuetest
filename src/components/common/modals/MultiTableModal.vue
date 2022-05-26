 <template>
  <v-dialog
    max-width="50%"
    v-model="value"
    halfscreen
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-card-text>
        <v-container v-for="dialog in ItemData" :key="dialog.dialogTitle">
          <v-row class="popup-header">
            <v-col cols="12" sm="12" md="12">
              <span>{{ dialog.dialogTitle }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-data-table
                :mobile-breakpoint="0"
                :headers="dialog.dialogHeaders"
                :items="dialog.dialogData"
                class="elevation-1"
              >
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="btn-bg-red" @click="close()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

export default {
  name: "MultiTableModal",
  props: {
    value: {
      required: true,
    },
    dialogMultiData: {
      required: true,
    },
    mainTitle: {
      required: true,
    },
  },
  computed: {
    title: function(){
            return this.mainTitle;
        },
    ItemData: function(){
            return this.dialogMultiData;
        },
  },
  created(){    
  },
  data: () => ({
  }),
  mounted() {
  },
  methods: {
     close() {
      this.$emit("closeMultiTabledialogue", this.emitData);
    },
  },
};
</script>