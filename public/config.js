import { URL, ServicePath } from "./configURL";

const CoreTestProjectAPI = {
    URL: URL.CoreCoreTestProjectAPIURL,
    ServicePath: ServicePath.CoreCoreTestProjectAPIPath,
};


const CoreAPIGatewatyAPI = {
    URL: URL.CoreAPIGatewatyURL,
};

const CoreSecurityAPI = {
    URL: URL.CoreSecurityURL,
    LOGIN_PATH: "/Security/DoLogin",
    LOGOUT_PATH: "/Security/DoLogout",
    ServicePath: ServicePath.CoreSecurityPath,
};

export {
    CoreTestProjectAPI,
    CoreAPIGatewatyAPI,
    CoreSecurityAPI
};