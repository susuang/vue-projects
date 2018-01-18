<template>
    <header class="header-item">
        <div class="leftBtn"></div>
        <div class="title">{{title}}</div>
        <div class="rightBtn"></div>
    </header>
</template>

<script>
    export default {
        props: ['title'],
    }
</script>