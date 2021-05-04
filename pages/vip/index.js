// 加载组件
globalAddScript('../../component/bottomTab_vue.js')
globalAddScript('../../component/comBanner_vue.js')
globalAddScript('../../component/comLazyImg_vue.js')

window.onload = () => {

    // 分类
    const Types = [
        {
            id: 1,
            name: 'VIP专区',
            children: [
                { id: 1, name: '猫咪推荐', href: '' },
                { id: 2, name: '原创国产', href: '' },
                { id: 3, name: '制服淫穴', href: '' },
                { id: 4, name: '换脸AI区', href: '' },
                { id: 5, name: '三级综艺', href: '' },
                { id: 6, name: '次元动漫', href: '' },
                { id: 7, name: '欧美大片', href: '' },
                { id: 8, name: '同性人妖', href: '' }
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
                    listen: '../../assets/img/listen-vip.png',
                    logo: '../../assets/img/logo_vip.png',
                    iconSearch: '../../assets/img/icon-search.png',
                    history: '../../assets/img/home-top-history-vip.png',
                    shelf: '../../assets/img/book-shelf.png',
                    videoVip: '../../assets/img/video-vip.png',
                    bookVip: '../../assets/img/book-vip.png'
                },
                search: '', // 搜索内容
                Types,
                ads: [ // 广告列表
                ],
                tops: [ // 猫咪推荐
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                    { id: 1, name: '美女荷官', time: '00:60:00', pic: '../../assets/img/ad-big.png', href: '' },
                ],
                news: [ // 最新视频
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' },
                    { id: 1, name: '美女荷官的情趣奖赏', time: '00:60:00', pic: '../../assets/img/ad-push.png', href: '' }
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