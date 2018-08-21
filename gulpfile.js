var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul') //my change
var fs = require('fs');

gulp.task('default', function () {
    gulp.src('tests/**/*.js')
        .pipe(istanbul.hookRequire())
        .pipe(mocha({
          reporter: 'mocha-junit-reporter',
          reporterOptions: {
            mochaFile: './TEST-RESULTS.xml'
          }
        }))
        .pipe(istanbul.writeReports({    // my change
          dir: './coverage',
          reporters: ['cobertura', 'html', 'json'] 
        }));
});
