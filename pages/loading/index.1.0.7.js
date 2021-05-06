const qr_url = 'https://cyan4game.github.io/winf.github.io/assets/img/maomi_qrcode.jpg'

window.onload = () => {
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                title1: 'WWW.8DF96.COM',
                showDialog: false,
                qrcode: null,
                saving: false,
                savingText: '点击保存',
                showRealCode: true,
                imgs: {
                    top: '../../assets/img/page-loading-top.png',
                    btn: '../../assets/img/page-loading-btn.png',
                    qrcode: '../../assets/img/page-loading-qrcode.png',
                    book: '../../assets/img/page-loading-book.png',
                    banner1: '../../assets/img/page-loading-banner1.png',
                    banner2: '../../assets/img/page-loading-banner2.jpg',
                    logo: '../../assets/img/logo.png',
                    blueBtn: '../../assets/img/blue-btn.png',
                    yellowBtn: '../../assets/img/yellow-btn.png',
                    qrcodes: qr_url
                }
            }
        },
        methods: {
            // 点击进入
            handleIn () {
                window.location.replace('../home/index.html')
            },
            // 打开弹窗
            open () {
                this.showDialog = true
            },
            // 获取rem
            getRem () {
                const oHtml = document.getElementsByTagName('html')[0]
                const width = oHtml.clientWidth
                // 375px的屏幕基准像素为10px
                return 10 * (width / 375)
            },
            // 保存图片
            saveImg () {
                if (this.saving) return
                this.saving = true
                this.savingText = '保存成功啦(2)'
                setTimeout(() => {
                    this.saveCanvas()
                }, 300)
                setTimeout(() => {
                    this.savingText = '保存成功啦(1)'
                }, 1000)
                setTimeout(() => {
                    this.saving = false
                    this.showDialog = false
                    this.showRealCode = true
                    this.savingText = '点击保存'
                }, 2000)
            },
            // 保存到相册
            saveCanvas () {
                const a = document.createElement('a')
                a.href = qr_url
                a.setAttribute('href', qr_url)
                a.setAttribute('download', 'MAOMI')
                const evobj = document.createEvent('MouseEvents')
                evobj.initMouseEvent('click',true,true,window,0,0,0,0,0,false,false,true,false,0,null)
                a.dispatchEvent(evobj)
            }
        },
        mounted () {
            _cancelLoadingFrame()
        }
    })
}