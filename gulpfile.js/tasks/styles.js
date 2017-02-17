// ==== STYLES ==== //

const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      config  = require('../../gulpconfig').styles
;


// Build stylesheets from source Sass files, post-process, write source maps (for debugging) with libsass, and version the file.
gulp.task('styles', () => {
  return gulp.src(config.src)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init()) // Note that sourcemaps need to be initialized with libsass
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.cssnano(config.cssnano))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});
