var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['build']
  });
});

gulp.task('livereload', function() {
  gulp.src(['build/styles/*.css', 'build/scripts/*.js'])
    .pipe(watch('build/**/*'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('src/styles/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('build/styles'));
});

gulp.task('javascript', function() {
  gulp.src('src/scripts/*.js')
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('html', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.*', ['sass']);
  gulp.watch('src/scripts/**/*.*', ['javascript']);
  gulp.watch('src/**/*.html', ['html']);
})

gulp.task('default', ['sass', 'javascript', 'html', 'webserver', 'livereload', 'watch']);
