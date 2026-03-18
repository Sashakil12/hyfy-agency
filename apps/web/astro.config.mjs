import react from '@astrojs/react'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://dev.hyfy.ltd',
  integrations: [react(), sitemap()],
  output: 'hybrid', // Use hybrid mode: static by default, SSR where needed
  adapter: node({
    mode: 'standalone',
  }),
})
