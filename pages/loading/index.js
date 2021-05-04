window.onload = () => {
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                title1: 'WWW.8DF96.COM',
                imgs: {
                    top: '../../assets/img/page-loading-top.png',
                    btn: '../../assets/img/page-loading-btn.png',
                    qrcode: '../../assets/img/page-loading-qrcode.png',
                    book: '../../assets/img/page-loading-book.png',
                    banner1: '../../assets/img/page-loading-banner1.png',
                    banner2: '../../assets/img/page-loading-banner2.jpg',
                    logo: '../../assets/img/logo.png'
                }
            }
        },
        methods: {
            // 点击进入
            handleIn () {
                window.location.replace('../home/index.html')
            }
        },
        mounted () {
            _cancelLoadingFrame()
            console.log('1')
        }
    })
}