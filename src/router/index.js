import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/About.vue'
import Services from '../views/services.vue'
import Contact from '../views/contact.vue'
import Video from '../views/video.vue'
import Photos from '../views/photos.vue'
import Kigali from '../views/kigali.vue'
import Northern from '../views/northern.vue'
import Southern from '../views/southern.vue'
import Eastern from '../views/eastern.vue'
import Western from '../views/western.vue'

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
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos,
  },

  // Regions
  {
    path: '/kigali',
    name: 'Kigali',
    component: Kigali,
  },
  {
    path: '/northern',
    name: 'Northern',
    component: Northern,
  },
  {
    path: '/southern',
    name: 'Southern',
    component: Southern,
  },
  {
    path: '/eastern',
    name: 'Eastern',
    component: Eastern,
  },
  {
    path: '/western',
    name: 'Western',
    component: Western,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router