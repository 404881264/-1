var gulp = require("gulp");
/*
	拷贝html文件
*/
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
/*
	拷贝scss文件，编译scss
	压缩css文件的 gulp-minify-css
	重命名  gulp-rename
*/
var scss = require("gulp-sass-china");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
gulp.task("scss",function(){
	return gulp.src("stylesheet/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
/*
	拷贝js文件
	压缩js文件  gulp-uglify
*/
gulp.task("scripts", function(){
	return gulp.src(["jquery/*.js", "js/*.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})
gulp.task("build", ["copy-html", "data", "scss", "scripts", "images"], function(){
	console.log("编译成功");
})
/*
	拷贝数据
*/
gulp.task("data", function(){
	return gulp.src("*.json")
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})
/*
	拷贝图片
	压缩图片 imagemin
*/
var imagemin = require("gulp-imagemin");
gulp.task("images", function(){
	return gulp.src("images/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})
/*
	监听
*/

gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch("*.json", ["data"]);
	gulp.watch("images/**/*", ["images"]);
	gulp.watch("stylesheet/*.scss", ["scss"]);
	gulp.watch(["jquery/*.js", "js/*.js"], ["scripts"]);
})

/*
	启动服务
	gulp-connect
*/
var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 8998,
		livereload: true
	})
})


gulp.task("default", ["watch", "server"]);