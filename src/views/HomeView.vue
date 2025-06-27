<template>
  <ImageSlider />

  <section class="py-16 bg-light-gray">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-display font-bold text-secondary-gray mb-10">Nuestros Favoritos del Mes</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ProductCard name="Latte de Temporada" description="Cremoso latte con jarabe de temporada y un toque especial." price="5.50" />
        <ProductCard name="Pastel de Zanahoria" description="Casero, húmedo y con glaseado de queso crema." price="4.75" />
        <ProductCard name="Café de Origen Único" description="Grano selecto de Colombia, notas cítricas y florales." price="6.00" />
      </div>
      <router-link to="/menu" class="mt-12 inline-block bg-primary-black text-white-text font-bold py-3 px-8 rounded-lg hover:bg-secondary-gray transition duration-300 transform hover:scale-105 text-lg">
        Ver Menú Completo
      </router-link>
    </div>
  </section>

  <section class="py-16 bg-secondary-gray text-white-text">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-display font-bold text-yellow-accent mb-10">¿Por Qué Elegirnos?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 bg-primary-black rounded-lg shadow-md">
          <i class="fas fa-mug-hot text-5xl text-yellow-accent mb-4"></i>
          <h3 class="text-2xl font-semibold text-white-text mb-2 font-display">Café de Calidad Suprema</h3>
          <p class="text-light-gray font-body">Seleccionamos los mejores granos de café de las regiones más reconocidas.</p>
        </div>
        <div class="p-6 bg-primary-black rounded-lg shadow-md">
          <i class="fas fa-cookie-bite text-5xl text-yellow-accent mb-4"></i>
          <h3 class="text-2xl font-semibold text-white-text mb-2 font-display">Repostería Fresca Diaria</h3>
          <p class="text-light-gray font-body">Nuestros postres y panes se hornean cada mañana con ingredientes frescos.</p>
        </div>
        <div class="p-6 bg-primary-black rounded-lg shadow-md">
          <i class="fas fa-heart text-5xl text-yellow-accent mb-4"></i>
          <h3 class="text-2xl font-semibold text-white-text mb-2 font-display">Ambiente Acogedor</h3>
          <p class="text-light-gray font-body">Un espacio perfecto para relajarte, trabajar o reunirte con amigos.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import ImageSlider from '../components/ImageSlider.vue'; // ¡Importa el nuevo componente!

// Asegúrate de que Font Awesome esté en tu public/index.html si usas los iconos (fas fa-...)
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</script>