<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import { reactive, ref } from 'vue';
import { computed } from '@vue/reactivity';

// let isDrawerActive = ref(false);
</script>

<template>
  <Header />
  <div class="wrapper"></div>
</template>

<style scoped>
.btn .active {
  color: yellow;
  background-color: #000;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: auto;
  padding: 0;
  margin: 0;
  pointer-events: none;
  z-index: 0;
  margin: auto 0;
  pointer-events: none;
  background-color: rgb(115, 181, 252);
}

.common-transition {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  pointer-events: none;
}
</style>
