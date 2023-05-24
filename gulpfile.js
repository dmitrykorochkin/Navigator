let preprocessor = 'sass',
  fileswatch = 'html,htm,txt,json,md,woff2',
  baseDir = 'src',
  imageswatch = 'jpg,jpeg,png,webp,svg',
  online = true;

let paths = {

  styles: {
    src: baseDir + '/blocks/**/style.*',
    dest: baseDir + '/css',
  },

  images: {
    src: baseDir + '/original-img/**/*',
    dest: baseDir + '/img',
  },

  cssOutputName: 'style.css',

}

// LOGIC
const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: baseDir + '/'
    },
    notify: false,
    online: online
  })
}

function styles() {
  return (src(paths.styles.src)
      .pipe(eval(preprocessor)())
      .pipe(concat(paths.cssOutputName))
      .pipe(autoprefixer({
          cascade: false,
          overrideBrowserslist: ["last 10 versions"]
        }))
      // .pipe(cleanCss())
      .pipe(src(paths.styles.src))
      .pipe(concat(paths.cssOutputName))
      .pipe(dest(paths.styles.dest))
      .pipe(browserSync.stream()) );
}

function images() {
  return src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin())
    .pipe(dest(paths.images.dest))
}

function cleanimg() {
  return del('' + paths.images.dest + '/**/*', {
    force: true
  })
}

function startwatch() {
  watch(baseDir + '/blocks/**/*', {
    usePolling: true
  }, styles);
  watch(baseDir + '/original-img/**/*.{' + imageswatch + '}', {
    usePolling: true
  }, images);
  watch(baseDir + '/**/*.{' + fileswatch + '}', {
    usePolling: true
  }).on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.assets = series(styles, images);
exports.styles = styles;
exports.images = images;
exports.images = cleanimg;
exports.default = parallel(images, styles, browsersync, startwatch);