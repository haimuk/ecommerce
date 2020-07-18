//declaration variable
const gulp = require('gulp'),
      prefix = require('gulp-autoprefixer'),
      concat = require('gulp-concat');

//html task
gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'));
});

//css task
gulp.task('css', function(){
    return gulp.src('./src/css/**/*.css')
    .pipe(prefix('last 2 versions'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build/css'));
});

//js task
gulp.task('js', function(){
    return gulp.src('./src/js/**/*.js')
    //.pipe(prefix('last 2 versions'))
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js'));
});

//fonts task
gulp.task('fonts', function(){
    return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./build/fonts'));
});

//images task
gulp.task('images', function(){
    return gulp.sc('./src/images/**/*')
    .pipe(gulp.dest('./build/images'));
});

//watch task
gulp.task('watch', function() {
    require('./server.js');
    gulp.watch('./src/**/*.html', gulp.series('html'));
    gulp.watch('./src/css/**/*.css', gulp.series('css'));
    gulp.watch('./src/js/**/*.JS', gulp.series('js'));
    gulp.watch('./src/fonts/**/*', gulp.series('fonts'));
    gulp.watch('./src/images/**/*', gulp.series('images'));
});