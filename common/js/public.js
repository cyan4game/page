// 引入都需要的公共js
(() => {

    const jsArr = [
        '../../common/js/vue2.6.12.min.js',
        '../../common/js/rem.js',
        '../../common/js/crypto-js.js'
    ]

    jsArr.forEach(e => {
        globalAddScript(e)
    })
    
})()

// 引入js
function globalAddScript(url){
    const script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);
}


// 清除加载页面
function _cancelLoadingFrame () {
    const Loading = document.querySelector('.page-loading')
    if (Loading) {
        Loading.style.display = 'none'
    }
}


// 图片解密
const asc_key = "jeH3O1VX";
const base_lv = "nHnsU4cX";
function _decrypt (data) {
    let tmpiv = CryptoJS.enc.Utf8.parse(base_lv);
    const keyHex = CryptoJS.enc.Utf8.parse(asc_key);
    // direct decrypt ciphertext
    const decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(data)
    }, keyHex, {
        iv: tmpiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        formatter: CryptoJS.format.OpenSSL
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


// 发送GET请求
function _get (url) {
    return new Promise(resolve => {
        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url, true);
        httpRequest.send();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                try {
                    const json = httpRequest.responseText;
                    resolve(json)
                } catch {
                    resolve(false)
                }
            } else if (httpRequest.readyState == 4) {
                resolve(false)
            }
        };
    })
}