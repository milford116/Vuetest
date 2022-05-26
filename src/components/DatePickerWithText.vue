<template>
  <div>
    <ValidationProvider :name="fieldLabel" :rules="{ required: requiredDate, max: 10,  regex: /^\d+(\/\d+)*$/, date_format: true }" >
      <v-text-field
        slot-scope="{ errors, valid }"
        v-model="dateInput"
        :label="fieldLabel"
        hint="DD/MM/YYYY"
        persistent-hint
        :disabled = "disabledDate"
        :error-messages="errors"
        :success="valid"
      >
        <template v-slot:append-outer>
          <date-picker v-model="dateInput" />
        </template>
        <template #label v-if="requiredDate">
            <span class="red--text"><strong>* </strong></span>{{ fieldLabel }}
        </template>
      </v-text-field>
    </ValidationProvider>
  </div>
</template>
<script>
import DatePicker from "@/components/DatePicker";

export default {
  name: "DatePickerWithText",
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10),
    },
    dateLabel: {
      type: String,
      default: "Date",
    },
    requiredRules:{
      type: Boolean,
      default: false
    },
     readOnlyDate:{
      type: Boolean,
      default: false
    }
  },
  components: {
    DatePicker,
  },
  data() {
    return {
    };
  },
  computed: {
    dateInput: {
      get() {
        let formatttedVal = this.$convertToDDMMYYYYFormat(this.value);
        if(formatttedVal == "Invalid date")
          return this.value;
        else
          return formatttedVal;
      },
      set(val) {

        const valid = /^\d+(\/\d+)*$/.test(val);
        if(!valid || val.length > 10)
          this.$emit("input", val);
        else
        {
          let formatttedVal = this.$convertToMMDDYYYYFormat(val);
          this.$emit("input", formatttedVal);
        }
          
      },
    },
    fieldLabel() {
      return this.dateLabel;
    },
    requiredDate() {
      return this.requiredRules;
    },
    disabledDate() {
      return this.readOnlyDate;
    },
  },
  mounted() {
  },
};
</script>