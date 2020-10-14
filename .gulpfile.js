// VARIABLES & PATHS
let preprocessor = 'sass', // Preprocessor (sass, scss, less, styl)
    fileswatch   = 'html,htm,txt,json,md,woff2,php', // List of files extensions for watching & hard reload (comma separated)
    pageversion  = 'html,htm,php', // List of files extensions for watching change version files (comma separated)
    imageswatch  = 'jpg,jpeg,png,webp,svg', // List of images extensions for watching & compression (comma separated)
    online       = true, // If «false» - Browsersync will work offline without internet connection
    basename     = require('path').basename(__dirname),
    forProd      = [
					'/**',
					' * @author Alexsab.ru',
					' */',
					''].join('\n');

const { src, dest, parallel, series, watch, task } = require('gulp'),
	sass           = require('gulp-sass'),
	cleancss       = require('gulp-clean-css'),
	concat         = require('gulp-concat'),
	browserSync    = require('browser-sync').create(),
	uglify         = require('gulp-uglify-es').default,
	autoprefixer   = require('gulp-autoprefixer'),
	imagemin       = require('gulp-imagemin'),
	newer          = require('gulp-newer'),
	rsync          = require('gulp-rsync'),
	del            = require('del'),
	connect        = require('gulp-connect-php'),
	header         = require('gulp-header'),
	notify         = require('gulp-notify'),
	rename         = require('gulp-rename'),
	responsive     = require('gulp-responsive'),
	pngquant       = require('imagemin-pngquant'),
	merge          = require('merge-stream'),
	// version        = require('gulp-version-number'),
	// revAll         = require('gulp-rev-all'),
	replace        = require('gulp-replace');

if(typeof projects == 'undefined') 
	global.projects = {};
if(typeof port == 'undefined') 
	global.port = 8100;


projects.premiumcars = {

	port: ++port,

	base: basename,
	dest: basename,

	styles: {
		src:   basename + '/' + preprocessor + '/main.'+preprocessor,
		watch:    [ 
			basename + '/' + preprocessor + '/**/*.'+preprocessor, 
			basename + '/css/_*.css', 
		],
		dest:   basename + '/css',
		output: 'styles.min.css',
	},

	scripts: {
		src: [
			basename + '/js/_lazy.js',
			basename + '/js/_custom.js', // Custom scripts. Always at the end
		],
		dest:       basename + '/js',
		output:     'scripts.min.js',
	},

	code: {
		src: [
			basename  + '/**/*.{' + fileswatch + '}',
		],
	},

	forProd: [
		'/**',
		' * @author https://github.com/alexsab',
		' */',
		''].join('\n'),
}


/* premiumcars BEGIN */

// Local Server
function premiumcars_browsersync() {
	connect.server({
		port: projects.premiumcars.port,
		base: projects.premiumcars.base,
	}, function (){
		browserSync.init({
			// server: { baseDir: projects.premiumcars.base + '/' },
			proxy: '127.0.0.1:' + projects.premiumcars.port,
			notify: false,
			online: online
		});
	});
};

// Custom Styles
function premiumcars_styles() {
	return src(projects.premiumcars.styles.src)
	.pipe(eval(preprocessor)({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(concat(projects.premiumcars.styles.output))
	.pipe(autoprefixer({ grid: true, overrideBrowserslist: ['last 10 versions'] }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
	.pipe(dest(projects.premiumcars.styles.dest))
	.pipe(browserSync.stream())

};

// Scripts & JS Libraries
function premiumcars_scripts() {
	return src(projects.premiumcars.scripts.src)
	.pipe(concat(projects.premiumcars.scripts.output))
	.pipe(uglify()) // Minify js (opt.)
	.pipe(header(projects.premiumcars.forProd))
	.pipe(dest(projects.premiumcars.scripts.dest))
	.pipe(browserSync.stream())
};

function premiumcars_watch() {
	watch(projects.premiumcars.styles.watch, premiumcars_styles);
	watch(projects.premiumcars.scripts.src, premiumcars_scripts);

	watch(projects.premiumcars.code.src).on('change', browserSync.reload);
};

exports.premiumcars = parallel(premiumcars_styles, premiumcars_scripts, premiumcars_browsersync, premiumcars_watch);


/* premiumcars END */