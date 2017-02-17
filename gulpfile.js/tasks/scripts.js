// ==== SCRIPTS ==== //

const gulp    = require('gulp'),
      plugins = require('gulp-load-plugins')({ camelize: true }),
      config  = require('../../gulpconfig').scripts
;


// Check custom scripts for errors.
gulp.task('scripts-lint', () => {
  return gulp.src(config.src)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default')); // No need to pipe this anywhere.
});

// Minify scripts in place.
gulp.task('scripts-minify', ['scripts-lint'], () => {
  return gulp.src(config.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel({
        presets: ['es2015'],
      }))
    .pipe(plugins.uglify(config.minify.uglify))
    .pipe(plugins.rename(config.minify.rename))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});

// Copy JavaScript dependencies to the public assets folder.
gulp.task('scripts-deps', () => {
  return gulp.src(config.deps.src)
    .pipe(plugins.changed(config.deps.dest))
    .pipe(plugins.uglify(config.minify.uglify))
    .pipe(gulp.dest(config.deps.dest));
});

// Master script task; lint -> bundle -> minify.
gulp.task('scripts', ['scripts-deps']);
