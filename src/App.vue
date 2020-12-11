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

<style>

/*#components-layout-demo-fixed .logo {*/
/*  width: 120px;*/
/*  height: 31px;*/
/*  background: rgba(255, 255, 255, 0.2);*/
/*  margin: 16px 24px 16px 0;*/
/*  float: left;*/
/*}*/

</style>
