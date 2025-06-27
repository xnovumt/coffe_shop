<template>
  <header class="bg-primary-black text-white-text p-4 shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-3xl font-display font-extrabold tracking-wide hover:text-yellow-accent transition duration-300 transform hover:scale-105">
        <span class="text-yellow-accent">Tu</span>Cafetería
      </router-link>

      <div class="flex space-x-6">
        <router-link to="/" class="relative px-4 py-2 text-lg font-body group">
          Inicio
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </router-link>
        <router-link to="/menu" class="relative px-4 py-2 text-lg font-body group">
          Menú
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </router-link>
        <router-link to="/about" class="relative px-4 py-2 text-lg font-body group">
          Nosotros
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </router-link>
        <router-link to="/contact" class="relative px-4 py-2 text-lg font-body group">
          Contacto
          <span class="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/*
  Mantén los estilos específicos al mínimo.
  Si necesitas una fuente personalizada que no esté en Google Fonts/Tailwind,
  o un estilo que Tailwind no pueda expresar fácilmente, ponlo aquí.
  Pero para la mayoría de los casos, las clases de Tailwind son suficientes.
*/
</style>