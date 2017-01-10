// ==== AMP ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp    = require('gulp'),
    fs      = require('fs'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    config  = require('../../gulpconfig').amp
;


// Inject accelerated mobile pages CSS into the HTML head.
gulp.task('amp-css', function () {
  return gulp.src(config.cssSrc)
  .pipe(plugins.injectString.replace('@charset "UTF-8";', ''))
  .pipe(gulp.dest(config.cssDest));
});


// Inject accelerated mobile pages CSS into the HTML head.
gulp.task('amp', ['amp-css'], function () {
  var ampCSS = fs.readFileSync(config.cssSrc, 'utf8');

  return gulp.src(config.src)
  .pipe(plugins.injectString.after('style amp-custom>', ampCSS))
  .pipe(plugins.rename('base.html'))
  .pipe(gulp.dest(config.dest));
});
