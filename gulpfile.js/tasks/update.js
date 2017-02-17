// ==== UPDATE ==== //

const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      config  = require('../../gulpconfig').update
;

gulp.task('update-node', () => {
  gulp.watch('./package.json').on('change', (file) => {
    plugins.update.write(file);
  });
});


// Used to get around Sass's inability to properly @import vanilla CSS; see: https://github.com/sass/sass/issues/556
gulp.task('update-styles', () => {
  return gulp.src(config.styles.src)
    .pipe(plugins.changed(config.styles.dest))
    .pipe(plugins.rename(config.styles.rename))
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('update', ['update-styles', 'update-node']);
