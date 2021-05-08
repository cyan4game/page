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
                    title: '../../assets/img/find-title.png',
                    title2: '../../assets/img/find-title2.png',
                    search: '../../assets/img/find-search.png',
                    hot: '../../assets/img/find-hot.png',
                    share: '../../assets/img/find-share.png',
                    up: '../../assets/img/find-up.png',
                    upEd: '../../assets/img/find-up-ed.png',
                    link: '../../assets/img/find-link.png',
                    comment: '../../assets/img/find-comment.png'
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
                ],
                hotTopics: [ // 热议话题
                    { id: 1, pic: '', content: '学习使我进步，学习使学习使我进步，学习使我快乐，我爱工作，工作需要我。两排文案真难编辑！我快乐，我爱工作，工作需要我。两排文案真难编辑！', share: 2422, up: 12000, isUp: false },
                    { id: 1, pic: '', content: '学习使我进步，学习使我快乐，我爱工作，工作需要我。两排文案真难编辑！', share: 2422, up: 12000, isUp: false },
                    { id: 1, pic: '', content: '学习使我进步，学习使我快乐，我爱工作，工作需要我。两排文案真难编辑！', share: 2422, up: 5412000, isUp: true },
                    { id: 1, pic: '', content: '学习使我进步，学习使我快乐，我爱工作，工作需要我。两排文案真难编辑！', share: 2422, up: 12000, isUp: false }
                ],
                links: [ // 今日话题-连接列表
                    { id: 1, title: '草榴社区', pic: '', info: '这个贴子这个贴子内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。', share: 2422, comment: 668, up: 12000, isUp: false },
                    { id: 2, title: '91SEX', pic: '', info: '这个贴子内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。', share: 2422, comment: 668, up: 3412000, isUp: true },
                    { id: 3, title: '草榴社区', pic: '', info: '这个贴子内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。', share: 2422, comment: 668, up: 43, isUp: false },
                    { id: 4, title: '草榴社区', pic: '', info: '这个贴子内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。', share: 2422, comment: 668, up: 1322000, isUp: false },
                    { id: 5, title: '草榴社区', pic: '', info: '这个贴子内容过于真实，导致社会政党，血腥暴力，违法犯罪太多，应当及时下线，请管理员及时处理否则后果很严重。', share: 2422, comment: 668, up: 12000, isUp: false }
                ],
                showTitleSearch: false
            }
        },
        methods: {
            // 切换分类
            checkTab (item) {
                this.activeTab = item.id
                console.log(this.activeTab)
            },
            // 短数字
            shortNum (number) {
                if (Number(number) >= 10000) {
                    return (Number(number) / 10000).toFixed(1) + 'w'
                // } else if (Number(number) >= 1000) {
                //     return (Number(number) / 1000).toFixed(1) + 'k'
                } else {
                    return Number(number)
                }
            },
            // 监听搜索部分高度
            searchWatcher () {
                const options = {
                    threshold: 0
                }
                const callback = entries => {
                    console.log(entries[0].intersectionRatio)
                    if (entries[0].intersectionRatio > 0) {
                        this.showTitleSearch = false
                    } else {
                        this.showTitleSearch = true
                    }
                }
                const observer = new IntersectionObserver(callback, options)
                observer.observe(this.$refs.search)
            }
        },
        created () {
            // 应用组件
            _loadBottomTab()
            _loadComLazyImg()
        },
        mounted () {
            _cancelLoadingFrame()
            setTimeout(() => {
                this.searchWatcher()
            }, 0)
        }
    })


}