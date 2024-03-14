// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, isDev, browserSync, noop, plumber, notify, ttf2woff2 } = plugins;
const { font } = paths;

// Config
const config = {
	plumber: {
		errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
	},
};

// Task
export const fontsTask = () => {
	return (
		gulp
			.src(font.woff2) // woff2 files
			.pipe(plumber(config.plumber))
			.pipe(isDev ? gulp.dest(font.output) : gulp.dest(font.build)) // output woff2

			// ttf files
			.pipe(gulp.src(font.ttf)) // ttf files
			.pipe(ttf2woff2()) // conversion ttf to woff2
			.pipe(isDev ? gulp.dest(font.output) : gulp.dest(font.build)) // output

			// browser reload
			.pipe(isDev ? browserSync.stream() : noop())
	);
};
