const gulp        = require('gulp');
const bs          = require("browser-sync").create('My Server');
const sass        = require('gulp-sass')(require("node-sass"));

bs.init({ server: true, });

gulp.task("sass", function () {
  return gulp
    .src("css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
    .pipe(bs.stream());
});

gulp.task(
  "serve",
  gulp.series("sass", function () {
    console.log(123123);
    gulp.watch("css/*.scss", gulp.series("sass"));
    bs.watch(["*.html", "css/*", "js/*"]).on("change", bs.reload);
  })
);

gulp.task('default', gulp.series('serve'));
