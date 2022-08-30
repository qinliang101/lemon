import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/pages/index.vue'),
        children: [
            // 首页
            {
                path: '/home',
                name: 'home',
                component: () => import('../pages/home/index.vue'),
                meta: {
                    
                }
            },

            // 应用管理
            {
                path: '/app',
                name: 'app',
                redirect: '/app/web',
                component: () => import('../pages/app/index.vue'),
                children: [
                    {
                        path: '/app/web',
                        name: 'webApp',
                        component: () => import('../pages/app/webApp.vue')
                    },
                    {
                        path: '/app/mini',
                        name: 'miniApp',
                        component: () => import('../pages/app/miniApp.vue')
                    },
                    {
                        path: '/app/oa',
                        name: 'oaTpl',
                        component: () => import('../pages/app/oaTpl.vue')
                    },
                    {
                        path: '/app/undev',
                        name: 'appUnDev',
                        component: () => import('../components/UnDev.vue')
                    },
                ]
            },
            {
                path: '/app/web/detail',
                name: 'webAppDetail',
                component: () => import('../pages/app/webDetail.vue')
            },

            // 客户管理
            {
                path: '/customer',
                name: 'customer',
                redirect: '/customer/data',
                component: () => import('../pages/customer/index.vue'),
                children: [
                    {
                        path: '/customer/data',
                        name: 'customerData',
                        component: () => import('../pages/customer/data.vue')
                    },
                    {
                        path: '/customer/undev',
                        name: 'customerUnDev',
                        component: () => import('../components/UnDev.vue')
                    },
                ]
            },

            // 服务商信息
            {
                path: '/profile',
                name: 'profile',
                redirect: '/profile/basicInfo',
                component: () => import('../pages/profile/index.vue'),
                children: [
                    {
                        path: '/profile/basicInfo',
                        name: 'profileBasic',
                        component: () => import('../pages/profile/basicInfo.vue')
                    },
                    {
                        path: '/profile/undev',
                        name: 'profileUnDev',
                        component: () => import('../components/UnDev.vue')
                    },
                ]
            },

            // 方案管理
            {
                path: '/promotion',
                name: 'promotion',
                redirect: '/promotion/manage',
                component: () => import('../pages/promotion/index.vue'),
                children: [
                    {
                        path: '/promotion/manage',
                        name: 'promotionManage',
                        component: () => import('../pages/promotion/manage.vue')
                    },
                    {
                        path: '/promotion/undev',
                        name: 'promotionUnDev',
                        component: () => import('../components/UnDev.vue')
                    },
                ]
            },

            // 其他
            {
                path: '/app/create',
                name: 'createApp',
                component: () => import('../pages/app/createApp.vue')
            },

            // 404
            {
                path: '/:pathMatch(.*)',
                name: '404',
                component: () => import('../components/404.vue')
            }
        ]
    },
]

export default routes