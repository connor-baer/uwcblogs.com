// ==== WATCH ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp   = require('gulp'),
    config = require('../../gulpconfig').watch
;


// Start browsersync task and then watch files for changes.
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.styles,  ['styles']);
  gulp.watch(config.scripts, ['scripts']);
});
