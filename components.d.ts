import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    404: typeof import('./src/components/404.vue')['default']
    LeftNav: typeof import('./src/components/LeftNav.vue')['default']
    MainHeader: typeof import('./src/components/MainHeader.vue')['default']
    NormalHeader: typeof import('./src/components/NormalHeader.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
