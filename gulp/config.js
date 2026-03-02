import * as process from "node:process"
import dotenv from 'dotenv'
dotenv.config()

export default {
  app: {
    pug: 'src/templates/*.pug',
    styles: 'src/styles/*.{sass,scss,css}',
    scripts: ['src/js/main.js'],
    scriptsModules: 'src/js/blocks/*',
    scriptsBackend: 'src/js/js-for-backend/*',
    fonts: {
      src: 'src/fonts/**/*',
      encoding: false
    },
    img: {
      src: 'src/images/**/*',
      encoding: false
    },
    media: {
      src: 'src/media/**/*',
      encoding: false
    },
  },
  watch: {
    pug: 'src/templates/**/*.pug',
    html: 'public/*.html',
    styles: 'src/styles/**/*.{sass,scss,css}',
    scripts: 'src/js/**/*.js',
    img: 'src/images/*',
    fonts: 'src/fonts/**/*',
    media: 'src/media/**/*',
  },
  dist: {
    dist: 'public/',
    styles: 'public/css/',
    scripts: 'public/js/',
    img: 'public/images/',
    fonts: 'public/fonts/',
    media: 'public/media/',
  },
  env: (process.env.NODE_ENV || 'development').trim(),
}
