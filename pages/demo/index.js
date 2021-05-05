
const str = ``
window.onload = () => {
    const vm = new Vue({
        el: '#app',
        data: () => {
            return {
                src: ''
            }
        },
        mounted () {
            _cancelLoadingFrame()
            const that = this
            console.log('发起请求: https://ss.qysrdjg.com/maomivip//jp1_48v8am2e/jp1_48v8am2e.jpg.txt')
            _get('https://ss.qysrdjg.com/maomivip//jp1_48v8am2e/jp1_48v8am2e.jpg.txt').then(res => {
                console.log('请求返回', res)
                if (!res) return
                that.src = _decrypt(res)
                console.log('解密成功')
            })
        }
    })
}