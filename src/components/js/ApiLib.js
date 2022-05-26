var commonConfig = (requestData, serviceConfig) => {
    let requestString = JSON.stringify(requestData.data);
    let config = {
        method: requestData.method,
        url: serviceConfig.URL + serviceConfig.ServicePath + requestData.path,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        params: {
            requestString: btoa(requestString),
        },
    };
    return config;
};
var postConfig = (requestData, serviceConfig) => {
    let config = serviceConfig.URL + serviceConfig.ServicePath + requestData.path;
    return config;
};

export {
    commonConfig,
    postConfig
};