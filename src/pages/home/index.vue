<template>
    <div class="home_container">
        <div class="home_left_container">
            <div class="home_greeting">上午好，亮</div>
            <div>
                <div class="home_message_title">你有1613条未读消息</div>
                <ul class="home_message_container">
                    <li v-for="(item, index) in message_list" :key="index" class="home_message_item">
                        <a target="_Blank" :href="item.url" class="home_message_item_link">
                            <span>{{item.title}}</span>
                            <span class="home_message_item_link_icon">»</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="home_right_container">
            <div class="home_right_info">
                <img class="home_right_info_img" src="https://wework.qpic.cn/wwpic/280615_rv5v5Xx3Qd-VDra_1655120362/" alt="">
                <a class="home_right_info_name" href="#/profile">深圳腾讯控股有限公司</a>
                <div class="home_right_info_sub">腾讯科技</div>
            </div>
            <div class="home_right_document">
                <ul>
                    <li class="home_right_document_item" v-for="(item, index) in document_list" :key="index">
                        <a target="_Blank" :href="item.url">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            message_list: [
                {
                    title: '关于2.6.0～2.6.150000版本Windows客户端的缺陷说明',
                    url: 'https://wecrm.gov.weixin.qq.com/wecrm/document/renderDoc?doc_id=77&cid=39044&isMobile=0'
                },
                {
                    title: '企业微信私有化培训新角色 「项目经理」培训开放报名',
                    url: 'https://wecrm.gov.weixin.qq.com/wecrm/document/renderDoc?doc_id=76&cid=31988&isMobile=0'
                },
                {
                    title: '企业微信私有化版本规划和支持周期策略更新',
                    url: 'https://wecrm.gov.weixin.qq.com/wecrm/document/renderDoc?doc_id=73&cid=28315&isMobile=0'
                },
            ],
            document_list: [
                {
                    title: '企业微信微盘教育版本政策',
                    url: 'https://open.work.weixin.qq.com/wwopen/channel/policy?uuid=7nSvzJeb4jG9cHkV5p2KKH',
                },
                {
                    title: '腾讯企业微信教育行业“千城万校”计划',
                    url: 'https://open.work.weixin.qq.com/wwopen/channel/policy?uuid=uoLPTCUVGo4AsbRAKKcFD3',
                },
                {
                    title: '服务商接口收费模式已正式上线',
                    url: 'https://open.work.weixin.qq.com/wwopen/policyDocument?uuid=gtbADGBJcBBRSKuC7kA8kL',
                },
            ]
        }
    },
})
</script>

<style scoped lang="scss">
.home_container {
    display: flex;
    width: 100%;
}
.home_left_container {
    padding-top: 30px;
    padding-left: 42px;
    padding-bottom: 50px;
    width: 697px;
    border-right: 1px dotted #e4e6e9;
}
.home_greeting {
    font-size: 14px;
    margin-bottom: 12px;
}
.home_message_title {
    color: #787878;
    font-size: 12px;
    line-height: 32px;
}
.home_message_container {
    font-size: 13px;
    padding-right: 42px;
}
.home_message_item {
    line-height: 43px;
    border-bottom: 1px solid #e4e6e9;
}
.home_message_item_link {
    color: #000;
}
.home_message_item:hover {
    background-color: #f5f5f5;
}
.home_right_container {
    padding-top: 30px;
    flex: 1;
    padding: 30px 26px;
}
.home_message_item_link_icon {
    float: right;
    color: #b4b4b4;
    margin-right: 10px;
    font-size: 18px;
}
.home_right_info {
    text-align: center;
}
.home_right_info_img {
    width: 234px;
    height: 60px;
    margin-bottom: 5px;
}
.home_right_bottom {
    margin-top: 20px;
    border-top: 1px solid #e4e6e9;
}
.home_right_info_name {
    display: block;
}
.home_right_info_name:hover {
    text-decoration: underline;
    color: #0c4c7f;
}
.home_right_info_sub {
    color: #787878;
    margin-top: 10px;
    font-size: 14px;
}
.home_right_document {
    margin-top: 20px;
    border-top: 1px solid #e4e6e9;
}
.home_right_document_item {
    margin-top: 16px;
    a {
        color: #787878;
    };
    a:hover {
        text-decoration: underline;
    }
}
</style>