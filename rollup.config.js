import esbuild from "rollup-plugin-esbuild";

export default {
  input: {
    index: 'src/index.ts'
  },
  output: {
    dir: 'dist'
  },
  plugins: [
    esbuild()
  ]
}