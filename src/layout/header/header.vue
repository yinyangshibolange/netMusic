<template>
    <div class="net-header clearfix">
        <div class="float-left header-ico">
            <img src="public/format.ico"/>
        </div>
        <div class="float-left margin-left-xs header-title">
            <span>网易云音乐</span>
        </div>
        <div class="float-left page-controller clearfix">
            <a><i class="iconfont icon-arrow-left-bold"></i></a>
            <a><i class="iconfont icon-arrow-right-bold"></i></a>
        </div>
        <div class="float-left header-searcher">
            <div class="searcher">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜索" />
            </div>
        </div>
        <div class="clearfix float-right">
            <div class="float-left avatar">

            </div>
            <div class="float-left username">
                <login-page></login-page>
            </div>
            <div class="float-left vip">
                开通vip
            </div>
            <div class="float-left setting">
                <i class="iconfont icon-setting"></i>
            </div>
            <div class="float-left skin">
                <i class="iconfont icon-skin"></i>
            </div>
            <div class="float-left message">
                <i class="iconfont icon-email"></i>
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
                    color: #ccc
                    font-size: 10px
                    line-height: 16px
                &:focus
                    outline: none
</style>