// create a file named "loginConfig.js" in the "public" folder. Replace the "Local_IP" field with your own IP.
// loginConfig.js file must be gitignored all the time at any situation. 
// Otherwise upon pulling, everyones local ip will be changed and development will stop.

const CommonData = {
  PROXY_URL: "http://localhost:5000/",
  LOCAL_IP: "192.168.20.103",
  APPLICATION_ID: "99",
  CUSTOMER_MODULE_ID: "01"
};

export { CommonData };

