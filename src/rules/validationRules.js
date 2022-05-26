import { extend } from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import moment from 'moment';

Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
});

extend("date_format", {
    computesRequired: true,
    validate: (value) => {
        if (!value)
            return true;
        return moment(value, 'DD/MM/YYYY', true).isValid() || moment(value, 'DD/M/YYYY', true).isValid() ||
            moment(value, 'D/MM/YYYY', true).isValid() || moment(value, 'D/M/YYYY', true).isValid();
    },
    message: "{_field_} is not in valid format"
});