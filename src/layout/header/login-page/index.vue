<template>
    <div>
        <a @click="isLoginShow = true">未登录</a>
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
            const email = ref('')
            const password1 = ref('')

            const mode = ref('email')
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
.login
    padding: 30px
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