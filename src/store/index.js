import { createStore } from 'vuex'
// import * as apis from '../api'
// import router from '../router'

// Vue.use(Vuex)

export default createStore({
    state: {
        user: null,
        isLoginShow: false,
    },
    mutations: {
        SHOW_LOGIN(state) {
            state.isLoginShow = true;
        },
        HIDE_LOGIN(state) {
            state.isLoginShow = false;
        }
    },
    actions: {

    }
})

