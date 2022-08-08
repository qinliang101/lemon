<template>
    <div class="left_nav">
        <div class="left_nav_wrap" v-for="item_top in config[typeMap[type]]" :key="item_top.key">
            <span class="left_nav_title">{{item_top.title}}</span>
            <router-link :to="item.to" class="left_nav_item" v-for="item in item_top.list" :key="item.key">
                <span class="left_nav_item_link">{{item.name}}</span>
            </router-link >
        </div>
    </div>
    <div class="main_content">
        <router-view ></router-view>
    </div>
</template>

<script lang="ts">
import config from '../config/index'
export default {
    props: {
        type: String
    },
    data() {
        return {
            config: config,
            typeMap: {
                app: 'APP_LIST_NAV',
                customer: 'CUSTOMER_LIST_NAV',
                profile: 'PROFILE_LIST_NAV',
                promotion: 'PROMOTION_LIST_NAV',
            }
        }
    },
}
</script>