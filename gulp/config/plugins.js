// base
import gulp from 'gulp';
import fs from 'fs-extra';
import browserSync from 'browser-sync';
import noop from 'gulp-noop';

// html/pug
import gulpPug from 'gulp-pug';

export default {
	isDev: !process.argv.includes('--build'),
	// base
	gulp,
	fs,
	browserSync,
	noop,
	// html/pug
	gulpPug,
};
