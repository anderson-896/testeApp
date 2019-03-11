import Vue from 'vue'
import Router from 'vue-router'
import MasterPage from '@/components/TaMasterPage'
import HelloWorld from '@/components/HelloWorld'
import Servicos from '@/components/TaServicos'
import Contato from '@/components/TaContato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MasterPage',
      component: MasterPage,
      children: [
        {
          path: '/main',
          name: 'Outro',
          component: HelloWorld
        },
        {
          path: '/servicos',
          name: 'Servicos',
          component: Servicos
        }
        ,
        {
          path: '/contato',
          name: 'Contato',
          component: Contato
        }
      ]
    }
  ]
})
