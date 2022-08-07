<template>
    <nav class="nav">
        <span class="nav_item" v-for="item in config" :key="item.key">
            <router-link :to="item.to">{{item.name}}</router-link>
        </span>
    </nav>
    <main class="main">
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
export default {
    data() {
        return {
            config: [
                {
                    key: 1,
                    name: '首页',
                    to: '/home'
                },
                {
                    key: 2,
                    name: '应用管理',
                    to: '/app/web'
                },
                {
                    key: 4,
                    name: '方案管理',
                    to: '/promotion/manage'
                },
                {
                    key: 5,
                    name: '客户管理',
                    to: '/customer/data'
                },
                {
                    key: 6,
                    name: '服务商信息',
                    to: '/profile/basicInfo'
                },
            ]
        }
    }
}
</script>