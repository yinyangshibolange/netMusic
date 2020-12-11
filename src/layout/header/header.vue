<template>
    <div class="net-header flex justify-between align-center">
        <div class="flex align-center">
            <div class="header-ico">
                <img src="public/format.ico"/>
            </div>
            <div class="margin-left-xs header-title">
                <span>网易云音乐</span>
            </div>
            <div class="page-controller clearfix">
                <a><i class="iconfont icon-arrow-left-bold"></i></a>
                <a><i class="iconfont icon-arrow-right-bold"></i></a>
            </div>
            <div class="header-searcher">
                <div class="searcher">
                    <i class="iconfont icon-search"></i>
                    <input type="text" placeholder="搜索" />
                </div>
            </div>
        </div>

        <div class="header-right flex align-center justify-end">
            <div class="user">
                <login-page></login-page>
            </div>
            <div class="vip nav-text-white">
                <a class="nav-a"><small>开通VIP</small></a>
            </div>
            <div class="setting nav-text-white">
                <a class="nav-a"><i class="iconfont icon-setting"></i></a>
            </div>
            <div class="skin nav-text-white">
                <a class="nav-a"><i class="iconfont icon-skin"></i></a>
            </div>
            <div class="message nav-text-white">
                <a class="nav-a"><i class="iconfont icon-email"></i></a>
            </div>
        </div>

    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import loginPage from './login-page'
    export default {
        name: "header.vue",
        components: {
            loginPage
        },
        setup() {
            const isLoginShow = ref(false)
            onMounted(() => {

            })


            return { isLoginShow  }
        }
    }
</script>

<style scoped lang="sass">
.nav-text-white
    color: #e2e2e2
    a
        color: #e2e2e2
        &:hover
            color: #fff
.net-header
    background: #EC4141
    padding: 10px
    .header-ico
        background: #ffffff
        border-radius: 30px
        padding: 5px
        width: 30px
        height: 30px
        position: relative
        & > img
            position: absolute
            width: 20px
            height: 20px
            top: 5px
            left: 5px
    .header-title
        color: #fff
    .page-controller
        margin-left: 100px
        & > a
            display: inline-block
            cursor: pointer
            background: #E63F3F
            width: 26px
            height: 26px
            border-radius: 26px
            & > i
                font-size: 16px
                color: #ccc
                margin: 5px
    .header-searcher
        margin-left: 20px
        .searcher
            border-radius: 22px
            background: #E13E3E
            padding: 2px 5px
            & > i
                color: #fffdef
            input
                margin-left: 5px
                border: none
                background: transparent
                color: #fffdef
                &::placeholder
                    color: #E98E6E
                    font-size: 10px
                    line-height: 16px
                &:focus
                    outline: none
    .header-right
        a
            padding: 5px 10px
        .vip
            margin-left: 10px
</style>