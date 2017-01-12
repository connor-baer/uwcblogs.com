// ==== DEFAULT ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp        = require('gulp'),
    runSequence = require('run-sequence')
;


// 1. Default
// 2. Setup
// 3. Build
// 4. Dist


// 1. Default //

// Default task chain: build -> (livereload or browsersync) -> watch
gulp.task('default', ['watch']);


// 2. Setup //

// Setup task chain: update -> icons -> default.
gulp.task('setup', function(callback) {
  runSequence('update', 'icons',
  [
    'default'
  ],
  callback);
});


// 3. Build //

// Run all tasks needed for a build in defined order.
gulp.task('build', function(callback) {
  runSequence('clean',
  [
    'styles',
    'scripts'
  ],
  'amp',
  callback);
});


// 4. Dist //

// Dist task chain: setup -> default -> built -> revisions.
gulp.task('dist', function(callback) {
  runSequence('setup',
  [
    'revisions'
  ],
  callback);
});
