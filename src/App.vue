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
            const corpInfo = await this.$http.get('/getcorpinfo')
            this.$store.commit('setCorpInfo', corpInfo)
            console.log(this.$store.state.corpInfo.corp_full_name)
        }
    }
})
</script>