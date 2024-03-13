// Base
import gulp from 'gulp';
import fs from 'fs-extra';

export default {
	isDev: !process.argv.includes('--build'),
	// Base
	gulp,
	fs,
};
