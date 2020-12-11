<template>
    <div class="nav-user">
        <a class="nav-avatar-nolog-icon">
            <i class="iconfont icon-user"></i>
        </a>
        <a v-if="false">
            <img />
        </a>
        <a class="nickname" @click="isLoginShow = true">
            <small>未登录</small>
            <i class="iconfont icon-arrow-down-filling"></i>
        </a>
        <net-modal :modalWidth="420" :isShow="isLoginShow" @onclose="isLoginShow = false">
            <div class="login phone-login" v-show="mode === 'phone'">
                <div class="login-title">
                    手 机 登 录
                </div>
                <form class="login-form" @submit="login">
                    <div class="clearfix">
                        <div class="form-label float-left">
                            <label for="net_phone">
                                <i class="iconfont icon-mobile-phone"></i> 手机
                            </label>
                        </div>


                        <input class="float-left" type="phone" id="net_phone" />
                    </div>
                    <div class="clearfix">
                        <div class="form-label float-left">
                            <label for="net_password0">
                                <i class="iconfont icon-lock"></i> 密码
                            </label>
                        </div>

                        <input class="float-left" type="password" id="net_password0" />
                    </div>

                    <button class="margin-top" type="submit">登录</button>
                </form>
                <div class="padding login-ico-nav">
                    <a @click="mode = 'email'" title="邮箱登录"><i class="iconfont icon-netease"></i></a>
                </div>

            </div>
            <div class="login email-login" v-show="mode === 'email'">

                <div class="login-title">
                    邮 箱 登 录
                </div>
                <form class="login-form" @submit="emailLogin">
                    <div class="clearfix">
                        <div class="form-label float-left">
                            <label for="net_email">
                                <i class="iconfont icon-email"></i> 邮箱</label>
                        </div>

                        <input  class="float-left" type="email" id="net_email" v-model="email" />
                    </div>
                    <div class="clearfix">
                        <div class="form-label float-left">
                            <label for="net_password1"><i class="iconfont icon-lock"></i> 密码</label>
                        </div>
                        <input class="float-left" type="password" id="net_password1" v-model="password1" />
                    </div>

                    <button class="margin-top" type="submit">登录</button>


                </form>

                <div style="padding: 10px;">
                    <a @click="mode = 'phone'"><small><i class="iconfont icon-arrow-left-bold"></i>返回手机方式登录</small></a>
                </div>
            </div>
        </net-modal>
    </div>

</template>

<script>
    import { ref } from 'vue';
    import * as apis from '@/api'
    export default {
        name: "index",
        setup() {
            const mode = ref('phone')

            const email = ref('')
            const password1 = ref('')


            const isLoginShow = ref(false)

            const emailLogin = async () => {
                const resdata = await apis.emailLogin(email, password1);
                console.log(resdata)
            }
            return { isLoginShow, mode, emailLogin, email, password1 }
        }
    }
</script>

<style scoped lang="sass">
.nav-user
    & > a.nickname
        color: #e2e2e2
        & > i
            font-size: 10px
    .nav-avatar-nolog-icon
        color: #fff
        border-radius: 30px
        margin-right: 4px
.login
    padding: 30px
    &.phone-login
        .login-ico-nav
            & > a
                display: block
                padding: 6px
                border: 1px solid #cccccc
                width: 32px
                height: 32px
                border-radius: 32px
                position: relative
                & > i
                    font-size: 16px
                    position: absolute
                    top: 3px
                    left: 7.5px
                &:hover
                    background: #EC4141
                    color: #fffdef
    .login-title
        font-size: 20px
        font-weight: bold
        padding: 10px 40px 40px
        text-align: center
    .login-form
        padding: 0 10px
        & > div
            padding: 8px
            border: 1px solid #cccccc
            & > .form-label
                min-width: 60px
                border-right: 1px solid #ccc
        input
            margin-left: 8px
            display: block
            border: none
            &:focus
                outline: none
        button
            display: block
            background: #1890ff
            border-radius: 5px
            border: 0.5px solid #f2f2f2
            width: 100%
            height: 36px
            line-height: 36px
            color: #fffdef
            cursor: pointer
            &:hover
                background: #1999ff

</style>