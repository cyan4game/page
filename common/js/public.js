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
function _decrypt (word) {
    const str = decodeURIComponent(word)
    // console.log(str)
    // const str = word
    const aesKey = '2c4add8f849a7bea'
    const aesVi = 'dc4b73b33e69eaff'
    const key = aesKey
    const iv = aesVi
    // const key = CryptoJS.enc.Utf8.parse(aesKey)
    // const iv = CryptoJS.enc.Utf8.parse(aesVi)
    const decrypt = CryptoJS.AES.decrypt(str, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    // console.log(decrypt.toString())
    // return decrypt.toString(CryptoJS.enc.Utf8)
}
