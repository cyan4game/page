
window.onload = () => {
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                imgs: {
                    right: '../../assets/img/icon-right.png',
                    switch: '../../assets/img/findinfo-switch.png',
                    up: '../../assets/img/comment-up.png',
                    upEd: '../../assets/img/comment-up-ed.png',
                    comment: '../../assets/img/find-comment.png',
                    commentUp: '../../assets/img/find-up.png',
                    commentUpEd: '../../assets/img/find-up-ed.png',
                    star: '../../assets/img/find-star.png',
                    starEd: '../../assets/img/find-star-ed.png',
                    share: '../../assets/img/find-share.png',
                },
                query: {},
                info: {
                    title: 'Gemini DNS 这是标题',
                    date: '23分钟前',
                    banner: '',
                    content: 'Gemini DNS over HTTPS<br/>是一个进行安全化的域名解决方案<br/>以加密的HTTPS协议进行DNS解析请求，避免原始DNS协议中用户的DNS解析请求被窃听或者修改的问题(例如中间人攻击)来达到保护用户隐私的目的。<br/><br/>Google及Mozilla基金会正在测试此协议，提高网络安全性。',
                    tags: [
                        '保护隐私', '网络安全', '防止修改'
                    ]
                },
                comment: {
                    sort: 1, // 1 热门     2 最新
                    nums: 234,
                    ups: 15000,
                    isUp: false,
                    isStar: false,
                    list: [
                        {
                            user: { avatar: '', name: '皮皮虾' },
                            date: '昨天 15:23',
                            ups: 120000,
                            isUp: true,
                            content: '皮肤好，貌美如花，真说哈看。',
                            comments: 54,
                            children: []
                        },
                        {
                            user: { avatar: '', name: '皮皮虾' },
                            date: '昨天 15:23',
                            ups: 120000,
                            isUp: false,
                            content: '皮肤好，貌美如花，真说哈看。',
                            comments: 0,
                            children: []
                        },
                        {
                            user: { avatar: '', name: '皮皮虾' },
                            date: '昨天 15:23',
                            ups: 120000,
                            isUp: false,
                            content: '皮肤好，貌美如花，真说哈看。',
                            comments: 54,
                            children: []
                        },
                        {
                            user: { avatar: '', name: '皮皮虾' },
                            date: '昨天 15:23',
                            ups: 120000,
                            isUp: false,
                            content: '皮肤好，貌美如花，真说哈看。',
                            comments: 54,
                            children: []
                        }
                    ]
                },
                inputFocus: false,
                showCommentChildren: false,
            }
        },
        methods: {
            // 查看评论详情
            openCommentChildren (item) {
                this.showCommentChildren = true
            },
            // 获取参数
            getQuery () {
                this.query = JSON.parse(decodeURIComponent(location.href.split('?query=')[1]))
                console.log('参数：', this.query)
            },
            // 切换评论排序方式
            checkSort () {
                this.comment.sort = this.comment.sort == 1 ? 2 : 1
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
            // 返回
            goBack () {
                window.location.href = '../find/index.html'
            }
        },
        mounted () {
            _cancelLoadingFrame()
            this.getQuery()
        }
    })
}