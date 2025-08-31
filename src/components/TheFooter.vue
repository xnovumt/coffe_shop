<template>
  <footer class="bg-yellow-500 text-black p-8 text-center mt-auto shadow-inner">
    <div class="container mx-auto">
      <p class="text-lg mb-4">&copy; {{ currentYear }} Coloquial. Todos los derechos reservados.</p>
      <div class="flex justify-center space-x-6 mb-4">
        <a href="#" class="text-gray-400 hover:text-white transition duration-300">Facebook</a>
        
        <a href="#" class="text-gray-400 hover:text-white transition duration-300">Instagram</a>
        <a href="#" class="text-gray-400 hover:text-white transition duration-300">Twitter</a>
      </div>
      <p class="text-sm text-gray-500">Diseñado con <span class="text-red-500">♥</span> y Vue.js</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Estilos específicos del pie de página */
</style>