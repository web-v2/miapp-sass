var gulp = require("gulp");
/*
var srcPaths ={
    html: "src/html/"
}
var distPaths ={
    html: "dist/html/"
}


gulp.task("html", function(){
    return gulp.src(srcPaths.html+"*.html")
    .pipe(gulp.dest(distPaths.html))
});

gulp.task("default", ['html'], function(){});
*/
const { src, dest } = require('gulp');

function streamTask() {
  return src('*.html')
    .pipe(dest('html'));
}

function defaultTask(cb) {
  cb();
}
exports.default = streamTask;
exports.default = defaultTask