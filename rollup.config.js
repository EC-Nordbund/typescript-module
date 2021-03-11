import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";

export default {
  input: {
    index: 'src/index.ts'
  },
  output: {
    dir: 'dist'
  },
  plugins: [
    esbuild(),
    terser()
  ]
}