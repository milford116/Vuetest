import axios from 'axios'

const apiUrl = 'https://localhost:44358/api/';
export default {
    get(url) {
        url = apiUrl + url;
        return axios.get(url);
    },
    get(url, params) {
        url = apiUrl + url;
        return axios.get(url, {
            params: params
        });

    },
    post(url, data) {
        url = apiUrl + url;
        return axios.post(url, data);
    },
    // post(url, params,data ){
    //     url=apiUrl+url;
    //     return axios.post( url, {
    //         params: params
    //     },data );
    // },
    put(id, data) {
        return axios.put('https://music.com/api/v1/songs/' + id, data);
    },
    delete(id) {
        return axios.delete('https://music.com/api/v1/songs/' + id);
    }
}