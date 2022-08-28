<template>
    <nav class="nav">
        <div class="nav_head">
            <div class="nav_head_wrap">
                <div class="nav_head_left">
                    <span>
                        <img class="nav_head_icon" src="@/icons/wework.svg">
                        <span class="nav_head_wework">企业微信</span>
                    </span>
                    <span class="nav_head_left_self">服务商后台</span>
                </div>
                <div class="nav_head_right">
                    <a target="_blank" href="https://work.weixin.qq.com/wework_admin/frame">企业管理后台</a>
                    <a target="_blank" href="https://developer.work.weixin.qq.com/document">开发者文档</a>
                    <a target="_blank" href="https://open.work.weixin.qq.com/wwopen/developer#/single/service_require">平台服务要求</a>
                    <a target="_blank" href="https://developer.work.weixin.qq.com/community/question">平台者社区</a>
                    <a>退出</a>
                </div>
            </div>
        </div>
        <van-tabs class="nav_tabs" v-model:active="active" @click-tab="onClickTab()">
            <van-tab v-for="item in config" :key="item.key" :title="item.name" :name="item.key"></van-tab>
        </van-tabs>
    </nav>
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            active: '1',
            config: [
                {
                    key: '1',
                    name: '首页',
                    to: '/home'
                },
                {
                    key: '2',
                    name: '应用管理',
                    to: '/app'
                },
                {
                    key: '3',
                    name: '方案管理',
                    to: '/promotion'
                },
                {
                    key: '4',
                    name: '客户管理',
                    to: '/customer'
                },
                {
                    key: '5',
                    name: '服务商信息',
                    to: '/profile'
                },
            ],
        }
    },

    created() {
        const cur_url = '/' + this.$route.path.split('/')[1]
        const cur_tab = this.config.find(item => item.to === cur_url)
        this.active = (cur_tab && cur_tab.key) || '1'
    },

    methods: {
        onClickTab() {
            const item = this.config.find(item => item.key === this.active)
            this.$router.push((item && item.to) || '/')
        },
    },

    beforeRouteUpdate(to, from, next) {
        const cur_url = '/' + to.path.split('/')[1]
        const cur_tab = this.config.find(item => item.to === cur_url)
        this.active = (cur_tab && cur_tab.key) || '1'
        next()
    }
})
</script>
<style scoped lang="scss">
.nav_head {
    background-color: #335883;
}
.nav_head_wrap {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    color: #fff;
    font-weight: 300;
    font-size: 12px;
    justify-content: space-between;
    height: 32px;
    line-height: 32px;
}
.nav_head_left {
    color: #d7dce5;
    font-size: 15px;
    font-weight: 400;
}
.nav_head_left_self::before {
    margin: 0 10px;
    content: '';
    width: 1px;
    border-left: 1px solid #d7dce5;
}
.nav_head_icon {
    width: 26px;
    height: 28px;
    vertical-align: middle;
    margin-right: 4px;
}
.nav_head_right > a {
    color: #fff;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}
.nav_head_right > a:not(:last-child)::after {
    margin: 0 10px;
    content: '';
    width: 1px;
    height: 24px;
    border-left: 1px solid #8298b4;
}
</style>