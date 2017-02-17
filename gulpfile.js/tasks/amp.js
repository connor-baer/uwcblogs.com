// ==== AMP ==== //

const gulp    = require('gulp'),
      fs      = require('fs'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      config  = require('../../gulpconfig').amp
;


// Inject accelerated mobile pages CSS into the HTML head.
gulp.task('amp-css', () => {
  return gulp.src(config.cssSrc)
    .pipe(plugins.injectString.replace('@charset "UTF-8";', ''))
    .pipe(gulp.dest(config.cssDest));
});


// Inject accelerated mobile pages CSS into the HTML head.
gulp.task('amp', ['amp-css'], () => {
  let ampCSS = fs.readFileSync(config.cssSrc, 'utf8');

  return gulp.src(config.src)
    .pipe(plugins.injectString.after('style amp-custom>', ampCSS))
    .pipe(plugins.rename('base.html'))
    .pipe(gulp.dest(config.dest));
});
