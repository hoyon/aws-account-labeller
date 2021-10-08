import svelte from 'rollup-plugin-svelte';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'config/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'aws_account_label',
    file: 'dist/config.js'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: false,
      },
      emitCss: false
    }),
    html({
      title: "AWS account labeller"
    }),
    resolve({browser: true})
  ]
}
