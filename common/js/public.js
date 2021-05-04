// 引入都需要的公共js
(() => {

    const jsArr = [
        '../../common/js/vue2.6.12.min.js',
        '../../common/js/rem.js'
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

