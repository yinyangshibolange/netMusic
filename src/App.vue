<template>
    <div class="app">
        <div class="app-header">
            <net-header></net-header>
        </div>
        <div class="app-center clearfix">
            <div class="app-center-left float-left">
                <net-nav></net-nav>
            </div>
            <div class="app-center-right float-left">
                <router-view></router-view>
            </div>
        </div>
        <div class="app-footer">
            <net-footer></net-footer>
        </div>
    </div>
</template>

<script>
import { reactive,  toRefs, onMounted } from 'vue';
import netHeader from "./layout/header/header";
import netFooter from "./layout/footer/footer";
import netNav from "./layout/left-nav/left-nav"

export default {
    components: {
        netHeader, netFooter, netNav
    },
  setup() {
    onMounted(() => {
        // console.log('App.vue onMounted;!!')
        // let i = 0
        // setInterval(() => {
        //     console.log(i++)
        // }, 1000)
    })
    const react = reactive({
      selectedKeys: ['1'],
    })

    return { ...toRefs(react),  }
  }
};
</script>

<style scoped lang="sass">

.app
    display: flex
    height: 100vh
    flex-direction: column
    .app-header
        height: 50px
    .app-center
        /*height: calc(100vh - 130px)*/
        flex: 1
        .app-center-left
            width: 200px
            height: 100%
            box-sizing: border-box
            border-right: 1px solid #f2f2f2
        .app-center-right
            width: calc(100% - 200px)
            height: 100%
    .app-footer
        height: 80px
        background: #F6F6F8
</style>
