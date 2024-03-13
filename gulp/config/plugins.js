// base
import gulp from 'gulp';
import fs from 'fs-extra';
import browserSync from 'browser-sync';
import noop from 'gulp-noop';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

// html/pug
import gulpPug from 'gulp-pug';

// styles
import gsass from 'gulp-sass';
import * as sass from 'sass';
import postCss from 'gulp-postcss';
import autoPrefixer from 'autoprefixer';
import smq from 'postcss-sort-media-queries';
import cleanCss from 'gulp-clean-css';
import sourceMaps from 'gulp-sourcemaps';
import uncss from 'postcss-uncss';
import sassGlob from 'gulp-sass-glob';

export default {
	isDev: !process.argv.includes('--build'),

	// base
	gulp,
	fs,
	browserSync,
	noop,
	rename,
	plumber,
	notify,

	// html/pug
	gulpPug,

	// styles
	gsass,
	sass,
	postCss,
	autoPrefixer,
	smq,
	cleanCss,
	sourceMaps,
	uncss,
	sassGlob,
};
