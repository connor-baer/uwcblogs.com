// ==== STYLES ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    config  = require('../../gulpconfig').styles
;


// Build stylesheets from source Sass files, post-process, and write source maps (for debugging) with libsass
gulp.task('styles', function () {
  // Iterate through all builds defined in the configuration.
  return config.builds.forEach(function (build) {
    return gulp.src(build.src)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init()) // Note that sourcemaps need to be initialized with libsass
    .pipe(plugins.sass(config.libsass))
    .pipe(plugins.cssnano(config.cssnano))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(build.dest));
  });
});
