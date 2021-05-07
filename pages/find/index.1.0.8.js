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
                    start: '../../assets/img/start.png'
                },
                hotSearchs: [ // 热搜
                    { id: 1, title: '五一原来是七天假期', isHot: true, isNew: false },
                    { id: 1, title: 'Angelababy公主', isHot: false, isNew: true },
                    { id: 1, title: '沈腾儿子丑闻爆料', isHot: false, isNew: false },
                    { id: 1, title: 'INT01官博 吃相难看', isHot: false, isNew: true },
                    { id: 1, title: '江苏南通大风11死102伤', isHot: true, isNew: false },
                    { id: 1, title: '五一期间接种疫苗', isHot: false, isNew: false }
                ],
                activeTab: 1,
                tabs: [ // 分类
                    { id: 1, name: '今日热点' },
                    { id: 2, name: '猫咪福利' },
                    { id: 3, name: '赠送VIP' }
                ]
            }
        },
        methods: {
            // 切换分类
            checkTab (item) {
                this.activeTab = item.id
            }
        },
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