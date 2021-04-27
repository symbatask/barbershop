let{src,dest}=require('gulp')
let gulp=require('gulp')
let browsersync=require('browser-sync').create();
let sass=require('gulp-sass')

function browserSync(){
browsersync.init({

    server:{
       baseDir:"./dist"
    },
    port:3000
})
}
function html(){
    return src('./src/*.html')
        .pipe(dest('./dist/'))
        .pipe(browsersync.stream())
}
function css(){
    return src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(dest('./dist/css/'))
        .pipe(browsersync.stream())
}
function watchFiles(){
     gulp.watch(['./src/**/*.html'],html)
    gulp.watch(['./src/**/*.scss'],css)
}

let build =gulp.series(html,css)
let watch = gulp.parallel(build,watchFiles,browserSync)

exports.html=html
exports.css=css
exports.watchFiles=watchFiles
exports.build=build
exports.watch=watch;
exports.default=watch;

