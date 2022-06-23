import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import transformerDirective from '@unocss/transformer-directives'
import Banner from 'vite-plugin-banner'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VERSION': JSON.stringify(process.env.npm_package_version),
  },
  plugins: [
    svelte(),
    Unocss({
      transformers: [
        transformerDirective()
      ]
    }),
    Banner(`/* SaturnUI v${process.env.npm_package_version} Rob Taylor https://roboncode.com (c) 2020-present */`),
  ]
})
