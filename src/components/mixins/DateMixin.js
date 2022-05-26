export default {
    created() {},
    methods: {
        $convertFromMMDDYYYYwithTimeToDDMMYYYY(date) {
            if (date)
                return this.$moment(date, 'MM/DD/YYYY HH:mm:ss').format('DD/MM/YYYY');
            else
                return null;
        },
        $convertToCalendarFormat(date) {
            if (!date) return null;
            if (date.includes('T')) {
                let onlyDate = date.split("T");
                return onlyDate[0];
            } else if (date.includes('-')) {
                return date;
            } else if (date.includes(" ") && date.includes("/")) {
                return this.$moment(date, 'MM/DD/YYYY HH:mm:ss').format('YYYY-MM-DD');
            } else if (date.includes("/")) {
                return this.$moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            } else
                return date;
        },
        $convertFromCalenderToDDMMYYYY(date) {
            return this.$moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },
        $convertToDDMMYYYYFormat(date) {
            if (!date) return null;
            else if (date.length < 10)
                return date;
            else if (date.includes('T') && date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY');
            } else if (date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            } else if (date.includes(" ") && date.includes("/")) {
                return this.$moment(date, 'MM/DD/YYYY HH:mm:ss').format('DD/MM/YYYY');
            } else if (date.includes("/")) {
                return this.$moment(date, 'MM/DD/YYYY').format('DD/MM/YYYY');
            } else
                return date;
        },
        $convertToMMDDYYYYFormat(date) {
            if (!date) return null;
            else if (date.length < 10)
                return date;
            else if (date.includes('T') && date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY');
            } else if (date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');
            } else if (date.includes(" ") && date.includes("/")) {
                return this.$moment(date, 'MM/DD/YYYY HH:mm:ss').format('MM/DD/YYYY');
            } else if (date.includes("/")) {
                return this.$moment(date, 'DD/MM/YYYY').format('MM/DD/YYYY');
            } else
                return date;
        },
        $convertAPIDateWithTimeToDDMMYYYYFormat(date) {
            if (!date) return null;
            else if (date.length < 10)
                return date;
            else if (date.includes('T') && date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY');
            } else if (date.includes('-')) {
                return this.$moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
            } else if (date.includes(" ") && date.includes("/")) {
                return this.$moment(date, 'MM/DD/YYYY HH:mm:ss').format('DD/MM/YYYY');
            } else
                return date;
        },
        $isValidDateInDDMMYYYY(date) {
            if (this.$moment(date, 'DD/MM/YYYY', true).isValid() || this.$moment(date, 'DD/M/YYYY', true).isValid() ||
                this.$moment(date, 'D/MM/YYYY', true).isValid() || this.$moment(date, 'D/M/YYYY', true).isValid())
                return true;
            else
                return false;
        },
        checkValue(str, max) {
            if (str.charAt(0) !== '0' || str == '00') {
                var num = parseInt(str);
                if (isNaN(num) || num <= 0 || num > max) num = 1;
                str = num > parseInt(max.toString().charAt(0)) &&
                    num.toString().length == 1 ? '0' + num : num.toString();
            };
            return str;
        },
        $addAutoSlashToDate(inputDate) {
            this.$moment(inputDate).format('DD/MM/YYYY');
        },
        //input must be in same format
        $dateComparison(date1, date2) {
            var firstDate = this.$moment(date1);
            var secondDate = this.$moment(date2);
            if (firstDate < secondDate) {
                return "Greater";
            } else if (firstDate > secondDate) {
                return "Smaller";
            } else {
                return "ok";
            }
        },
    }
};