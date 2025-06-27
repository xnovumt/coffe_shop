<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-display font-bold text-coffee-dark mb-10 text-center">Conéctate con Nosotros</h1>
    <div class="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-xl border border-gray-100">
      <p class="text-lg text-gray-700 mb-8 text-center font-body">
        ¿Preguntas, comentarios o sugerencias? ¡Estamos aquí para escucharte!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 class="text-2xl font-display font-semibold text-gray-800 mb-4">Información de Contacto</h2>
          <p class="text-gray-700 mb-2 font-body">📍 <span class="font-semibold">Dirección:</span> [Dirección Completa de Tu Cafetería, Ciudad, País]</p>
          <p class="text-gray-700 mb-2 font-body">📞 <span class="font-semibold">Teléfono:</span> [Tu Número de Teléfono]</p>
          <p class="text-gray-700 mb-2 font-body">📧 <span class="font-semibold">Email:</span> <a href="mailto:info@tucafeteria.com" class="text-accent-green hover:underline">info@tucafeteria.com</a></p>
          <p class="text-gray-700 mb-2 font-body">⏰ <span class="font-semibold">Horario:</span></p>
          <ul class="list-disc list-inside text-gray-600 ml-4 font-body">
            <li>Lunes - Viernes: 7:00 AM - 7:00 PM</li>
            <li>Sábados - Domingos: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-display font-semibold text-gray-800 mb-4">Encuéntranos</h2>
          <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500 text-center font-body italic">
            [Espacio para un mapa de Google Maps]
            <br>
            Puedes incrustar un iframe de Google Maps aquí.
          </div>
          <p class="mt-4 text-center text-gray-600 font-body">
            <a href="https://www.google.com/maps/search/?api=1&query=[Tu Dirección Aquí]" target="_blank" class="text-accent-green hover:underline font-semibold">Obtener Direcciones</a>
          </p>
        </div>
      </div>
      </div>
  </div>
</template>

<script setup lang="ts">
// Lógica específica
</script>