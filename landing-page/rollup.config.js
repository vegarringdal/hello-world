import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'landing-page/app.js',
  output: [
    {
      format: 'esm',
      file: 'landing-page/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};