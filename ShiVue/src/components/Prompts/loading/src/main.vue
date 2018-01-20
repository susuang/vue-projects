<template>
    <div class="shi-prompt">
        <div class="prompt-bg"></div>
        <div class="container"><span class="loading"><i class="fa fa-spinner fa-pulse"></i></span></div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    } 
</script>

<style lang="scss" scoped>
    .loading {
        display: inline-block;
        width: 4rem;
        height: 4rem;
        text-align: center;
        line-height: 4rem;
        border-radius: 10px;
        font-size: 2.5rem;
        color: _palette(loading);
        background: #fff;
    }
</style>

<style lang="scss">
    .shi-prompt {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        .prompt-bg {
            position: absolute;
            width: 100%;
            height: 100%;
            background: _palette(popup-bg);
            z-index: 1001;
        }
        .container {
            display: -webkit-box;
            -webkit-box-orient: horizontal;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            z-index: 9999;
        }
    }
</style>