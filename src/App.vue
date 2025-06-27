<template>
  <div class="flex flex-col min-h-screen font-body">
    <TheNavbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<style>
/* Estilos globales para html, body, y #app. No uses 'scoped' aquí. */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>