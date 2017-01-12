// ==== REVISIONS ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp  = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    revs    = require('../../gulpconfig').revisions,
    styles  = require('../../gulpconfig').styles,
    scripts  = require('../../gulpconfig').scripts
;


// Build stylesheets from source Sass files, post-process, write source maps (for debugging) with libsass, and version the file.
gulp.task('revisions-styles', function () {
  return gulp.src(styles.dest)
  .pipe(plugins.rev())
  .pipe(gulp.dest(styles.dest))
  .pipe(plugins.rev.manifest(revs.path + revs.manifest, revs.options))
  .pipe(gulp.dest(revs.path));
});


// Minify scripts in place.
gulp.task('revisions-scripts', function(){
  return gulp.src(scripts.minify.dest)
  .pipe(plugins.rev())
  .pipe(gulp.dest(scripts.minify.dest))
  .pipe(plugins.rev.manifest(revs.path + revs.manifest, revs.options))
  .pipe(gulp.dest(revs.path));
});


// Master script task; lint -> bundle -> minify.
gulp.task('revisions', ['revisions-styles', 'revisions-scripts']);
