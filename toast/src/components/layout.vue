<template>
    <div class="container">
        <header class="app-header"><slot name="header"></slot></header>  
        <main><slot></slot></main>
        <app-footer v-if="showFooter==='true'"></app-footer>
    </div>
</template>

<script>
    // 导入组件
    import AppFooter from '../components/footer.vue'
    export default {
        props: ['showFooter'],
        components: {
            AppFooter
        }
    }
</script>

<style lang="scss">
    html,body,header,input {
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 20px;
        font-family: _font(family-ah-ss);
    }
    html, body, #app, .container{
        width: 100%;
        height: 100%;
    }
    .button {
        display: inline-block;
        padding: 10px 25px 10px 25px;
        border: none;
        font-size: 1rem;
        border-radius: 3px;
        cursor: pointer;
    }
    .btnLine-blue {
        background: transparent;
        border: solid 1px #39dbf6;
        color: #39dbf6;
    }
    .btnBlock-blue {
        background: #39dbf6;
        color: #fff;
    }
    .inputSty {
        margin: 5px 0;
        padding: 3px;
        height: 1.6rem;
        border: 1px solid _palette(input-border);
        color: #888;
        outline: 0 none;
        font-size: 14px;
        box-shadow: inset 0px 1px 4px #ECECEC;
        -moz-box-shadow: inset 0px 1px 4px #ECECEC;
        -webkit-box-shadow: inset 0px 1px 4px #ECECEC; 
    }
    .container {
        @include display-flex();
        @include flex-direction(column);
    }
    .app-header {
        top: 0;
        width: 100%;
        height: 2.2rem;
        background: _palette(nav-bg);
        color: #fff;
        .header {
            position:relative;
            @include display-flex();
            @include align-items(center);
            width: 100%;
            height: 100%;
        }
        .title {
            position: absolute;
            width: 100%;
            text-align: center;
            letter-spacing: 2px;
        }
        .leftBtn {
            position: absolute;
        }
        .rightBtn {
            position: absolute;
        }
    }
    main {
        flex:1;
        width: 100%;
    }
</style>