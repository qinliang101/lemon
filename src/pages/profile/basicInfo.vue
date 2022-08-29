<template>
    <NormalHeader title="基本信息"></NormalHeader>
    <el-form :model="form" label-width="150px" label-position="left" class="page_main_content">
        <el-form-item label="企业logo">
            <img class="home_right_info_img" src="https://wework.qpic.cn/wwpic/280615_rv5v5Xx3Qd-VDra_1655120362/" alt="">
        </el-form-item>
        <el-form-item label="品牌名称">
            <span>腾讯股份有限公司</span>
        </el-form-item>
        <el-form-item label="企业全称">
            <span>腾讯科技</span>
        </el-form-item>
        <el-form-item label="经营范围">
            <span>信息技术/互联网</span>
        </el-form-item>
        <el-form-item label="注册地址">
            <span>广东省深圳市</span>
        </el-form-item>
        <el-form-item label="工商执照注册号">
            <span>XD34567890</span>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
        data() {
            return {
                form: {}
            }
        }
})
</script>

<style scoped>
.home_right_info_img {
    width: 234px;
    height: 60px;
}
</style>