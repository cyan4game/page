/* 图片加载动画 */

function _loadComLazyImg () {
    Vue.component('lazy-img', {
        name: 'lazy-img',
        props: ['src'],
        data: () => {
            return {
                loading: true
            }
        },
        methods: {
            loaded (e) {
                this.loading = false
            }
        },
        template: `
        <div class="com-lazy-img">
            <div class="com-lazy-bg" v-if="loading"></div>
            <div class="com-lazy-flash" v-if="loading"></div>
            <img :src="src" alt="logo" @load="loaded">
        </div>
        `
    })
}
