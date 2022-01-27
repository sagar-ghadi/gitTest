import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
      // children: [
      //   {
      //     path: '/hello',
      //     name: 'hello',
      //     component: HelloWorld
      //   }
      // ]
    }
  ]
})
