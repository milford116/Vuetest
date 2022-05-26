var date = document.getElementById('date');

var checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) &&
            num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
};

var addAutoSlashToDate = (e) => {
    this.type = 'text';
    var input = this.value;
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function(v) {
        return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], 31);
    var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + ' / ' : v;
    });
    this.value = output.join('').substr(0, 14);
};


// date.addEventListener('input', function (e) {
//     this.type = 'text';
//     var input = this.value;
//     if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
//     var values = input.split('/').map(function (v) {
//         return v.replace(/\D/g, '')
//     });
//     if (values[0]) values[0] = checkValue(values[0], 12);
//     if (values[1]) values[1] = checkValue(values[1], 31);
//     var output = values.map(function (v, i) {
//         return v.length == 2 && i < 2 ? v + ' / ' : v;
//     });
//     this.value = output.join('').substr(0, 14);
// });

var Get_Padded_Account_No = (pACCOUNT_NUMBER) => {
    var PAccNo = "";
    if (pACCOUNT_NUMBER.length < 11 && pACCOUNT_NUMBER.length > 3) {
        PAccNo =
            pACCOUNT_NUMBER.substring(0, 3) +
            pACCOUNT_NUMBER.substring(3, pACCOUNT_NUMBER.length).padStart(8, "0");
    } else {
        PAccNo = pACCOUNT_NUMBER;
    }
    // this.form.glKey = PAccNo;
    return PAccNo;
}
var Get_Padded_Customer_Id = (customerId) => {
    if (customerId === null || customerId === undefined || customerId === '')
        return customerId;
    var cusId = "";
    if (customerId.length < 10 && customerId.length > 0) {
        cusId =
            customerId.padStart(10, "0");
    } else {
        cusId = customerId;
    }
    return cusId;
}
var onlyNumber = (input) => {
    if (input === null || input === undefined || input === '')
        return input;
    input = input.replace(/[^\d]/g, '');
    return input;
}
var getTodayMMDDYYYY = (curr_date) => {
    var date = curr_date.toISOString().slice(0, 10).split("-").reverse();
    [date[0], date[1]] = [date[1], date[0]];
    var datestr = date.join("/");
    return datestr;
}
var formatDate = (date) => {
    if (!date) return null;
    if (date.includes('T')) {
        let onlyDate = date.split("T");
        const [year, month, day] = onlyDate[0].split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes(" ")) {
        let onlyDate = date.split(" ");
        const [month, day, year] = onlyDate[0].split("/");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    }
}

var convertToCalendarFormat = (date) => {
    if (!date) return null;
    if (date.includes('T')) {
        let onlyDate = date.split("T");
        return onlyDate[0];
    } else if (date.includes('-')) {
        return date;
    } else if (date.includes(" ")) {
        let onlyDate = date.split(" ");
        const [month, day, year] = onlyDate[0].split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    } else if (date.includes("/")) {
        const [day, month, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    } else
        return date;

    // if (!date) return null;
    // let onlyDate = date.split(" ");
    // const [day, month, year] = onlyDate[0].split("/");
    // return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

var convertToMMDDYYYYFormat = (date) => {
    if (!date) return null;
    if (date.includes('T')) {
        let onlyDate = date.split("T");
        const [year, month, day] = onlyDate[0].split("-");
        return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
    } else if (date.includes('-')) {
        const [year, month, day] = date.split("-");
        return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
    } else if (date.includes(" ")) {
        let onlyDate = date.split(" ");
        const [month, day, year] = onlyDate[0].split("/");
        return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
    } else if (date.includes("/")) {
        const [day, month, year] = date.split("/");
        return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
    } else
        return date;
}

var convertToDDMMYYYYFormat = (date) => {
    if (!date) return null;
    if (date.includes('T')) {
        let onlyDate = date.split("T");
        const [year, month, day] = onlyDate[0].split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes('-')) {
        const [year, month, day] = date.split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes(" ")) {
        let onlyDate = date.split(" ");
        const [month, day, year] = onlyDate[0].split("/");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes("/")) {
        const [month, day, year] = date.split("/");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else
        return date;
}
var parseDate = (date) => {
    if (!date) return null;
    if (date.includes('T')) {
        let onlyDate = date.split("T");
        const [year, month, day] = onlyDate[0].split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes('-')) {
        const [year, month, day] = date.split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes(" ")) {
        let onlyDate = date.split(" ");
        const [month, day, year] = onlyDate[0].split("/");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else if (date.includes("/")) {
        const [month, day, year] = onlyDate[0].split("/");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    } else
        return date;
}
var addAutoSlashToDate = (inputDate) => {
    var input = inputDate;
    if (/\D\/$/.test(input)) {
        input = input.substr(0, input.length - 3);
    }

    var values = input.split("/").map(function(v) {
        return v.replace(/\D/g, "");
    });
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + "/" : v;
    });
    var value = output.join("").substr(0, 14);
    return value;
}
export {
    checkValue,
    Get_Padded_Account_No,
    Get_Padded_Customer_Id,
    onlyNumber,
    parseDate,
    convertToCalendarFormat,
    formatDate,
    getTodayMMDDYYYY,
    addAutoSlashToDate,
    convertToDDMMYYYYFormat,
    convertToMMDDYYYYFormat
};