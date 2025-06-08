import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import { remarkAlert } from "remark-github-blockquote-alert";
import astroExpressiveCode from 'astro-expressive-code'

export default defineConfig({
  site: 'https://github.com/prabhavdogra',
  base: '/',  
  integrations: [
    tailwind(),
    alpinejs(),
    astroExpressiveCode({
      shiki: { theme: 'one-dark-pro', wrap: true },
    }),
  ],
  markdown: {
    remarkPlugins: [ 
      remarkAlert,
    ],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  }
});