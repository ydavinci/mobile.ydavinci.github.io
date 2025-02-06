// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://ydavinci.github.io/mobile.ydavinci.github.io/',
  base: '/mobile.ydavinci.github.io/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});