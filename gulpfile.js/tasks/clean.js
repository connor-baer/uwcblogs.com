// ==== CLEAN ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp   = require('gulp'),
    del    = require('del'),
    config = require('../../gulpconfig').clean
;


// Totally wipe the compiled CSS.
gulp.task('clean-wipe-css', function () {
  return del(config.css);
});

// Totally wipe the compiled JS.
gulp.task('clean-wipe-js', function () {
  return del(config.js);
});

// Totally wipe the compiled CSS and JS to prepare for a clean build.
gulp.task('clean-wipe', ['clean-wipe-css', 'clean-wipe-js']);

// Clean out junk files after build.
gulp.task('clean-tidy', ['clean-wipe'], function () {
  return del(config.tidy);
});

gulp.task('clean', ['clean-tidy']);
