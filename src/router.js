import Vue from 'vue';
import Router from 'vue-router';

// Import your views
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // This mode uses the browser's history.pushState API for cleaner URLs.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    // Add other routes as needed
  ]
});
