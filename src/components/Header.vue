<template>
    <div class="content_header">
        <div>{{title}}</div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    props: ['title']
}
</script>

<style scoped>
.content_header {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    border-bottom: 1px solid #dce1e6;
}
</style>