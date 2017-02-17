// ==== REVISIONS ==== //

const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      revs    = require('../../gulpconfig').revisions
;


// Version the css in place.
gulp.task('revisions-styles', () => {
  return gulp.src(revs.css)
    .pipe(plugins.rev())
    .pipe(gulp.dest(revs.dest))
    .pipe(plugins.rev.manifest(revs.dest + revs.manifest, revs.options))
    .pipe(gulp.dest(revs.dest));
});


// Version the js in place.
gulp.task('revisions-scripts', () => {
  return gulp.src(revs.js)
    .pipe(plugins.rev())
    .pipe(gulp.dest(revs.dest))
    .pipe(plugins.rev.manifest(revs.dest + revs.manifest, revs.options))
    .pipe(gulp.dest(revs.dest));
});


// Master revisions task.
gulp.task('revisions', ['revisions-styles', 'revisions-scripts']);
