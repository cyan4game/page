// 加载组件
globalAddScript('../../component/bottomTab_vue.js')
globalAddScript('../../component/comBanner_vue.js')
globalAddScript('../../component/comLazyImg_vue.js')

window.onload = () => {

    // 分类
    const Types = [
        {
            id: 1,
            name: '在线电影',
            children: [
                { id: 1, name: '短视频区', href: '' },
                { id: 2, name: '美女主播', href: '' },
                { id: 3, name: '国产精品', href: '' },
                { id: 4, name: '中文字幕', href: '' },
                { id: 5, name: '亚洲无码', href: '' },
                { id: 6, name: '欧美精品', href: '' },
                { id: 7, name: '精彩动画', href: '' },
                { id: 8, name: '女优专区', href: '' }
            ]
        },
        {
            id: 2,
            name: '手机下载',
            children: [
                { id: 1, name: '亚洲电影', href: '' },
                { id: 2, name: '欧美电影', href: '' },
                { id: 3, name: '制服丝袜', href: '' },
                { id: 4, name: '强奸乱伦', href: '' },
                { id: 5, name: '国产自拍', href: '' },
                { id: 6, name: '变态另类', href: '' },
                { id: 7, name: '经典三级', href: '' },
                { id: 8, name: '成人动漫', href: '' }
            ]
        },
        {
            id: 3,
            name: '激情图区',
            children: [
                { id: 1, name: '自拍偷拍', href: '' },
                { id: 2, name: '亚洲色图', href: '' },
                { id: 3, name: '欧美色图', href: '' },
                { id: 4, name: '美腿丝袜', href: '' },
                { id: 5, name: '乱伦熟女', href: '' },
                { id: 6, name: '欧美精品', href: '' },
                { id: 7, name: '卡通动漫', href: '' },
                { id: 8, name: '极品美女', href: '' }
            ]
        },
        {
            id: 4,
            name: '撸撸图区',
            children: [
                { id: 1, name: '高清美女', href: '' },
                { id: 2, name: '极品美女', href: '' },
                { id: 3, name: '打飞机区', href: '' },
                { id: 4, name: '撸管图片', href: '' },
                { id: 5, name: '巨乳诱惑', href: '' },
                { id: 6, name: '极品诱惑', href: '' },
                { id: 7, name: '推女郎图', href: '' },
                { id: 8, name: '美女诱惑', href: '' }
            ]
        }
    ]

    // 实例化页面
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                src: '../../assets/img/ad-push.png',
                imgs: {
                    start: '../../assets/img/start.png',
                    adPush: '../../assets/img/ad-push.png',
                    iconRight: '../../assets/img/icon-right.png',
                    listen: '../../assets/img/listen.png',
                    logo: '../../assets/img/logo.png',
                    iconSearch: '../../assets/img/icon-search.png',
                    history: '../../assets/img/home-top-history.png',
                    shelf: '../../assets/img/book-shelf.png'
                },
                search: '', // 搜索内容
                Types,
                ads: [ // 广告列表
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' },
                    { id: 1, pic: '#', href: '' }
                ],
                news: [ // 最新视频
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' }
                ],
                tops: [ // 精选视频
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                ],
                storys: [ // 情色小说
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇之心', date: '2021-06-30', type: 0 },
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇的自由之这是什么标题', date: '2021-06-30', type: 1 },
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇的自由之这是什么标题', date: '2021-06-30', type: 2 },
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇之心', date: '2021-06-30', type: 0 },
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇的自由之这是什么标题', date: '2021-06-30', type: 1 },
                    { id: 1, pic: '../../assets/img/ad-book.png', name: '少妇之心', date: '2021-06-30', type: 2 }
                ],
                voices: [ // 有声有色
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', pic: '../../assets/img/ad-big.png', href: '' }
                ],
                cartoons: [ // 热血漫画
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' },
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' },
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' },
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' },
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' },
                    { id: 1, pic: '../../assets/img/ad-mini.png', name: '曼珠沙华女孩', date: '2021-06-30' }
                ],
                
            }
        },
        created () {
            // 应用组件
            _loadBottomTab()
            _loadComBanner()
            _loadComLazyImg()
        },
        mounted () {
            _cancelLoadingFrame()
        }
    })


}