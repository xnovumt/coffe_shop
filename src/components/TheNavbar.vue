<template>
  <header class="bg-yellow-500 text-black p-4 shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-3xl font-display font-extrabold tracking-wide hover:text-yellow-accent transition duration-300 transform hover:scale-105" :style="{ color: 'var(--color-heading)' }">
        <span class="text-black">Coloquial</span>
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
        <button
          @click="toggleDarkMode"
          class="bg-yellow-500 text-black px-4 py-2 rounded shadow hover:bg-yellow-400 transition"
        >
          {{ isDark ? 'Modo Claro' : 'Modo Oscuro' }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

// Opcional: Detecta el modo del sistema al cargar
onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
/*
  Mantén los estilos específicos al mínimo.
  Si necesitas una fuente personalizada que no esté en Google Fonts/Tailwind,
  o un estilo que Tailwind no pueda expresar fácilmente, ponlo aquí.
  Pero para la mayoría de los casos, las clases de Tailwind son suficientes.
*/
</style>