// 加载组件
globalAddScript('../../component/bottomTab_vue.js')
globalAddScript('../../component/comLazyImg_vue.js')

window.onload = () => {

    // 实例化页面
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                imgs: {
                    beauty: '../../assets/img/access-beauty.png',
                    box: '../../assets/img/access-box.png',
                    android: '../../assets/img/icon-android.png',
                    ios: '../../assets/img/icon-ios.png',
                    cat: '../../assets/img/access-cat.png',
                    bigbox: '../../assets/img/access-bigbox.png'
                }
            }
        },
        methods: {},
        created () {
            // 应用组件
            _loadBottomTab()
            _loadComLazyImg()
        },
        mounted () {
            _cancelLoadingFrame()
        }
    })


}