import { defineConfig } from 'vite'
import riot from 'rollup-plugin-riot'

/**
 * Vite configuration: https://vitejs.dev/config/
 */

export default defineConfig({
  root       : process.cwd() + '/client',
  plugins    : [riot()],
  build: { 
    minify       : 'esbuild', /** https://vitejs.dev/config/build-options.html#build-minify */
    target       : 'esnext' /** https://vitejs.dev/config/build-options.html#build-target */
  }
})