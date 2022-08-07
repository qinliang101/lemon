<template>
    <NormalHeader title="网页应用开发"></NormalHeader>
    <div class="app_content">
        <div class="app_wrap" v-for="item in config_app.WEBAPP_LIST" :key="item.key">
            <span class="app_title">{{item.title}}</span>
            <div class="app_item_wrap">
                <router-link class="app_item_box" v-for="app in item.list" to="/app/web/detail" :key="app.key">
                    <div class="app_item">
                        <img class="app_img" :src="app.img_uri">
                        <span>{{app.name}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import config_app from '@/config/app'
export default {
    data() {
        return {
            config_app: config_app, 
        }
    },
    methods: {
        toAppDetail(app: Object) {
            console.log(app)
        }
    }
}
</script>