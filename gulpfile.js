var gulp = require ('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssnext = require('cssnext'),
	precss = require('precss'),
	color_rgba_fallback = require('postcss-color-rgba-fallback'),
	opacity = require('postcss-opacity'),
	pseudoelements = require('postcss-pseudoelements'),
	vmin = require('postcss-vmin'),
	pixrem = require('pixrem'),
	will_change = require('postcss-will-change');


gulp.task('css', function(){
	var processors = [
	will_change,
	autoprefixer,
//	autoprefixer({browsers: ['last 1 version']}),
//	autoprefixer({browsers:'safari >= 9, ie >= 11'}),
	cssnext,
	precss,
	color_rgba_fallback,
	opacity,
	pseudoelements,
	vmin,
	pixrem
	];
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
	});

gulp.task('default', function(){
	console.log("Hello, PostCSS!");
	});