import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const root = process.platform === 'win32' ? path.resolve('/') : '/';

/**
 * Rollup config for building the react-dat-gui library
 *
 * @see https://rollupjs.org/guide/en/#using-config-files
 */
export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: id =>
    !id.startsWith('.') && !id.startsWith(root) && !id.includes('style-inject'),
  plugins: [
    postcss({ plugins: [autoprefixer, cssnano], extract: pkg.style }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    filesize(),
    copy({
      targets: [{ src: './index.d.ts', dest: 'dist' }]
    })
  ]
};
