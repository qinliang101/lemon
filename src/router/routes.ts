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
                component: () => import('../pages/home/index.vue'),
                meta: {
                    
                }
            },
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
                redirect: '/customer/data',
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
                redirect: '/profile/basicInfo',
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
                redirect: '/promotion/manage',
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
    {
        path: '/:pathMatch(.*)',
        name: '404',
        component: () => import('../components/404.vue')
    }
]

export default routes