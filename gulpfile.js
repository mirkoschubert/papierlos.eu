const gulp = require('gulp')
const gc = require('gulp-clean')
const size = require('gulp-size')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const connect = require('gulp-connect')

// delete everything in the build folder
const clean = () => {
  return gulp.src('build/*', { read: false })
    .pipe(gc())
}

// copy static assets
const copyAssets = () => {
  return gulp.src('src/assets/**/*')
    .pipe(size({ title: 'Built:', showFiles: true }))
    .pipe(gulp.dest('build/assets/'))
    .pipe(connect.reload())
}

// build SASS files to (minified) CSS
const buildSass = () => {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(size({ title: 'Built:', showFiles: true }))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(connect.reload())
}

const buildPug = () => {
  return gulp.src('src/content/**/*.pug')
    .pipe(pug({
      basedir: 'src/layouts',
      data: require('./.config.json'),
      pretty: true
    }))
    .pipe(size({ title: 'Built:', showFiles: true }))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload())
}

// Server
const server = async () => {
  await connect.server({
    root: 'build',
    port: 3000,
    livereload: true
  })
}

// Watcher
const watcher = async () => {
  gulp.watch('src/assets/**/*', copyAssets)
  gulp.watch('src/sass/**/*.sass', buildSass)
  gulp.watch('src/content/**/*.pug', buildPug)
  gulp.watch('src/layouts/**/*.pug', buildPug)
}

module.exports = {
  clean,
  copyAssets,
  buildSass,
  buildPug,
  build: gulp.series(clean, gulp.parallel(copyAssets, buildPug, buildSass)),
  watch: gulp.series(clean, gulp.parallel(copyAssets, buildPug, buildSass), server, watcher)
}