var generateClusters = (UserFunctionAccess) => {
    let rawFunctionsList = UserFunctionAccess;
    rawFunctionsList = rawFunctionsList.filter(function(item) {
        return item.FastPathNo.includes("2004") || item.FastPathNo.includes("2005") ||
            item.FastPathNo.includes("2006") || item.FastPathNo.includes("2007") ||
            item.FastPathNo.includes("2011") || item.FastPathNo.includes("2012") ||
            item.FastPathNo.includes("2013") || item.FastPathNo.includes("2016") ||
            item.FastPathNo.includes("2017") || item.FastPathNo.includes("2021") ||
            item.FastPathNo.includes("2022") || item.FastPathNo.includes("2023") ||
            item.FastPathNo.includes("2024") || item.FastPathNo.includes("2025") ||
            item.FastPathNo.includes("2026") || item.FastPathNo.includes("2027") ||
            item.FastPathNo.includes("2028") || item.FastPathNo.includes("2040") ||
            item.FastPathNo.includes("2041") || item.FastPathNo.includes("2042") ||
            item.FastPathNo.includes("2043") || item.FastPathNo.includes("2044") ||
            item.FastPathNo.includes("2045") || item.FastPathNo.includes("2046") ||
            item.FastPathNo.includes("2047") || item.FastPathNo.includes("2051") ||
            item.FastPathNo.includes("2054") || item.FastPathNo.includes("2055") ||
            item.FastPathNo.includes("2071") || item.FastPathNo.includes("2072") ||
            item.FastPathNo.includes("2073") || item.FastPathNo.includes("2075") ||
            item.FastPathNo.includes("2077")
    });
    // rawFunctionsList = rawFunctionsList.filter(function(item) {
    //     return item.ServiceId.includes("41") && item.ModuleId.includes("01");
    // });


    ////////////////////// make searchbar maps and reverse maps /////////

    let group_name_vs_child_func_cluster_dict = {}; // big dictionary
    let fastpath_vs_function_name_dict = {};
    let function_name_vs_other_data_dict = {};

    // other data = fast path, link
    let tempDict = {};
    let tempItems = [];
    let funcData = {};

    for (funcData of rawFunctionsList) {

        tempDict = {
            FunctionGroupName: "Deposit", //funcData.ServiceName,
            FastPath: funcData.FastPathNo,
            FunctionName: funcData.FunctionName,
            FunctionId: funcData.FunctionId, // will stay fixed
            TargetPath: "/" + funcData.TargetPath.replace('\\', '\/'), // without the first '/' it doesn't start it as the root.
            ConcatName: funcData.FastPathNo + "-" + funcData.FunctionName.trim(),
            icon: "local_activity",
        };

        // comment out later. maybe?
        tempDict.FunctionGroupName = tempDict.FunctionGroupName.replace("UltimusNex - ", "");

        if (!(tempDict.FunctionGroupName in group_name_vs_child_func_cluster_dict)) {
            group_name_vs_child_func_cluster_dict[tempDict.FunctionGroupName] = {
                // FunctionGroupName: tempDict.FunctionGroupName,
                FunctionGroupName: tempDict.FunctionGroupName,
                FunctionsArray: [],
            };
        }

        group_name_vs_child_func_cluster_dict[tempDict.FunctionGroupName].FunctionsArray.push(
            tempDict
        );

        // populate fastpath_vs_function_name_dict
        fastpath_vs_function_name_dict[funcData.FastPathNo.trim()] =
            funcData.FastPathNo + "-" + funcData.FunctionName.trim();

        // populate function_name_vs_other_data_dict
        // tempDict = {
        //     FastPath: funcData.FastPathNo,
        //     TargetPath: funcData.TargetPath,
        // };

        function_name_vs_other_data_dict[
            funcData.FastPathNo + "-" + funcData.FunctionName.trim()
        ] = tempDict;
    }

    var final_fastpath_vs_function_name_dict = fastpath_vs_function_name_dict;
    var final_function_name_vs_other_data_dict = function_name_vs_other_data_dict;
    return [group_name_vs_child_func_cluster_dict, final_fastpath_vs_function_name_dict, final_function_name_vs_other_data_dict];
}

var generateDynamicMenu = (UserFunctionAccess) => {
    return generateClusters(UserFunctionAccess);
}

var getClusterNamesForSidebar = (group_name_vs_child_func_cluster_dict) => {
    var group_names_list = Object.keys(
        group_name_vs_child_func_cluster_dict
    );

    var items = [];

    for (var group of group_names_list) {
        var item = {
            active: false,
            text: group,
            icon: "mdi-account",
        }
        items.push(item);
    }

    return items;
}

var generateFunctionList = (UserFunctionAccess) => {
    let rawFunctionsList = UserFunctionAccess;
    rawFunctionsList = rawFunctionsList.filter(function(item) {
        return item.FastPathNo.includes("2004") || item.FastPathNo.includes("2005") ||
            item.FastPathNo.includes("2006") || item.FastPathNo.includes("2007") ||
            item.FastPathNo.includes("2011") || item.FastPathNo.includes("2012") ||
            item.FastPathNo.includes("2013") || item.FastPathNo.includes("2016") ||
            item.FastPathNo.includes("2017") || item.FastPathNo.includes("2021") ||
            item.FastPathNo.includes("2022") || item.FastPathNo.includes("2023") ||
            item.FastPathNo.includes("2024") || item.FastPathNo.includes("2025") ||
            item.FastPathNo.includes("2026") || item.FastPathNo.includes("2027") ||
            item.FastPathNo.includes("2028") || item.FastPathNo.includes("2040") ||
            item.FastPathNo.includes("2041") || item.FastPathNo.includes("2042") ||
            item.FastPathNo.includes("2043") || item.FastPathNo.includes("2044") ||
            item.FastPathNo.includes("2045") || item.FastPathNo.includes("2046") ||
            item.FastPathNo.includes("2047") || item.FastPathNo.includes("2051") ||
            item.FastPathNo.includes("2054") || item.FastPathNo.includes("2055") ||
            item.FastPathNo.includes("2071") || item.FastPathNo.includes("2072") ||
            item.FastPathNo.includes("2073") || item.FastPathNo.includes("2075") ||
            item.FastPathNo.includes("2077");
    });

    // other data = fast path, link
    let functionDataList = [];
    let funcData = {};
    let tempDict = {};

    for (funcData of rawFunctionsList) {

        tempDict = {
            FunctionGroupName: "Deposit", //funcData.ServiceName,
            FastPath: funcData.FastPathNo,
            FunctionName: funcData.FunctionName,
            FunctionId: funcData.FunctionId, // will stay fixed
            TargetPath: "/" + funcData.TargetPath.replace('\\', '\/'), // without the first '/' it doesn't start it as the root.
            ConcatName: funcData.FastPathNo + "-" + funcData.FunctionName.trim(),
            icon: "local_activity",
        };
        functionDataList.push(tempDict);
    }
    return functionDataList;
}

export {
    generateDynamicMenu,
    getClusterNamesForSidebar,
    generateFunctionList
}