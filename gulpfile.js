var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(reload({ stream: true }));
});

gulp.task('html', function(){
  gulp.src('*.html')
    .pipe(reload({ stream: true }));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', function() {
    gulp.run('sass');
  });

  gulp.watch('*.html', function () {
    gulp.run('html');
  });
});

gulp.task('default', function () {
  gulp.run('watch', 'browser-sync');
});