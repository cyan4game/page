// 加载组件
globalAddScript('../../component/bottomTab_vue.js')

window.onload = () => {

    // 实例化页面
    const vm = new Vue({
        el: '#app',
        created () {
            // 应用组件
            _loadBottomTab()
        },
        mounted () {
            setTimeout(() => {
                console.log(this)
            }, 1000)
        }
    })


}