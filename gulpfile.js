/*
* Para trabajar con gulp.
* Boris Hernández.
* http://www.cajonarioum.cl
*/

//Dependencias - - -
var gulp 		= require('gulp'),
	concat 		= require('gulp-concat'),
	uglify 		= require('gulp-uglify'),
	notify 		= require('gulp-notify'),
	livereload 	= require('gulp-livereload'),
	rename 		= require('gulp-rename');

//Tareas - - - - - -
gulp.task('js', function () {
	return gulp.src('src/*.js')
	.pipe(uglify())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('demo/js'))
	.pipe(notify({ message: 'js listo!'}));
});

gulp.task('libs', function () {
	return gulp.src('src/js/libs/*.js')
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(gulp.dest('dist/assets/js/libs/'))
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['js']);
	gulp.watch('src/js/libs/*.jss', ['libs']);
	gulp.watch('src/images/**/*', ['images']);

	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('default', ['js', 'libs', 'watch']);