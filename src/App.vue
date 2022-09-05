<template>
    <router-view></router-view>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    created() {
        this.init()
    },
    methods: {
        async init() {
            const user = await this.$http.get('/user/getUserInfo?uid=1')
            // const corpInfo = await this.$http.get('/getCorpInfo?corp_id=12345')
            // this.$store.commit('setCorpInfo', corpInfo)
            // console.log(this.$store.state.corpInfo.corp_full_name)
            // const body = await this.$http.post('/getUserInfo', {
            //     id: 1,
            //     source: 'web'
            // })
        }
    }
})
</script>