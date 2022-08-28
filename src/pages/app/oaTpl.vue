<template>
    <NormalHeader title="审批模板配置"></NormalHeader>
    <div class="app_content">
        <div class="app_item_wrap">
            <router-link class="app_item_box" v-for="app in config_app.OAAPP_LIST" to="/app/web/detail" :key="app.key">
                <div class="app_item">
                    <img class="app_img" :src="app.img_uri">
                    <span>{{app.name}}</span>
                </div>
            </router-link>
        </div>
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