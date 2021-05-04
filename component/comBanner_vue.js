/* 主页滚动banner */

function _loadComBanner () {
    Vue.component('com-banner', {
        name: 'com-banner',
        props: ['titlecolor'],
        data: () => {
            return {
                activeBannerIndex: 1,
                comBanners: [
                    { id: 1, img: '../../assets/img/banner.png', title: '【澳门金沙】', info: '注册立即返现50%现金' },
                    { id: 1, img: '../../assets/img/banner.png', title: '【澳门金沙】', info: '注册立即返现50%现金' },
                    { id: 1, img: '../../assets/img/banner.png', title: '【澳门金沙】', info: '注册立即返现50%现金' },
                    { id: 1, img: '../../assets/img/banner.png', title: '【澳门金沙】', info: '注册立即返现50%现金' }
                ],
                start: 0,
                interval: null
            }
        },
        methods: {
            touchstart (e) {
                this.start = e.targetTouches[0].clientX
            },
            touchend (e) {
                const end = e.changedTouches[0].clientX
                if (end > this.start + 50) { // 右滑
                    this.activeBannerIndex--
                    if (this.activeBannerIndex <= 0) {
                        this.activeBannerIndex = 0
                    }
                    this.autoScroll()
                }
                if (end < this.start - 50) { // 左滑
                    this.activeBannerIndex++
                    if (this.activeBannerIndex >= this.comBanners.length - 1) {
                        this.activeBannerIndex = this.comBanners.length - 1
                    }
                    this.autoScroll()
                }
            },
            autoScroll () {
                if (this.interval) clearInterval(this.interval)
                this.interval = setInterval(() => {
                    this.activeBannerIndex++
                    if (this.activeBannerIndex >= this.comBanners.length) {
                        this.activeBannerIndex = 0
                    }
                }, 2000)
            }
        },
        mounted () {
            if (this.active) {
                this.bottomActiveIndex = this.active
            }
            this.autoScroll()
        },
        beforeDestory () {
            if (this.interval) clearInterval(this.interval)
        },
        template: `
        <div class="com-banner">
            <div class="com-banner-pages flex-row" :style="{width:comBanners.length*100+'%',left:-activeBannerIndex*100+'%'}" @touchstart="touchstart" @touchend="touchend">
                <div class="com-banner-page" v-for="(item,i) in comBanners" :key="i">
                    <div class="com-banner-img">
                        <img :src="item.img" alt="banner">
                    </div>
                    <div class="com-banner-text din">
                        <b class="com-banner-title" :style="{color:titlecolor}">{{item.title}}</b>
                        <span class="com-banner-info">{{item.info}}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}
