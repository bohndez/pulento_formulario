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
	return gulp.src('src/PulentoFormulario.js')
	.pipe(uglify())
	.on("error", notify.onError("<%= error.message %>"))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('demo/js'))
	.pipe(gulp.dest('src'))
	.pipe(notify({ message: 'js listo!'}));
});

gulp.task('watch', function() {
	gulp.watch('src/*.js', ['js']);

	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('default', ['js', 'watch']);