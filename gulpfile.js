var gulp= require('gulp');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var sass = require('gulp-sass');
var sync= require('browser-sync');
var reload=sync.reload;

gulp.task('scripts',function(){
console.log("working");
gulp.src(['app/js/**/*.js','app/js/**/*.min.js'])
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(reload({stream:true}));

});
gulp.task('build-css', function(){
    return gulp.src('app/media/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/public/assets/stylesheets'));
});
gulp.task('html',function(){
 console.log("HTML working");
 gulp.src('app/index.html')
     .pipe(reload({stream:true}));

});
gulp.task('watch',function () {
 gulp.watch('app/js/**/*.js',['scripts']);
 gulp.watch('app/index.html',['html']);
});


gulp.task('build:create',function(){
return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'))

});

gulp.task('sync',function () {
 sync({
  server:{
   baseDir:"./app/"
  }
 });
});
gulp.task('default',['scripts','html','build-css','sync','watch']);



