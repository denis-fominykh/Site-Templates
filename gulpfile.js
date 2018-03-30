var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');

gulp.task('less', function () {
	gulp.src('./src/styles/**/style.less')
			.pipe(less())
			.pipe(gulp.dest('./dist/css/'));
});

gulp.task('less:watch', function () {
	gulp.watch('./src/styles/**/style.less', ['less']);
});

gulp.task('sass', function () {
	gulp.src('./src/styles/**/style.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/styles/**/style.scss', ['sass']);
});
