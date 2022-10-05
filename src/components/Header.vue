<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref } from 'vue';

const isActive = ref(false);
const navLists = ['home', 'about me'];
</script> -->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';

const isActive = ref(false);

const test = () => {
  console.log('test');
  isActive.value = !isActive.value;
};

const testClass = computed(() => ({
  'is-drawerActive': isActive.value,
  'aria-expanded': isActive.value ? 'true' : 'false'
}));

const navList = ref([
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/about',
    text: 'About'
  }
]);
</script>

<template>
  <header class="l-header p-header">
    <div class="l-container">
      <div class="l-header__wrap">
        <div class="p-header__info">
          <h1 class="p-header__title">
            <RouterLink to="/" class="p-logo">LOGO</RouterLink>
          </h1>
        </div>

        <!-- /.p-header__info -->
        <nav class="p-header__nav">
          <h2 class="screen-reader-text">サイト内メニュー</h2>
          <!-- <button
            class="js-drawer c-button p-hamburger"
            @click="isActive = !isActive"
            :class="{ 'is-drawerActive': isActive }"
            :aria-expanded="isActive ? 'true' : 'false'"
            aria-controls="globalNav"
            type="button"
          > -->

          <button
            class="js-drawer c-button p-hamburger"
            @click="test"
            :class="testClass"
            aria-controls="globalNav"
            type="button"
          >
            <span class="p-hamburger__line">
              <span class="screen-reader-text">メニューを開閉</span>
            </span>
          </button>
          <!-- <ul id="globalNav" class="p-globalNav" @click="isActive = !isActive" :class="{ 'is-drawerActive': isActive }">
            <li><RouterLink to="/">home</RouterLink></li>
            <li><RouterLink to="/about">about me</RouterLink></li>

            <li v-for="navList in navLists" :key="navList">
              <RouterLink v-bind:to="`/ ${navList} === 'home' ? '/' : ${navList}`"> {{ navList }}</RouterLink>
            </li>
          </ul> -->
          <ul id="globalNav" class="p-globalNav" @click="test" :class="testClass">
            <li v-for="(navItem, index) in navList" :key="index">
              <RouterLink :to="{ path: navItem.to }">{{ navItem.text }}</RouterLink>
            </li>
            <!-- <li><RouterLink to="/">home</RouterLink></li>
            <li><RouterLink to="/about">about me</RouterLink></li>

            <li v-for="navList in navLists" :key="navList">
              <RouterLink v-bind:to="`/ ${navList} === 'home' ? '/' : ${navList}`"> {{ navList }}</RouterLink>
            </li> -->
            <!-- {{navList[0].text}} -->
          </ul>
        </nav>
      </div>
      <!-- /.l-header__wrap -->
    </div>
    <!-- /.p-header__inner -->
  </header>
  <!-- <transition name="fade" mode="out-in"> -->

  <RouterView />

  <!-- </transition> -->
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 1s ease all;
  /* transform: translateY(50px); */
  /* color: red; */
}

.fade-enter-from,
.fade-leave-to {
  transition: 1s ease all;
  opacity: 0;
  transform: translateY(50px);
  /* transform: translateY(0); */
  color: green;
}
</style>
