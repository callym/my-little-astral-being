var gulp 			= require('gulp'),
	connect 		= require('gulp-connect'),
	watch 			= require('gulp-watch'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	include 		= require('gulp-include');

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: ['build']
	});
});

gulp.task('livereload', function() {
	gulp.src(['build/**/*.*'])
		.pipe(watch('build/**/*'))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
	gulp.src('src/styles/main.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('build/styles'));
});

gulp.task('javascript', function() {
	gulp.src("src/scripts/main.js")
		.pipe(include())
			.on('error', console.log)
		.pipe(gulp.dest("build/scripts"));
});

gulp.task('html', function() {
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('build/'));
});

gulp.task('images', function() {
	gulp.src('src/images/**/*.*')
		.pipe(gulp.dest('build/images'));
});

gulp.task('watch', function() {
	gulp.watch('src/styles/**/*.*', ['sass']);
	gulp.watch('src/scripts/**/*.*', ['javascript']);
	gulp.watch('src/images/**/*.*', ['images']);
	gulp.watch('src/**/*.html', ['html']);
})

gulp.task('default', ['sass', 'javascript', 'html', 'images', 'webserver', 'livereload', 'watch']);
