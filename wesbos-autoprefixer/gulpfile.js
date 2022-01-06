var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles',function() {
    return gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
})

gulp.task('watch',function(){
    return gulp.watch('css/styles.css', ['styles']);
})