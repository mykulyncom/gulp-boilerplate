// base
import gulp from 'gulp';
import fs from 'fs-extra';

// html/pug
import gulpPug from 'gulp-pug';

export default {
	isDev: !process.argv.includes('--build'),
	// base
	gulp,
	fs,
	// html/pug
	gulpPug,
};
