import { defineConfig } from 'vite';

const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
