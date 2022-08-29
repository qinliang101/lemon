import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            corpInfo: {}
        }
    },
    mutations: {
        setCorpInfo (state, corpInfo) {
            state.corpInfo = corpInfo
        }
    },

})  

export default store