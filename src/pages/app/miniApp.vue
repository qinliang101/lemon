<template>
    <Header title="小程序开发"></Header>
    <div class="app_content">
        <div class="app_wrap" v-for="item in config_app.MINIAPP_LIST" :key="item.key">
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
        <CreateAppEnter to="#/app/create" label="关联小程序"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import config_app from '../../config/app'

export default defineComponent({
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
})
</script>