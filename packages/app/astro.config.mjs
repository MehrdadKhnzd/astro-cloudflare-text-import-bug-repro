import cloudflare from '@astrojs/cloudflare'
import solidJs from '@astrojs/solid-js'
// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: 'cloudflare',
  }),
  integrations: [UnoCSS({
    injectReset: true,
  }), solidJs({ devtools: true })],
})
