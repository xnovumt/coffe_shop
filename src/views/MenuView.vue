<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-display font-bold text-coffee-dark mb-10 text-center">Nuestro Menú Completo</h1>

    <section class="mb-14">
      <h2 class="text-3xl font-display font-semibold text-gray-800 mb-8 border-b-2 border-accent-green pb-3">Bebidas Calientes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard name="Espresso" description="Intenso y concentrado, la esencia del café." price="3.00" />
        <ProductCard name="Americano" description="Espresso diluido con agua caliente, suave y aromático." price="3.50" />
        <ProductCard name="Cappuccino" description="Clásico café con leche vaporizada y espuma de leche." price="4.00" />
        <ProductCard name="Latte" description="Suave combinación de espresso y leche al vapor." price="4.00" />
        <ProductCard name="Mocha" description="La indulgencia perfecta: chocolate, espresso y leche." price="4.75" />
        <ProductCard name="Macchiato" description="Espresso con una pequeña mancha de leche espumada." price="3.25" />
        <ProductCard name="Té Chai Latte" description="Bebida especiada y cremosa con té negro y leche." price="4.50" />
        <ProductCard name="Chocolate Caliente" description="Cremoso y reconfortante chocolate belga." price="4.25" />
      </div>
    </section>

    <section class="mb-14">
      <h2 class="text-3xl font-display font-semibold text-gray-800 mb-8 border-b-2 border-accent-green pb-3">Bebidas Frías</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard name="Cold Brew" description="Café infusionado en frío por 12 horas, suave y con baja acidez." price="4.50" />
        <ProductCard name="Iced Latte" description="Latte refrescante con hielo, perfecto para el calor." price="4.25" />
        <ProductCard name="Frappuccino" description="Bebida helada, licuada con hielo, café, leche y sabores." price="5.50" />
        <ProductCard name="Limonada Fresca" description="Hecha al momento con limones naturales." price="3.50" />
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-display font-semibold text-gray-800 mb-8 border-b-2 border-accent-green pb-3">Repostería y Snacks</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard name="Croissant Francés" description="Crujiente por fuera, suave por dentro." price="2.50" />
        <ProductCard name="Muffin de Arándanos" description="Esponjoso con trozos de arándanos frescos." price="3.00" />
        <ProductCard name="Cheesecake NY" description="Clásico cheesecake cremoso al estilo Nueva York." price="5.00" />
        <ProductCard name="Sándwich de Pavo y Queso" description="Ideal para un almuerzo ligero." price="6.50" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue';
</script>