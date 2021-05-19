export default {
    install(Vue){
        Vue.prototype.$post = function (callUrl, postData, succ, fail){
            var URL = `${config.contextRoot}` + callUrl;
            axios.post(URL, postData, requestOptions).then((result) => {
                succ(result.data, this);
            }).catch(e => {
                fail(e, this);
            });
        }
    }
}