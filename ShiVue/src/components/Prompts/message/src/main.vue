<template>
    <div class="shi-prompt" v-if="isShow">
        <div class="prompt-bg"></div>
        <div class="container">
            <div class="message">
                <span class="fa-stack fa-lg icon">
                  <i class="fa fa-circle-thin fa-stack-2x"></i>
                  <i class="fa fa-check fa-stack-1x" v-if="type==='success'"></i>
                  <i class="fa fa-close fa-stack-1x" v-if="type==='error'"></i>
                </span>
                <span style="font-size: 14px">{{message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "shi-message",
        date() {
            return {
                type: '',
                duration: 3000,
                isShow: true
            };
        },
        computed: {
            message: function(){
                let _this = this
                switch(this.type){
                    case 'success':
                        return _this.msg = '操作成功';
                        break;
                    case 'error':
                        return _this.msg = '操作失败';
                        break;
                    default: 
                        return _this.msg = '';
                        break;
                };
            }
        },
        mounted() {
            this.close();
        },
        methods: {
            close() {
                const _this = this;
                setTimeout(function(){
                    _this.isShow = false;
                }, this.duration);
            }
        }
    } 
</script>
<style lang="scss" scoped>
    .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: .5rem 1rem .7rem 1rem;
        align-items: center;
        border-radius: 10px;
        background: #fff;
    }
    .icon {
        padding: 5px;
        color: _palette(loading);
    }
</style>