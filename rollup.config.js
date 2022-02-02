import styles from "rollup-plugin-styles";
import sourcemaps from "rollup-plugin-sourcemaps";
//import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
const autoprefixer = require('autoprefixer');

// the entry point for the library
const input = 'src/index.js'

var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]

var config = []

MODE.map((m) => {
    var conf = {
        input: input,
        output: {
            // name of your package
            name: "nucat",
            file: `dist/index.${m.fomart}.js`,
            format: m.fomart,
            exports: "auto"
        },
        // this externalizes react to prevent rollup from compiling it
        external: ["react", /@babel\/runtime/],
        plugins: [
            // these are babel comfigurations
            babel({
                exclude: 'node_modules/**',
                plugins: ['@babel/transform-runtime'],
                babelHelpers: 'runtime'
            }),
            // this adds sourcemaps
            sourcemaps(),
            // this adds support for styles
            styles({
                postcss: {
                    plugins: [
                        autoprefixer()
                    ]
                }
            })
        ]
    }
    config.push(conf)
})

export default [
  ...config,
]
