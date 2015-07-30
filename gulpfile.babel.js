import gulp   from 'gulp';
import babel  from 'babel/register';
import eslint from 'gulp-eslint';
import mocha  from 'gulp-mocha';

gulp.task('lint', () => {
  return gulp.src(['./jsxml.js', './test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('default', ['lint', 'test']);
