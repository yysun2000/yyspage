import gulp from 'gulp';
import browsersync from 'browser-sync'

gulp.task("default",()=>{
  browsersync.init({
    server:{
      baseDir:"./"
    }
  })
  gulp.watch("./*.html",browsersync.reload)
  gulp.watch(".data/*.json",browsersync.reload)
})
