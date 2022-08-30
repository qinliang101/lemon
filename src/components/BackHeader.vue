<template>
    <div class="content_header">
        <span class="header_left">
            <a class="lemon_back_btn" @click="$router.back()">
                <span class="back_font">«</span>返回
            </a>
        </span>
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

<style scoped lang="scss">
.content_header {
    width: 100%;
    font-size: 16px;
    height: 50px;
    border-bottom: 1px solid #dce1e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9fafc;
    padding: 0px 10px;
}

.lemon_back_btn {
    padding: 5px 8px;
    border: 1px solid #b4bec8;
    font-size: 12px;
    color: #646566;
    border-radius: 2px;
    .back_font {
        font-size: 16px;
        color: #646566;
        margin-right: 4px;
        font-weight: lighter;
        pointer-events: none;
    }
    &:hover {
        background-color: #e9eaeb;
        color: #646566;
    }
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