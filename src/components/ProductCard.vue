<template>
  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-1">
    <h3 class="text-2xl font-semibold text-gray-800 mb-2 font-display">{{ name }}</h3>
    <p class="text-gray-600 text-base mb-4 flex-grow font-body">{{ description }}</p>
    <span class="block mt-auto text-accent-green text-3xl font-bold">${{ price }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define las propiedades que este componente aceptará
defineProps<{
  name: string;
  description: string;
  price: string; // Mejor como string para el formato de moneda
  // imageSrc?: string; // Opcional si añades imágenes
}>();
</script>

<style scoped>
/* Estilos específicos */
</style>