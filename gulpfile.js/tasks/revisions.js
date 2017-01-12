// ==== REVISIONS ==== //

/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    revs    = require('../../gulpconfig').revisions
;


// Build stylesheets from source Sass files, post-process, write source maps (for debugging) with libsass, and version the file.
gulp.task('revisions-styles', function () {
  return gulp.src(revs.css)
  .pipe(plugins.rev())
  .pipe(gulp.dest(revs.dest))
  .pipe(plugins.rev.manifest(revs.dest + revs.manifest, revs.options))
  .pipe(gulp.dest(revs.dest));
});


// Minify scripts in place.
gulp.task('revisions-scripts', function(){
  return gulp.src(revs.js)
  .pipe(plugins.rev())
  .pipe(gulp.dest(revs.dest))
  .pipe(plugins.rev.manifest(revs.dest + revs.manifest, revs.options))
  .pipe(gulp.dest(revs.dest));
});


// Master script task; lint -> bundle -> minify.
gulp.task('revisions', ['revisions-styles', 'revisions-scripts']);
