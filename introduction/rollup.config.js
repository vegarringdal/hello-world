import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'introduction/app.js',
  output: [
    {
      format: 'esm',
      file: 'introduction/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};