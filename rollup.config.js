import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import flow from 'rollup-plugin-flow'

export default {
  entry: 'admin/scripts/entry.js',
  dest: 'admin/dist/bundle.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    flow(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    eslint(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
