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
                    delete: '../../assets/img/ion-delete.png',
                    left: '../../assets/img/icon-left.png',
                    logo: '../../assets/img/logo.png',
                    title: '../../assets/img/find-title2.png',
                    search: '../../assets/img/find-search.png',
                },
                search: '',
                preList: [],
                historySearchs: [ // 历史记录
                    '五一原来是七天假期',
                    'Angelababy公主',
                    '沈腾儿子丑闻爆料',
                    'INT01官博 吃相难看',
                    '江苏南通大风11死102伤',
                    '五一期间接种疫苗'
                ],
                hotSearchs: [ // 热搜
                    { id: 1, title: '五一原来是七天假期', isHot: true, isNew: false },
                    { id: 1, title: 'Angelababy公主', isHot: false, isNew: true },
                    { id: 1, title: '沈腾儿子丑闻爆料', isHot: false, isNew: false },
                    { id: 1, title: 'INT01官博 吃相难看', isHot: false, isNew: true },
                    { id: 1, title: '江苏南通大风11死102伤', isHot: true, isNew: false },
                    { id: 1, title: '五一期间接种疫苗', isHot: false, isNew: false }
                ],
                searchResult: [] // 搜索结果
            }
        },
        methods: {
            // 搜索
            handleSearch () {
                // if (this.search == '') return
                this.searchResult = [
                    { id: 1, title: '草榴666社区', info: '人气UP主，真人认证，真人视频，社区广场，GIF、求番、女优/网红，实时发布动态，人气直播，人气主播放福利，喷血诱惑等你来看。' },
                    { id: 1, title: '草榴666社区', info: '人气UP主，真人认证，真人视频，社区广场，GIF、求番、女优/网红，实时发布动态，网红，实时发布动态，人气直播，人气主播放福利，喷血诱惑等你来看。人气直播，人气主播放福利，喷血诱惑等你来看。' },
                    { id: 1, title: '草榴666社区', info: '人气UP主，真人认证，真人视频，社区广场，GIF、求番、女优/网红，实时发布动态，人气直播，人气主播放福利，喷血诱惑等你来看。' }
                ]
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