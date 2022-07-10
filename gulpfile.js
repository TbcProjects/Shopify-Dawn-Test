const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

gulp.task("sass", function () {
  return gulp
    .src("styles/theme.scss")
    .pipe(sass())
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(gulp.dest("assets"));
});

gulp.task("watch", function () {
  gulp.watch("styles/**/*.scss", gulp.series("sass"));
});
