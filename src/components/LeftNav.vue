<template>
    <div class="left_nav">
        <div class="left_nav_wrap" v-for="item_top in config[typeMap[type]]" :key="item_top.key">
            <span class="left_nav_title">{{item_top.title}}</span>
            <router-link :to="item.to" @click="active = item.key" :class="['left_nav_item', {'left_nav_item_active': active === item.key}]" v-for="item in item_top.list" :key="item.key">
                <span>{{item.name}}</span>
            </router-link >
        </div>
    </div>
    <div class="main_content">
        <router-view ></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import config from '../config/index'

export default defineComponent({
    props: {
        type: String
    },
    data() {
        return {
            active: '11',
            config: config,
            typeMap: {
                app: 'APP_LIST_NAV',
                customer: 'CUSTOMER_LIST_NAV',
                profile: 'PROFILE_LIST_NAV',
                promotion: 'PROMOTION_LIST_NAV',
            }
        }
    },

    created() {
        this.config[this.typeMap[this.type]].forEach(b_item => {
            const cur_tab = b_item.list.find(item => item.to === this.$route.path)
            if (cur_tab) {
                this.active = cur_tab.key
                return
            }
        })
    },
})
</script>