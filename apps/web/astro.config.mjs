import react from '@astrojs/react'
import node from '@astrojs/node'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [react()],
  output: 'hybrid', // Use hybrid mode: static by default, SSR where needed
  adapter: node({
    mode: 'standalone'
  }),
})
