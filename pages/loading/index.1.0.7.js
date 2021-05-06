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
                    setTimeout(() => {
                        this.replaceCanvas()
                    }, 100)
                }, 0)
            },
            // 获取rem
            getRem () {
                const oHtml = document.getElementsByTagName('html')[0]
                const width = oHtml.clientWidth
                // 375px的屏幕基准像素为10px
                return 10 * (width / 375)
            },
            // 替换canvas为图片
            replaceCanvas () {
                html2canvas(document.querySelector('#canvas'), {
                    allowTaint: true
                }).then(canvas => {
                    const imgUrl = canvas.toDataURL()
                    const img = document.createElement('img')
                    img.src = imgUrl
                    img.className = 'page-loading-dialog-img'
                    const canvasDom = document.querySelector('#canvas')
                    canvasDom.appendChild(img)
                    this.showRealCode = false
                })
            },
            // 保存图片
            saveImg () {
                alert(1)
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
            // 截图到相册
            saveCanvas () {
                const img = document.querySelector('.page-loading-dialog-img')
                console.log(img.src)
                const a = document.createElement('a')
                a.href = img.src
                a.download = 'MAOMI.png'
                a.click()
                // html2canvas(document.querySelector('#canvas'), {
                //     allowTaint: true
                // }).then(canvas => {
                //     const imgUrl = canvas.toDataURL('image/png')
                //     const blob=new Blob([''], {type:'application/octet-stream'})
                //     const url = URL.createObjectURL(blob)
                //     
                //     
                //     
                //     const e = document.createEvent('MouseEvents')
                //     e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
                //     a.dispatchEvent(e)
                //     URL.revokeObjectURL(url)
                // })
            }
        },
        mounted () {
            _cancelLoadingFrame()
        }
    })
}