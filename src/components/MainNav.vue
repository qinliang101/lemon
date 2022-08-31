<template>
    <div class="main_nav">
        <div class="main_nav_item_wrap" v-for="item_top in navList" :key="item_top.key">
            <span class="main_nav_title">{{item_top.title}}</span>
            <router-link :to="item.to" @click="active = item.key" :class="['main_nav_item', {'main_nav_item_active': active === item.key}]" v-for="item in item_top.list" :key="item.key">
                <span>{{item.name}}</span>
            </router-link >
        </div>
    </div>
    <div class="main_nav_content">
        <router-view ></router-view>
    </div>
</template>

<script lange="ts">
import { defineComponent } from 'vue'
import config from '../config/index'

export default defineComponent({
    props: {
        navType: {
            type: String,
            default: 'app',
        }
    },

    data() {
        return {
            active: '11',
            config: config,
        }
    },

    computed: {
        navList() {
            const typeMap = {
                app: 'APP_LIST_NAV',
                customer: 'CUSTOMER_LIST_NAV',
                profile: 'PROFILE_LIST_NAV',
                promotion: 'PROMOTION_LIST_NAV',
            }
            return this.config[typeMap[this.navType]]
        },
    },

    created() {
        this.navList.forEach(b_item => {
            const cur_tab = b_item.list.find(item => item.to === this.$route.path)
            if (cur_tab) {
                this.active = cur_tab.key
                return
            }
        })
    },
})
</script>