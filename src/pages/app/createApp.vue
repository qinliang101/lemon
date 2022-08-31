<template>
    <BackHeader title="创建应用"></BackHeader>
    <div class="main_content_small">
        <el-form class="main_content_small_center">
            <el-form-item label="应用类型">
                <el-select v-model="app_type" style="width:300px" placeholder="Select" size="">
                    <el-option
                    v-for="item in app_type_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="应用名称">
                <el-input v-model="app_name" style="width:300px" placeholder="请输入2-10个字"></el-input>
            </el-form-item>
            <el-form-item label="应用标语">
                <el-input v-model="app_tips" style="width:300px" placeholder="填写应用的宣传标语，要求2-10个字"></el-input>
            </el-form-item>
            <el-form-item label="应用Logo">
                <el-input v-model="app_logo" style="width:300px" placeholder="填写应用Logo的URL"></el-input>
            </el-form-item>
            <el-form-item label="应用简介">
                <el-input v-model="app_info" type="textarea" style="width:300px" placeholder="填写应用功能和使用场景介绍，要求4-200个字"></el-input>
            </el-form-item>
            <div>
                <el-button type="primary" @click="createApp">提交创建应用</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    
    export default defineComponent({
        data() {
            return {
                app_type: 1,
                app_name: '',
                app_logo: '',
                app_tips: '',
                app_info: '',
                app_type_options: [
                    {
                        label: '普通应用',
                        value: 1,
                    },
                    {
                        label: '通讯录应用',
                        value: 2,
                    },
                    {
                        label: '行业应用',
                        value: 3,
                    },
                    {
                        label: '独立APP应用',
                        value: 4,
                    },
                ], 
            }
        },
        methods: {
            async createApp() {
                await this.$http.post('/app/createWebApp', {
                    app_type: 1,
                    app_name: this.app_name,
                    app_logo: this.app_logo,
                    app_tips: this.app_tips,
                    app_info: this.app_info,
                })
            }
        }
    })
    </script>