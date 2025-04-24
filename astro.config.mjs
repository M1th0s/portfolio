// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  server: {
    port: 4000,
  },
  integrations: [tailwind(), react()],
  devToolbar: {
    enabled: false,
  },
});