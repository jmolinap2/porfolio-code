import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://jmolinap2.github.io/porfolio-code/',
  base: '/porfolio-code/',
  integrations: [tailwind(), robotsTxt()],
})
