<template>
    <nav class="nav">
        <van-tabs class="nav_tabs" v-model:active="active" @click-tab="onClickTab()">
            <van-tab v-for="item in config" :key="item.key" :title="item.name" :name="item.key"></van-tab>
        </van-tabs>
    </nav>
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
export default {
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
                    key: '4',
                    name: '方案管理',
                    to: '/promotion'
                },
                {
                    key: '5',
                    name: '客户管理',
                    to: '/customer'
                },
                {
                    key: '6',
                    name: '服务商信息',
                    to: '/profile'
                },
            ],
        }
    },

    created() {
        const cur_url = '/' + this.$route.path.split('/')[1]
        const cur_tab = this.config.find(item => item.to === cur_url)
        this.active = cur_tab.key
    },

    methods: {
        onClickTab ():void {
            const item = this.config.find(item => item.key === this.active)
            this.$router.push(item.to)
        }
    }
}
</script>