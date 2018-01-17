<template>
    <footer class="app-footer">
        <router-link to="/Page1">商品1</router-link>
        <router-link to="/ratings">评论</router-link>
        <router-link to="/seller">商家</router-link>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .app-footer {
        @include display-flex();
        @include justify-content(space-between);
        @include align-items(center);
        width: 100%;
        height: 2.2rem;
        a {
            display: inline-block;
            flex: 1;
            text-align: center;
        }
    }
</style>