var gulp = require('gulp');

var cssmin = require('gulp-cssmin');
// ファイルリネーム（.min作成用）
var rename = require('gulp-rename');
// ファイル結合
var concat = require('gulp-concat');
// js最小化
var jsmin = require('gulp-uglify');
var babel = require('gulp-babel');
// エラーでも監視を続行させる
var plumber = require('gulp-plumber');
// sass compiler
var sass = require('gulp-sass');

var cleanCss = require('gulp-clean-css');

var cmq = require('gulp-merge-media-queries');
// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

var cleanCss = require('gulp-clean-css');

// 同期的に処理してくれる（ distで使用している ）
var runSequence = require('run-sequence');
var replace = require('gulp-replace');

/*
 * transpile block editor js
 */
gulp.task('block', function () {
	return gulp.src('./inc/sns/package/block.js')
		.pipe(babel({
			plugins: ['transform-react-jsx']
		}))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./inc/sns/package'));
});

gulp.task('text-domain', function () {
	return gulp.src(['./inc/font-awesome/**/*'])
				.pipe(replace('vk_font_awesome_version_textdomain', 'vk-all-in-one-expansion-unit' ))
				.pipe(gulp.dest('./inc/font-awesome/'));
});

gulp.task('sass', function() {
	return gulp.src('./assets/_scss/*.scss',{ base: './assets/_scss' })
		.pipe(plumber())
		.pipe(sass())
		.pipe(cmq({log: true}))
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(gulp.dest('./assets/css/'));
});

/*
 * create all.min.js
 *
 * including /assets/_js/*.js
 * and transpile from ES6
 */
gulp.task('scripts', function() {
	return gulp.src([
			'./assets/_js/*.js',
			'./inc/smooth-scroll/js/smooth-scroll.js',
			'./inc/pagetop-btn/js/pagetop-btn.js'
		])
		.pipe(concat('all.min.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(jsmin())
		.pipe(gulp.dest('./assets/js'))
})

// Watch
gulp.task('watch', function() {
	gulp.watch(
		[
			'./assets/_js/*.js',
			'./inc/smooth-scroll/js/smooth-scroll.js',
			'./inc/pagetop-btn/js/pagetop-btn.js'
		],
		gulp.series('scripts')
	)
	gulp.watch('./assets/_scss/**/*.scss', gulp.series('sass'))
	gulp.watch('./inc/pagetop-btn/assets/_scss/*.scss', gulp.series('sass'))
});

// gulp.task('default', ['scripts','watch','sprite']);
gulp.task('default', gulp.series('text-domain','watch'))
gulp.task('compile', gulp.series('scripts','text-domain','scripts', 'sass'))

// copy dist ////////////////////////////////////////////////

gulp.task('copy_dist', function() {
	return gulp.src(
			[
				'./**/*.php',
				'./**/*.txt',
				'./**/*.css',
				'./**/*.scss',
				'./**/*.bat',
				'./**/*.rb',
				'./**/*.eot',
				'./**/*.svg',
				'./**/*.ttf',
				'./**/*.woff',
				'./**/*.woff2',
				'./**/*.otf',
				'./**/*.less',
				'./**/*.png',
				'./images/**',
				'./inc/**',
				'./assets/**',
				'./admin/**',
				'./languages/**',
				"!./compile.bat",
				"!./config.rb",
				"!./tests/**",
				"!./dist/**",
				"!./node_modules/**"
			],
			{ base: './' }
		)
		.pipe( gulp.dest( 'dist' ) ); // distディレクトリに出力
} );
// gulp.task('build:dist',function(){
//     /* ここで、CSS とか JS をコンパイルする */
// });

gulp.task('dist', function(cb){
	// return runSequence( 'build:dist', 'copy', cb );
	// return runSequence( 'build:dist', 'copy_dist', cb );
	return runSequence( 'copy_dist', cb );
});
