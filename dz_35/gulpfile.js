const gulp = require('gulp');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');


gulp.task('styles', function() {
    return gulp.src('./src/components/Main.css')
      .pipe(cleanCSS()) 
      .pipe(gulp.dest('content/css')); 
  });

  gulp.task('scripts', function() {
    return gulp.src('./src/components/Main.jsx')
      .pipe(babel({
        presets: ['@babel/preset-react'] 
      }))
      .pipe(uglify()) 
      .pipe(gulp.dest('content/js')); 
  });

  gulp.task('default', gulp.parallel('styles', 'scripts'));

