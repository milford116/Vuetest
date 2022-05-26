// export function JsonDateToddmmyyy(input) {
//                 if (input==undefined || input == null || input == '') {
//                     return;
//                 }               
//                 var date = new Date(input);
//                 var dt = date.toLocaleDateString('en-GB').replace(/[^ -~]/g, '');
    
//                 return dt;
// }

export default {    
     JsonDateToddmmyyy(input) {        
        if (input==undefined || input == null || input == '') {
            return;
        }
        var date = new Date(input);
        var dt = date.toLocaleDateString('en-GB').replace(/[^ -~]/g, '');

        return dt;
    },
    JsonDateToddmmyyyWithTime(input) {
        if (input==undefined || input == null || input == '') {
            return;
        }
    
        var date = new Date(input);
        var dt = date.toLocaleString('en-GB').replace(/[^ -~]/g, '').replace(/,/g, '');
    
        return dt;
    },

}