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
                imgs: {
                    top: '../../assets/img/page-loading-top.png',
                    btn: '../../assets/img/page-loading-btn.png',
                    qrcode: '../../assets/img/page-loading-qrcode.png',
                    book: '../../assets/img/page-loading-book.png',
                    banner1: '../../assets/img/page-loading-banner1.png',
                    banner2: '../../assets/img/page-loading-banner2.jpg',
                    logo: '../../assets/img/logo.png',
                    blueBtn: '../../assets/img/blue-btn.png',
                    yellowBtn: '../../assets/img/yellow-btn.png'
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
                setTimeout(() => {
                    this.qrcode = new QRCode('qrcode', {
                        text: 'www.8df96.com',
                        width: 16.4 * this.getRem(),
                        height: 16.4 * this.getRem(),
                        colorDark : '#32CEFA',
                        colorLight : '#fff',
                        correctLevel : QRCode.CorrectLevel.H
                    })
                }, 100)
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
                this.saveCanvas()
                this.saving = true
                this.savingText = '保存成功啦(2)'
                setTimeout(() => {
                    this.savingText = '保存成功啦(1)'
                }, 1000)
                setTimeout(() => {
                    this.saving = false
                    this.showDialog = false
                    this.savingText = '点击保存'
                }, 2000)
            },
            // 截图到相册
            saveCanvas () {
                html2canvas(document.querySelector('#qrcode')).then(canvas => {
                    const imgUrl = canvas.toDataURL('image/png')
                    let a = document.createElement('a')
                    const e = new MouseEvent('click')
                    a.download = 'MAOMI'
                    a.href = imgUrl     
                    a.dispatchEvent(e)
                    a = null
                })
            }
        },
        mounted () {
            _cancelLoadingFrame()
            console.log('1')
        }
    })
}