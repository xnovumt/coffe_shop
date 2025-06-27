<template>
  <div class="relative w-full h-[600px] overflow-hidden">
    <div
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
      :style="{ opacity: currentSlideOpacity, backgroundImage: `url(${currentSlide.image})` }"
    ></div>

    <div class="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-30 z-10">
      <div class="text-center text-white-text">
        <h1 class="text-5xl md:text-7xl font-display font-extrabold mb-4 drop-shadow-lg leading-tight">
          {{ currentSlide.title }}
        </h1>
        <p class="text-lg md:text-2xl mb-8 drop-shadow-md font-body max-w-3xl mx-auto">
          {{ currentSlide.description }}
        </p>
        <router-link
          v-if="currentSlide.link"
          :to="currentSlide.link"
          class="bg-yellow-accent text-primary-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 transform hover:scale-105 inline-block text-lg"
        >
          {{ currentSlide.buttonText }}
        </router-link>
      </div>
    </div>

    <div class="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="{ 'bg-yellow-accent': index === currentIndex, 'bg-white-text bg-opacity-50': index !== currentIndex }"
        class="w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 hover:scale-125"
      ></span>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-20"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300 z-20"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink } from 'vue-router';

interface Slide {
  image: string;
  title: string;
  description: string;
  link?: string;
  buttonText?: string;
}

const slides: Slide[] = [
  {
    image: '/images/slide1.jpg', // Asegúrate de que esta imagen exista en public/images/slider
    title: 'Tu Rincón de Café Perfecto',
    description: 'Sumérgete en el aroma, saborea la tradición.',
    link: '/menu',
    buttonText: 'Explora Nuestro Menú'
  },
  {
    image: '/images/slide1.jpg',
    title: 'Despierta tus Sentidos',
    description: 'Cada taza, una experiencia única de sabor y pasión.',
    link: '/about',
    buttonText: 'Conoce Nuestra Historia'
  },
  {
    image: '/images/slide1.jpg',
    title: 'Momentos Inolvidables',
    description: 'El ambiente ideal para tus encuentros y tu inspiración diaria.',
    link: '/contact',
    buttonText: 'Visítanos'
  }
];

const currentIndex = ref(0);
const intervalId = ref<number | null>(null);
const currentSlideOpacity = ref(1); // Para la transición de opacidad

const currentSlide = computed(() => slides[currentIndex.value]);

const goToSlide = (index: number) => {
  if (index === currentIndex.value) return; // No hacer nada si es el mismo slide

  currentSlideOpacity.value = 0; // Inicia la transición de desvanecimiento

  setTimeout(() => {
    currentIndex.value = index;
    currentSlideOpacity.value = 1; // Termina la transición con el nuevo slide
  }, 500); // Duración de la mitad de la transición (500ms para un total de 1000ms)

  resetAutoPlay();
};

const nextSlide = () => {
  goToSlide((currentIndex.value + 1) % slides.length);
};

const prevSlide = () => {
  goToSlide((currentIndex.value - 1 + slides.length) % slides.length);
};

const startAutoPlay = () => {
  if (intervalId.value) clearInterval(intervalId.value);
  intervalId.value = window.setInterval(nextSlide, 7000); // Cambia cada 7 segundos
};

const resetAutoPlay = () => {
  clearInterval(intervalId.value as number);
  startAutoPlay();
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value);
});
</script>

<style scoped>
/* No se necesitan estilos aquí, Tailwind lo maneja */
</style>