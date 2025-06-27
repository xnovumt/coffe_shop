/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Asegúrate de que esta línea es correcta para escanear tus archivos
  ],
  theme: {
    extend: {
      colors: {
        // ¡Aquí defines tus colores personalizados!
        'primary-black': '#1a1a1a',
        'secondary-gray': '#333333',
        'light-gray': '#e0e0e0',
        'yellow-accent': '#f7b30a', // Tu color amarillo
        'white-text': '#ffffff',
      },
      fontFamily: {
        // ¡Aquí defines tus fuentes personalizadas!
        'display': ['"Playfair Display"', 'serif'], // Usar comillas si el nombre de la fuente tiene espacios
        'body': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}