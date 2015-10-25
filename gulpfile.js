var gulp = require ('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssnext = require('cssnext'),
	precss = require('precss');


gulp.task('css', function(){
	var processors = [
	autoprefixer({browsers: ['last 1 version']}),
	cssnext,
	precss
	];
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
	});

gulp.task('default', function(){
	console.log("Hello, PostCSS!");
	});