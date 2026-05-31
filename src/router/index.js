import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/About.vue'
import services from '../views/services.vue'
import contact from '../views/contact.vue'
import video from '../views/video.vue'
import Photos from '../views/photos.vue'
import Kigali from '../views/kigali.vue'
import northern from '../views/northern.vue'
import Southern from '../views/southern .vue'
import Eastern from '../views/Eastern.vue'
import Western from '../views/western .vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path:'/services',
    name:'services',
    component:services,
  },
  {
     path:'/contact',
    name:'Contact',
    component:contact,
  },
  {
  path:'/video',
    name:'video',
    component:video,
  },
  {
    path:'/photos',
    name:'photos',
    component:Photos, 
  },
  {
  path:'/kigali',
    name:'kigali',
    component:Kigali,
  },
  {
  path:'/northern',
    name:'northern',
    component:northern,
  },
  {
     path:'/southern',
    name:'southern',
    component:Southern,
  },
  {
     path:'/Eastern',
    name:'Eastern',
    component:Eastern,
  },
  {
    path:'/Western',
    name:'Western',
    component:Western,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router