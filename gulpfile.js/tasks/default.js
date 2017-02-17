// ==== DEFAULT ==== //

const gulp     = require('gulp'),
      sequence = require('run-sequence')
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
gulp.task('setup', (callback) => {
  sequence('update', 'icons',
  [
    'default'
  ],
  callback);
});


// 3. Build //

// Run all tasks needed for a build in defined order.
gulp.task('build', (callback) => {
  sequence('clean',
  [
    'styles',
    'scripts'
  ],
  'amp',
  callback);
});


// 4. Dist //

// Dist task chain: setup -> default -> built -> revisions.
gulp.task('dist', (callback) => {
  sequence('setup',
  [
    'revisions'
  ],
  callback);
});
