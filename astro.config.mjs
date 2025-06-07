import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  site: 'https://github.com/prabhavdogra',
  base: '/',  
  integrations: [
    tailwind(),
    alpinejs()
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