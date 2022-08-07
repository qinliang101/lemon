<template>
    <div class="content_header">
        <span class="header_left"><button>返回</button></span>
        <span class="header_title">{{title}}</span>
        <span class="header_right"></span>
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
    width: 100%;
    font-size: 18px;
    height: 50px;
    border-bottom: 1px solid #dce1e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9fafc;
    padding: 0px 10px;
}

.header_left {
    width: 33%;
}
.header_title {
    width: 30%;
    text-align: center;
}
.header_right {
    width: 33%;
    text-align: right;
}
</style>