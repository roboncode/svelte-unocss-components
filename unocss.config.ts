import {
  defineConfig,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  // preprocess(matcher: string) {
  //   const prefix = 'sa:'
  //   return matcher.startsWith(prefix) ? matcher.slice(prefix.length) : undefined
  // }
})
