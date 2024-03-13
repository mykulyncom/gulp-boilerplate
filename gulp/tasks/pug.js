// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, gulpPug, isDev } = plugins;
const { src, dist, build } = paths;

// Config
const config = {
	pretty: true,
	verbose: true,
};

// Task
export const pugTask = () => {
	return gulp
		.src(`${src}/*.pug`) // pug files
		.pipe(gulpPug(config)) // pug compiling
		.pipe(isDev ? gulp.dest(dist) : gulp.dest(build)); // output
};
