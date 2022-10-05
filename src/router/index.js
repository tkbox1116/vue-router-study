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
    // active状態
    duration: 0.85,
    zIndex: 100,
    transformOrigin: 'center bottom',
    scaleY: 1,
    scaleX: 1,
    ease: 'Expo.easeInOut',
    onComplete: () => {
      // アニメーション開始時間までの時間を確保
      setTimeout(() => {
        next();
      }, 100);
    }
  }).to(
    '.wrapper',
    {
      // 通常状態
      duration: 0.85,
      scaleY: 0,
      scaleX: 1,
      transformOrigin: 'center top',
      ease: 'Expo.easeInOut'
    },
    // 次のアニメーションが始まるまでの時間
    1
  );
});

export default router;

// component: MyComponent;
