/* 图片加载动画 */

function _loadComLazyImg () {
    Vue.component('lazy-img', {
        name: 'lazy-img',
        props: ['src'],
        template: `
        <div class="com-lazy-img">
            <div class="com-lazy-bg"></div>
            <div class="com-lazy-flash"></div>
            <img :src="src" alt="logo">
        </div>
        `
    })
}
