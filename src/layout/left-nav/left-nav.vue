<template>
    <div class="left-nav padding-xs">
        <div class="nav-li">
            <a>发现音乐</a>
        </div>
        <div class="nav-li">
            <a>视频</a>
        </div>
        <div class="nav-li">
            <a>朋友</a>
        </div>
        <div class="nav-li">
            <a>直播</a>
        </div>
        <div class="nav-li">
            <a>私人FM</a>
        </div>

        <div class="nav-li-title">
            <small>我的音乐</small>
        </div>
        <div class="nav-li">
            <a><i class="iconfont icon-music"></i>本地音乐</a>
        </div>
        <div class="nav-li">
            <a><i class="iconfont icon-direction-down-circle"></i>下载管理</a>
        </div>
        <div class="nav-li-title">
            <small>创建的歌单</small>
        </div>
        <div class="nav-li">
            <a><i class="iconfont icon-fabulous"></i>我喜欢的音乐</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "left-nav.vue"
    }
</script>

<style scoped lang="sass">
.left-nav
    a
        & > i
            margin-right: 10px
    .nav-li
        & > a
            display: block
            padding: 7px
            color: #000
            &:hover
                background: #F6F6F7
                color: #000
                font-weight: bold
            &.active
                background: #F6F6F7
                color: #000
                font-weight: bold
    .nav-li-title
        padding: 5px
        color: #999
</style>