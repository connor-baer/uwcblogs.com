// ==== CLEAN ==== //

const gulp   = require('gulp'),
      del    = require('del'),
      config = require('../../gulpconfig').clean
;


// Totally wipe the compiled CSS.
gulp.task('clean-wipe-css', () => {
  return del(config.css);
});

// Totally wipe the compiled JS.
gulp.task('clean-wipe-js', () => {
  return del(config.js);
});

// Totally wipe the compiled CSS and JS to prepare for a clean build.
gulp.task('clean-wipe', ['clean-wipe-css', 'clean-wipe-js']);

// Clean out junk files after build.
gulp.task('clean-tidy', ['clean-wipe'], () => {
  return del(config.tidy);
});

gulp.task('clean', ['clean-tidy']);
