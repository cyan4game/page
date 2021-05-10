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


// 复制
function _copy (content) {
    const aux = document.createElement('input')
    aux.setAttribute('value', content)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
}


// 消息提示
function _tip (message, type) {
    let div = document.createElement('div')
    div.innerText = message
    div.style.cssText = `
        position: fixed;
        bottom: 6rem;
        left: 50%;
        max-width: 90%;
        padding: 0.2rem 1.2rem;
        line-height: 2rem;
        color: #fff;
        font-weight: bold;
        font-size: 1.4rem;
        text-align: center;
        transform: translateX(-150%);
        z-index: 9999;
        background-color: #32CEFA;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        border-radius: 1rem;
        transition: all 0.2s ease;
        opacity: 0.95
    `
    document.body.appendChild(div)
    setTimeout(() => {
        div.style.transform = 'translateX(-50%)'
    }, 0)
    setTimeout(() => {
        div.style.transform = 'translateX(150%)'
    }, 2000)
    setTimeout(() => {
        document.body.removeChild(div)
        div = null
    }, 2400)
}