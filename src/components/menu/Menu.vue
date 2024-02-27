<script setup lang="ts">
// import { useRoute } from 'vitepress'
import Header from './header/Header.vue'
import Footer from './footer/Footer.vue'
import Body from './body/Body.vue'

interface Item {
  name: string
  value: string
  href?: string
  sub?: Item[]
  child?: Item[]
}

// const $route = useRoute()

const sidebarNavItems: Item[] = [
  {
    name: '概览',
    value: 'overview',
    href: '/workbench/overview',
  },
  {
    name: '仪表盘',
    value: 'dashboard',
    sub: [
      {
        name: '水果盘',
        value: 'fruit',
        href: '/workbench/dashboard',
      },
      {
        name: '蔬菜cmdb盘',
        value: 'shucai',
        href: '/cmdb/overview',
      },
    ],
  },
  {
    name: '个人中心',
    value: 'gerenzhongxin',
    child: [
      {
        name: '我的资料',
        value: 'my',
        href: '/examples/forms/forms',
      },
      {
        name: '我的账号',
        value: 'account',
        href: '/examples/forms/forms',
      },
      {
        name: '云厂商',
        value: 'cloud',
        sub: [
          {
            name: '阿里云',
            value: 'aliyun',
            href: '/examples/forms/forms',
          },
          {
            name: '华为云',
            value: 'huaweicloud',
            href: '/examples/forms/forms',
          },
        ],
      },
    ],
  },
]
console.log('i am in menu')
</script>

<template>
  <div class="h-screen">
    <div class="flex-col h-full flex">
      <!--    Menu Header-->
      <div class="flex-shrink-0 h-32">
        <Header></Header>
      </div>
      <!--    Menu Body-->
      <div class="flex-auto overflow-auto">
        <Body :items="sidebarNavItems" title="工作台"></Body>
      </div>
      <!--    Menu Footer-->
      <div class="flex-shrink-0 h-[52px]">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
