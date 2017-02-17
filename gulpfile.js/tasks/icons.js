// ==== ICONS ==== //

const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      config  = require('../../gulpconfig').icons
;


// Generate icons.
gulp.task('icons', () => {
  let htmlFilter = plugins.filter(config.favicons.html, {restore: true});
  let iconsFilter = plugins.filter(['*', '!' + config.favicons.html], {restore: true});

  return gulp.src(config.src)
    .pipe(plugins.favicons(config.favicons))
    .pipe(htmlFilter)
    .pipe(gulp.dest(config.destHtml))
    .pipe(htmlFilter.restore)
    .pipe(iconsFilter)
    .pipe(gulp.dest(config.dest));
});
