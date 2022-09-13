import i18n from '../lang'
const config = {
    APP_LIST_NAV: [
        {
            key: '1',
            title: '标准应用开发',
            list: [
                {
                    key: '11',
                    name: '网页应用',
                    to: '/app/web'
                },
                {
                    key: '12',
                    name: '小程序',
                    to: '/app/mini'
                },
                {
                    key: '13',
                    name: '审批/汇报模板',
                    to: '/app/oa'
                },
            ]
        },
        {
            key: '2',
            title: '企业应用代开发',
            list: [
                {
                    key: '21',
                    name: '应用代开发',
                    to: '/app/undev'
                },
                {
                    key: '22',
                    name: '应用代开发上线',
                    to: '/app/undev'
                },
            ]
        },
        {
            key: '3',
            title: '应用推广',
            list: [
                {
                    key: '31',
                    name: '已上线的应用',
                    to: '/app/undev'
                },
                {
                    key: '32',
                    name: '推广二维码',
                    to: '/app/undev'
                },
                {
                    key: '33',
                    name: '应用代理',
                    to: '/app/undev'
                },
                {
                    key: '34',
                    name: '应用市场推荐',
                    to: '/app/undev'
                },
                {
                    key: '35',
                    name: '应用市场搜索',
                    to: '/app/undev'
                },
            ]
        },
        {
            key: '4',
            title: '应用套件',
            list: [
                {
                    key: '41',
                    name: '应用套件',
                    to: '/app/undev'
                },
                {
                    key: '42',
                    name: '应用套件上线',
                    to: '/app/undev'
                },
            ]
        },
        {
            key: '5',
            title: '应用费用',
            list: [
                {
                    key: '51',
                    name: '订单管理',
                    to: '/app/undev'
                },
                {
                    key: '52',
                    name: '发票管理',
                    to: '/app/undev'
                },
                {
                    key: '53',
                    name: '退款管理',
                    to: '/app/undev'
                },
                {
                    key: '54',
                    name: '优惠券管理',
                    to: '/app/undev'
                },
                {
                    key: '55',
                    name: '试用期管理',
                    to: '/app/undev'
                },
                {
                    key: '56',
                    name: '服务付费管理',
                    to: '/app/undev'
                },
            ]
        },
        {
            key: '6',
            title: '应用费用',
            list: [
                {
                    key: '51',
                    name: '订单管理',
                    to: '/app/undev'
                },
                {
                    key: '52',
                    name: '发票管理',
                    to: '/app/undev'
                },
                {
                    key: '53',
                    name: '退款管理',
                    to: '/app/undev'
                },
                {
                    key: '54',
                    name: '优惠券管理',
                    to: '/app/undev'
                },
                {
                    key: '55',
                    name: '试用期管理',
                    to: '/app/undev'
                },
                {
                    key: '56',
                    name: '服务付费管理',
                    to: '/app/undev'
                },
            ]
        },
    ],
    CUSTOMER_LIST_NAV: [
        {
            key: '1',
            title: '渠道客户',
            list: [
                {
                    key: '11',
                    name: '客户服务数据',
                    to: '/customer/data'
                },
                {
                    key: '12',
                    name: '客户列表',
                    to: '/customer/data'
                },
            ]
        },
        {
            key: '2',
            title: '应用客户',
            list: [
                {
                    key: '21',
                    name: '客户服务数据',
                    to: '/customer/undev'
                },
                {
                    key: '22',
                    name: '客户列表',
                    to: '/customer/undev'
                },
                {
                    key: '23',
                    name: '客户列表',
                    to: '/customer/undev'
                },
            ]
        },
        {
            key: '3',
            title: '硬件推广',
            list: [
                {
                    key: '31',
                    name: '线下推广奖励',
                    to: '/undev'
                },
                {
                    key: '32',
                    name: '线上推广奖励',
                    to: '/undev'
                },
                {
                    key: '33',
                    name: '推广硬件登记',
                    to: '/undev'
                },
            ]
        },
        {
            key: '4',
            title: '服务工具',
            list: [
                {
                    key: '44',
                    name: '局校互联',
                    to: '/undev'
                },
                {
                    key: '45',
                    name: '代运营',
                    to: '/undev'
                },
            ]
        },
        {
            key: '5',
            title: '结算管理',
            list: [
                {
                    key: '51',
                    name: '结算订单',
                    to: '/undev'
                },
            ]
        },
    ],
    PROMOTION_LIST_NAV: [
        {
            key: '1',
            title: '方案配置',
            list: [
                {
                    key: '11',
                    name: '方案管理',
                    to: '/promotion/manage'
                },
            ]
        },
        {
            key: '12',
            title: '方案推广',
            list: [
                {
                    key: '13',
                    name: '应用市场搜索',
                    to: '/promotion/undev'
                },
                {
                    key: '14',
                    name: '客户列表',
                    to: '/promotion/undev'
                },
            ]
        },
        {
            key: '2',
            title: '合作广场',
            list: [
                {
                    key: '21',
                    name: '合作管理',
                    to: '/promotion/undev'
                },
            ]
        },
    ],
    PROFILE_LIST_NAV: [
        {
            key: '1',
            title: '服务商信息',
            list: [
                {
                    key: '11',
                    name: '基本信息',
                    to: '/profile/basicInfo'
                },
                {
                    key: '12',
                    name: '服务信息',
                    to: '/profile/undev'
                },
                {
                    key: '13',
                    name: '权限信息',
                    to: '/profile/undev'
                },
                {
                    key: '14',
                    name: '操作日志',
                    to: '/profile/undev'
                },
            ]
        },
    ],
}

export default config