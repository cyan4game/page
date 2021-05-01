// 引入都需要的公共js
(() => {

    const jsArr = [
        '../../common/js/vue2.6.12.min.js',
        '../../common/js/rem.js'
    ]

    jsArr.forEach(e => {
        addScript(e)
    })

    function addScript(url){
        const script = document.createElement('script');
        script.setAttribute('type','text/javascript');
        script.setAttribute('src',url);
        document.getElementsByTagName('head')[0].appendChild(script);
    }
})()

