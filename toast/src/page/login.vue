<template>
    <app-layout showFooter="fasle">
        <div slot="header" class="header">
            <div class="title">汇报登录</div>
        </div>
        <div class="login-form">
            <div class="login-inputs">
                <span><input type="text" placeholder="User:" name="username" v-model="username"></span>
                <span><input type="password" placeholder="Password:" name="password" v-model="password"></span>
                <button type="button" class="button btnBlock-blue" @click="login">登录</button>
                <div>{{loginTip}}</div>
            </div>
        </div>
    </app-layout>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            username: '',
            password: '',
            loginTip: ''
        }
    },
    methods: {
        async login() {
            if(this.username === '' || this.password === ''){
                this.loginTip = '请正确填写用户名和密码';
            }
        }
    }
} 
</script>

<style lang="scss">
    .login-form {
        width: 100%;
        height: 100%;
        background: _palette(login-bg);
        text-align: center;
        span {
            display: block;
            padding: 8px;
            border-bottom: solid 2px #34455d; 
        }
        input {
            width: 90%;
            height: 1.6rem;
            font-size: 16px;
            color: #fff;
            background: transparent;
            border: none;
            &::-webkit-input-placeholder {
                color: #fff;
            }
            &:-moz-placeholder {
                color: #fff;
            }
            &::-moz-placeholder {
                color: #fff;
            }
            &:-ms-input-placeholder {
                color: #fff;
            }
        }
        button {
            margin-top: 1.5rem;
            width: 100%;
        }
    }
    .login-inputs {
        margin: 0 auto;
        padding-top: 2rem;
        width: 90%;
    }
</style>