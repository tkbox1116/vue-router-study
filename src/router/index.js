import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import gsap from 'gsap';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        console.log('route(home):beforeEnter');
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      beforeEnter: (to, from, next) => {
        console.log('route(content):beforeEnter');
        next();
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const tl = gsap.timeline();
  tl.to('.wrapper', {
    duration: 0.8,
    opacity: 1,
    zIndex: 100,
    onComplete: () => {
      next();
    }
  }).to(
    '.wrapper',
    {
      duration: 1,
      opacity: 0,
      zIndex: 0
    },
    1.25
  );
});

export default router;

// component: MyComponent;
