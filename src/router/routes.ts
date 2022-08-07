import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('../pages/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../pages/home/index.vue')
            },
            {
                path: '/app',
                name: 'app',
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
                ]
            },
            {
                path: '/app/web/detail',
                name: 'webAppDetail',
                component: () => import('../pages/app/webDetail.vue')
            },
            {
                path: '/customer',
                name: 'customer',
                component: () => import('../pages/customer/index.vue'),
                children: [
                    {
                        path: '/customer/data',
                        name: 'customerData',
                        component: () => import('../pages/customer/data.vue')
                    },
                ]
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../pages/profile/index.vue'),
                children: [
                    {
                        path: '/profile/basicInfo',
                        name: 'profileBasic',
                        component: () => import('../pages/profile/basicInfo.vue')
                    },
                ]
            },
            {
                path: '/promotion',
                name: 'promotion',
                component: () => import('../pages/promotion/index.vue'),
                children: [
                    {
                        path: '/promotion/manage',
                        name: 'promotionManage',
                        component: () => import('../pages/promotion/manage.vue')
                    },
                ]
            },
        ]
    },
]

export default routes