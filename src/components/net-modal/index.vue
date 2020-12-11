<template>
    <div
            class="net-modal"
            v-show="isShow"
            :style="{
                width: modalWidth + 'px',
                height: modalHeight + 'px'
            }">
        <div class="net-modal-header">
            <a class="net-modal-header-close" @click="onClose" title="关闭窗体"><i class="iconfont icon-close"></i></a>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    // import { ref } from 'vue'
    export default {
        name: "net-modal",
        props: {
            isShow: {
                type: Boolean,
                default: false,
            },
            modalWidth: {
                type: Number,
                default: 500,
            },
            modalHeight: Number
        },
        setup(props, { emit }) {
            const onClose = () => {
                // this.isShow = false;
                emit('onclose', false);
            }
            return { onClose }
        }
    }
</script>

<style scoped lang="sass">
.net-modal
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    box-shadow: 0 0 3px #999
    border-radius: 5px
    border: .5px solid #cccccc
    padding: 10px
    transition: opacity .28s ease-in-out
    &.opa1
        opacity: 1
    &.opa0
        opacity: 0
    .net-modal-header
        text-align: right
        .net-modal-header-close
            padding: 7px
            & > i
                font-size: 20px
                color: #000
                font-weight: bold
</style>