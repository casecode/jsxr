import gulp from 'gulp';
import babel from 'babel/register';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';

gulp.task('lint', () => {
  return gulp.src(['./jsxr.js', './test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function() {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel({
          jsxPragma: 'jsxr'
        })
      }
    }));
});

gulp.task('default', ['lint', 'test']);
