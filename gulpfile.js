const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const themekit = require("@shopify/themekit");

gulp.task("sass", function () {
  return gulp.src("styles/theme.scss").pipe(sass()).pipe(gulp.dest("assets"));
});
