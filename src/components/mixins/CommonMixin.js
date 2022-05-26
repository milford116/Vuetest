import { appList } from "@/../public/appConfig.js";
export default {
    created() {},
    data: () => {
        return {
            appList: appList
        };
    },
    methods: {
        getUrl(item) {
            let data = {};
            data.UserId = this.$store.getters.getUserId;
            data.JwtToken = this.$store.getters.getToken;
            let requestData = {};
            requestData.data = data;
            const request = btoa(JSON.stringify(requestData));
            return item + "/" + request;
        },
        generateAppicationList(item) {
            const permittedApplications = item;
            if (!permittedApplications)
                return [];
            const memo = {};
            permittedApplications.forEach((application) => {
                memo[application["ApplicationId"]] = true;
            });
            const commonApplications = this.appList.filter(
                (a) => memo[a["ApplicationId"]]
            );
            // commonApplications.forEach((application) => {
            //     application.ApplicationUrlWithParam = this.getUrl(application.ApplicationUrl);
            // });
            return commonApplications;
        },
        clearSession() {
            this.$store
                .dispatch("resetSession")
                .then((response) => {})
                .catch((e) => {});
        },
        redirectToAnotherApp(item) {
            const url = this.getUrl(item.ApplicationUrl);
            this.clearSession();
            window.open(url, '_self')
        },
        redirectToHomeApp(item) {
            const url = this.getUrl(item.url);
            this.clearSession();
            window.open(url, '_self')
        },
        preventRightClick(e) {
            e.preventDefault();
        },
        number2words(inputNumber) {
            if (typeof inputNumber === "string" && !inputNumber)
                return "";
            var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
            var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
            var number = parseFloat(inputNumber).toFixed(2).split(".");
            var num = parseInt(number[0]);
            var digit = parseInt(number[1]);
            const len = num.toString().length;
            if (len > 18) return 'overflow';
            var n = ('0000000' + num).substr(-7).match(/^(\d{2})(\d{2})(\d{1})(\d{2})$/);
            var d = ('00' + digit).substr(-2).match(/^(\d{2})$/);
            var largeSection = '';

            if (len > 7) {
                const extractedNo = ('000000000' + (num.toString().substr(0, len - 7))).substr(-9);
                var cn = extractedNo.match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                largeSection += (cn[1] != 0) ? (a[Number(cn[1])] || b[cn[1][0]] + ' ' + a[cn[1][1]]) + 'Crore ' : '';
                largeSection += (cn[2] != 0) ? (a[Number(cn[2])] || b[cn[2][0]] + ' ' + a[cn[2][1]]) + 'Lakh ' : '';
                largeSection += (cn[3] != 0) ? (a[Number(cn[3])] || b[cn[3][0]] + ' ' + a[cn[3][1]]) + 'Thousand ' : '';
                largeSection += (cn[4] != 0) ? (a[Number(cn[4])] || b[cn[4][0]] + ' ' + a[cn[4][1]]) + 'Hundred ' : '';
                largeSection += (cn[5] != 0) ? (a[Number(cn[5])] || b[cn[5][0]] + ' ' + a[cn[5][1]]) : '';
            }
            if (!n) return;
            var str = '';
            str += (parseInt(inputNumber) === 0) ? 'Zero Taka ' : '';
            str += (largeSection != '') ? largeSection + 'Crore ' : '';
            str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Lakh ' : '';
            str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Thousand ' : '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Hundred ' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Taka ' : '';
            str += (d[1] != 0) ? ((str != '') ? "and " : '') + (a[Number(d[1])] || b[d[1][0]] + ' ' + a[d[1][1]]) + 'Paisa ' : 'Only!';
            return str;
        },
        Get_Padded_Number(pACCOUNT_NUMBER) {
            var PAccNo = "";
            if (pACCOUNT_NUMBER && pACCOUNT_NUMBER.length < 11 && pACCOUNT_NUMBER.length > 3) {
                PAccNo =
                    pACCOUNT_NUMBER.substring(0, 3) +
                    pACCOUNT_NUMBER.substring(3, pACCOUNT_NUMBER.length).padStart(8, "0");
            } else {
                PAccNo = pACCOUNT_NUMBER;
            }
            return PAccNo;
        },
        async getProductId(branchId, accNo) {
            const businessData = {
                BRANCH_ID: branchId,
                AccountNo: accNo
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/GetAccProductId",
                businessData
            );
            return resData;
        },
        async getApplicationType(productId) {
            const businessData = {
                pPRODUCT_ID: productId
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/GetApplicationType",
                businessData
            );
            return resData;
        },
        async GetTransAmtList() {
            const businessData = {
                PRODUCT_ID: ""
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/GetTransAmountList",
                businessData
            );
            return resData;
        },
        async getExchangeRateDDL() {
            const businessData = {
                NAME_VALUE_LIST: "1",
                EXCHG_RATE_ID: "",
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/GetExchangeRateCategoryList",
                businessData
            );
            return resData;
        },
        async glValidAccountCheck(branchId, GLAccountNo, GLSLNo, allowIBTA) {
            const businessData = {
                BRANCH_ID: branchId,
                GL_ACC_SL: GLSLNo,
                GL_ACC_NO: GLAccountNo,
                ALLOW_GLTYPE: "ALIE",
                ALLOW_IBTA: allowIBTA,
                ALLOW_SUNDSUS: null,
                ALLOW_FORGNCURR: null,
                AllOW_OFFBS: null,
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "GL",
                "/CommonGL/ValidGLAccount1",
                businessData
            );
            if (resData) {
                if (resData.ERROR_MSG) {
                    this.$root.$snackbar.seterrortext(objGLTransaction.ERROR_MSG);
                    return 0;
                } else if (resData.Valid_Acc == "1") {
                    return 1;
                } else {
                    this.$root.$snackbar.seterrortext("GL Account is not valid");
                    return 0;
                }
            }
        },
        async getBusRuleConfig(busRuleId) {
            const businessData = {
                BUS_RULE_ID: busRuleId
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/GetBusRuleConfig",
                businessData
            );
            return resData;
        },
        async isValidClientAccount(branchId, accNo, drCr = "D") {
            const businessData = {
                BRANCH_ID: branchId,
                ACCNO: accNo,
                DR_CR: drCr
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Config",
                "/Common/ValidClientAccount",
                businessData
            );
            return resData;
        },
        async getCorCusProfile(customerId, userId, queueId) {
            const businessData = {
                CUSTOMER_ID: customerId,
                QUEUE_ID: queueId,
                USER_ID: userId
            };
            const resData = await this.$getApiCall(
                this.currFunctionNm,
                "Customer",
                "/CorCusProfileFetch/GetCorCusProfile",
                businessData
            );
            return resData;
        },
    }
};