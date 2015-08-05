var gulp 			= require('gulp'),
	util 			= require('gulp-util'),
	connect 		= require('gulp-connect'),
	watch 			= require('gulp-watch'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	include 		= require('gulp-include'),
	closure			= require('gulp-closure-compiler'),
	htmlmin			= require('gulp-htmlmin'),
	runSequence		= require('run-sequence')
	gif				= require('gulp-if'),
	template		= require('gulp-template'),
	filter 			= require('gulp-filter');

debug = false;

gulp.task('webserver', function()
{
	connect.server({
		livereload: true,
		root: ['build']
	});
});

gulp.task('livereload', function()
{
	gulp.src(['build/**/*.*'])
		.pipe(watch('build/**/*'))
		.pipe(connect.reload());
});

gulp.task('sass', function()
{
	var compressed = debug ? 'compressed' : 'expanded';
	gulp.src('src/styles/main.scss')
		.pipe(sass(
			{
				outputStyle: compressed
			}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('build/styles'));
});

gulp.task('closure', function()
{
	return gulp.src("build/scripts/main.js")
		.pipe(gif(debug, closure({
			compilerPath: 'node_modules/gulp-closure-compiler/jar/compiler.jar',
			fileName: 'main.js',
			continueWithWarnings: true,
			maxBuffer: 2000,
			compilerFlags:
			{
				compilation_level: 'SIMPLE',
				warning_level: 'QUIET'
			}
		})))
		.pipe(gulp.dest('build/scripts'));
})

gulp.task('includeJS', function()
{
	return gulp.src("src/scripts/main.js")
		.pipe(include()
			.on('error', util.log))
		.pipe(gulp.dest("build/scripts"));
});

gulp.task('javascript', function()
{
	runSequence('includeJS', 'closure');
});

gulp.task('html', function()
{
	gulp.src('src/index.html')
		.pipe(include()
			.on('error', util.log))
		.pipe(gif(debug, htmlmin(
		{
			removeComments: true,
			collapseWhitespace: true,
			removeOptionalTags: true,
			minifyJS: true
		})))
		.pipe(gulp.dest('build/'));
});

gulp.task('images', function()
{
	gulp.src('src/images/**/*.*')
		.pipe(gulp.dest('build/images'));
});

gulp.task('assets', function()
{
	gulp.src('src/assets/**/*.*')
		.pipe(gulp.dest('build/assets'));
});

gulp.task('watch', function()
{
	gulp.watch('src/styles/**/*.*', 	['sass']);
	gulp.watch('src/scripts/**/*.*', 	['javascript']);
	gulp.watch('src/images/**/*.*', 	['images']);
	gulp.watch('src/assets/**/*.*', 	['assets']);
	gulp.watch('src/index.html', 		['html']);
	gulp.watch('src/html/**/*.*',	 	['html']);
});

gulp.task('default', ['sass', 'javascript', 'html', 'images', 'assets', 'webserver', 'livereload', 'watch']);

gulp.task('debug', function()
{
	debug = true;
	util.log( util.colors.green('RUNNING IN DEBUG MODE') );
	gulp.start('default');
});
