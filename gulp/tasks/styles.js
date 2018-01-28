var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/**/*.sass')
    .pipe(sass({ outputStyle: 'expanded', includePaths: ['node_modules'] }))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString())
      this.emit('end')
    })
    .pipe(gulp.dest('./app/temp/styles'))
})
