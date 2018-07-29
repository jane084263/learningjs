import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve)=>{
        require(['./../components/index'],resolve);
      }
    },
    {
      path: '/chapter_1',
      name: 'chapter_1',
      component: (resolve)=>{
        require(['./../components/chapter_1'],resolve);
      }
    },
    {
      path: '/chapter_2',
      name: 'chapter_2',
      component: (resolve)=>{
        require(['./../components/chapter_2'],resolve);
      }
    },
    {
      path: '/chapter_3',
      name: 'chapter_3',
      component: (resolve)=>{
        require(['./../components/chapter_3'],resolve);
      }
    },
    {
      path: '/chapter_4',
      name: 'chapter_4',
      component: (resolve)=>{
        require(['./../components/chapter_4'],resolve);
      }
    },
    {
      path: '/chapter_5',
      name: 'chapter_5',
      component: (resolve)=>{
        require(['./../components/chapter_5'],resolve);
      }
    },
    {
      path: '/chapter_6',
      name: 'chapter_6',
      component: (resolve)=>{
        require(['./../components/chapter_6'],resolve);
      }
    },
    {
      path: '/chapter_7',
      name: 'chapter_7',
      component: (resolve)=>{
        require(['./../components/chapter_7'],resolve);
      }
    },
    {
      path: '/chapter_8',
      name: 'chapter_8',
      component: (resolve)=>{
        require(['./../components/chapter_8'],resolve);
      }
    },
    {
      path: '/chapter_9',
      name: 'chapter_9',
      component: (resolve)=>{
        require(['./../components/chapter_9'],resolve);
      }
    },
    {
      path: '/chapter_10',
      name: 'chapter_10',
      component: (resolve)=>{
        require(['./../components/chapter_10'],resolve);
      }
    },
    {
      path: '/chapter_11',
      name: 'chapter_11',
      component: (resolve)=>{
        require(['./../components/chapter_11'],resolve);
      }
    },
    {
      path: '/chapter_12',
      name: 'chapter_12',
      component: (resolve)=>{
        require(['./../components/chapter_12'],resolve);
      }
    },
    {
      path: '/chapter_13',
      name: 'chapter_13',
      component: (resolve)=>{
        require(['./../components/chapter_13'],resolve);
      }
    },
    {
      path: '/chapter_14',
      name: 'chapter_14',
      component: (resolve)=>{
        require(['./../components/chapter_14'],resolve);
      }
    },
    {
      path: '/chapter_15',
      name: 'chapter_15',
      component: (resolve)=>{
        require(['./../components/chapter_15'],resolve);
      }
    },
    {
      path: '/chapter_16',
      name: 'chapter_16',
      component: (resolve)=>{
        require(['./../components/chapter_16'],resolve);
      }
    },
    {
      path: '/chapter_17',
      name: 'chapter_17',
      component: (resolve)=>{
        require(['./../components/chapter_17'],resolve);
      }
    },
    {
      path: '/chapter_18',
      name: 'chapter_18',
      component: (resolve)=>{
        require(['./../components/chapter_18'],resolve);
      }
    },
    {
      path: '/chapter_19',
      name: 'chapter_19',
      component: (resolve)=>{
        require(['./../components/chapter_19'],resolve);
      }
    },
    {
      path: '/chapter_20',
      name: 'chapter_20',
      component: (resolve)=>{
        require(['./../components/chapter_20'],resolve);
      }
    },
    {
      path: '/chapter_21',
      name: 'chapter_21',
      component: (resolve)=>{
        require(['./../components/chapter_21'],resolve);
      }
    },
    {
      path: '/chapter_22',
      name: 'chapter_22',
      component: (resolve)=>{
        require(['./../components/chapter_22'],resolve);
      }
    },
    {
      path: '/chapter_23',
      name: 'chapter_23',
      component: (resolve)=>{
        require(['./../components/chapter_23'],resolve);
      }
    },
    {
      path: '/chapter_24',
      name: 'chapter_24',
      component: (resolve)=>{
        require(['./../components/chapter_24'],resolve);
      }
    },
    {
      path: '/chapter_25',
      name: 'chapter_25',
      component: (resolve)=>{
        require(['./../components/chapter_25'],resolve);
      }
    },
    {
      path: '/chapter_26',
      name: 'chapter_26',
      component: (resolve)=>{
        require(['./../components/chapter_26'],resolve);
      }
    },
    {
      path: '/chapter_27',
      name: 'chapter_27',
      component: (resolve)=>{
        require(['./../components/chapter_27'],resolve);
      }
    },
    {
      path: '/chapter_28',
      name: 'chapter_28',
      component: (resolve)=>{
        require(['./../components/chapter_28'],resolve);
      }
    },
    {
      path: '/chapter_29',
      name: 'chapter_29',
      component: (resolve)=>{
        require(['./../components/chapter_29'],resolve);
      }
    },
  ]
})
