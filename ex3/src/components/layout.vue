<template>
    <div class="container">
        <header class="app-header"><slot name="header"></slot></header>  
        <main><slot></slot></main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // 导入组件
    import AppFooter from '../components/footer.vue'
    export default {
        components: {
            AppFooter
        }
    }
</script>

<style lang="scss">
    html,body,header {
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 20px;
        font-family: _font(family-ah-ss);
    }
    html, body, #app, .container {
        width: 100%;
        height: 100%;
    }
    .container {
        @include display-flex();
        @include flex-direction(column);
    }
    .app-header {
        top: 0;
        width: 100%;
        height: 2.2rem;
        background: _palette(nav-color);
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