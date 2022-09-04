<template>
    <nav class="nav">
        <div class="nav_head">
            <div class="nav_head_wrap">
                <div class="nav_head_left">
                    <span>
                        <img class="nav_head_icon" src="@/icons/wework.svg">
                        <span class="nav_head_wework">{{$t('qywx')}}</span>
                    </span>
                    <span class="nav_head_left_self">{{$t('provider_back_sys')}}</span>
                </div>
                <div class="nav_head_right">
                    <a class="nav_head_right_item" target="_blank" href="https://work.weixin.qq.com/wework_admin/frame">{{$t('corp_back_sys')}}</a>
                    <a class="nav_head_right_item" target="_blank" href="https://developer.work.weixin.qq.com/document">{{$t('developer_doc')}}</a>
                    <a class="nav_head_right_item" target="_blank" href="https://developer.work.weixin.qq.com/community/question">{{$t('developer_community')}}</a>
                    <el-dropdown @command="changeLang">
                        <a class="nav_head_lang">{{$t('language')}}</a>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="cn">中文</el-dropdown-item>
                                <el-dropdown-item command="en">English</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <a class="nav_head_right_item">{{$t('sign_out')}}</a>
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
        }
    },
    computed: {
        config() {
            return [
                {
                    key: '1',
                    name: this.$t('home'),
                    to: '/home'
                },
                {
                    key: '2',
                    name: this.$t('app_manage'),
                    to: '/app'
                },
                {
                    key: '3',
                    name: this.$t('plan_manage'),
                    to: '/promotion'
                },
                {
                    key: '4',
                    name: this.$t('customer_manage'),
                    to: '/customer'
                },
                {
                    key: '5',
                    name: this.$t('provider_info'),
                    to: '/profile'
                },
            ]
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
        changeLang(lang: string) {
            this.$i18n.locale = lang
            localStorage.setItem('lang', lang)
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
.nav_head_lang {
    line-height: 32px;
}
.nav_head_lang::after {
    margin: 0 10px;
    content: '';
    width: 1px;
    height: 24px;
    border-left: 1px solid #8298b4;
}
.nav_head_right a{
    color: #fff;
    font-size: 12px;
}
.nav_head_right a:hover {
    text-decoration: underline;
    cursor: pointer;
}
.nav_head_right_item:not(:last-child)::after {
    margin: 0 10px;
    content: '';
    width: 1px;
    height: 24px;
    border-left: 1px solid #8298b4;
}
.lemon_drop_text {
    color: #fff;
}
.lemon_drop {
    font-size: 13px;
    min-width: 100px;
    z-index: 99999;
    position: absolute;
    top: 34px;
    right: 20px;
    display: flex;
    flex-direction: column;
    color: #000;
    box-shadow: 0 0 1px 0 rgb(0 0 0 / 30%), 0 1px 4px 0 rgb(0 0 0 / 20%);
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
    background: #fff;
    font-weight: normal;
    > span {
        padding: 0 6px;
    }
    > span:hover {
        color: #335883;
        background-color: #e9eaeb;
    }
}
</style>