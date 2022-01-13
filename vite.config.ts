import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
  },
  base: './',
  build: {
    outDir: '_site',
  },
  server: {
    open: '/docs/',
  },
})
