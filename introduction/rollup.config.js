import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel"

export default {
  input: 'landing-page/app.js',
  output: [
    {
      format: 'cjs',
      file: 'landing-page/bundle.js'
    },
  ],
  plugins: [
    resolve(),
    babel({
        exclude: "node_modules/**"
    })
  ]
};