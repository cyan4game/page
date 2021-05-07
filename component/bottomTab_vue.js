/* 底部导航菜单 */

function _loadBottomTab () {
    Vue.component('bottom-tab', {
        name: 'bottom-tab',
        props: ['active'],
        data: () => {
            return {
                bottomActiveIndex: 0,
                bottomTabList: [
                    { name: '精选', icon: 'bottom-tab-1.png', activeIcon: 'bottom-tab-active-1.png', href: '../home/index.html' },
                    { name: 'VIP专区', icon: 'bottom-tab-2.png', activeIcon: 'bottom-tab-active-2.png', href: '../vip/index.html' },
                    { name: '发现', icon: 'bottom-tab-3.png', activeIcon: 'bottom-tab-active-3.png', href: '../find/index.html' },
                    { name: '访问', icon: 'bottom-tab-4.png', activeIcon: 'bottom-tab-active-4.png', href: '' },
                    { name: '我的', icon: 'bottom-tab-5.png', activeIcon: 'bottom-tab-active-5.png', href: '' }
                ]
            }
        },
        methods: {
            // 跳转
            bottomTabJump (item, i) {
                this.bottomActiveIndex = i
                if (!item.href) return
                window.location.href = item.href
            },
            // 设置当前激活的下标
            setActiveBottom (index) {
                this.bottomActiveIndex = index
            }
        },
        mounted () {
            if (this.active) {
                this.bottomActiveIndex = this.active
            }
        },
        template: `
        <div class="bottom-tab flex-row">
            <div v-for="(item, i) in bottomTabList" :key="i" class="flex-1 bottom-tab-item" @click="bottomTabJump(item, i)">
                <div class="bottom-tab-item-img" :class="bottomActiveIndex == i ? 'active-bottom-tab' : ''">
                    <img v-show="bottomActiveIndex != i" :src="'../../assets/img/' + item.icon" alt="icon">
                    <img v-show="bottomActiveIndex == i" :src="'../../assets/img/' + item.activeIcon" alt="icon">
                </div>
                <div :class="bottomActiveIndex == i ? 'active-bottom-text' : ''" class="bottom-tab-item-name" :style="{color:bottomActiveIndex==1&&i==1?'#C99667':''}">{{item.name}}</div>
            </div>
        </div>
        `
    })
}
