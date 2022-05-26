var generateDynamicMenu = (loginData) => {
    return "dynamic menu banacchi";
    // console.log();
    // let functionsData = this.$route.params.responseJSON.ResponseBusinessData
    //     .LoginUser.UserFunctionAccess;
    // console.log(functionsData);

    // // let tempDict = {
    // //   FunctionGroupName: "",
    // //   FastPath: "",
    // //   FunctionName: "",
    // // };

    // // console.log(tempDict);

    // let bigDictionary = {};
    // let tempItems = [];

    // let funcData = "";

    // ////////////////////// make searchbar maps and reverse maps /////////

    // // other data = fast path, link
    // let fastpath_vs_function_name_dict = {};
    // let function_name_vs_other_data_dict = {};
    // let tempDict = {};

    // for (funcData of functionsData) {
    //     // console.log(funcData);

    //     tempDict = {
    //         FunctionGroupName: "",
    //         FastPath: "",
    //         FunctionName: "",
    //     };

    //     tempDict.FunctionGroupName = funcData.ServiceName;
    //     // tempDict.FastPath = funcData.FunctionId;
    //     tempDict.FastPath = funcData.FastPathNo;
    //     tempDict.FunctionName = funcData.FunctionName;

    //     this.FunctionNamesArr.push(
    //         tempDict.FastPath + "-" + tempDict.FunctionName
    //     );

    //     if (!(tempDict.FunctionGroupName in bigDictionary)) {
    //         bigDictionary[tempDict.FunctionGroupName] = {
    //             FunctionGroupName: tempDict.FunctionGroupName,
    //             FunctionsArray: [],
    //         };
    //     }
    //     bigDictionary[tempDict.FunctionGroupName]["FunctionsArray"].push(
    //         tempDict
    //     );

    //     // populate fastpath_vs_function_name_dict
    //     fastpath_vs_function_name_dict[funcData.FastPathNo.trim()] =
    //         funcData.FastPathNo + "-" + funcData.FunctionName.trim();

    //     // populate function_name_vs_other_data_dict
    //     tempDict = {
    //         FastPath: "",
    //         TargetPath: "",
    //     };

    //     tempDict.FastPath = funcData.FastPathNo;
    //     tempDict.TargetPath = funcData.TargetPath;

    //     function_name_vs_other_data_dict[
    //         funcData.FastPathNo + "-" + funcData.FunctionName.trim()
    //     ] = tempDict;
    // }

    // // console.log(bigDictionary);
    // this.items = Object.values(bigDictionary);
    // this.final_fastpath_vs_function_name_dict = fastpath_vs_function_name_dict;
    // this.final_function_name_vs_other_data_dict = function_name_vs_other_data_dict;

    // this.items.push(this.$route.params.responseJSON);
}


export {
    generateDynamicMenu
}