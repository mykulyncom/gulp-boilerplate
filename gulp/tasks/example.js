// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, isDev, browserSync, noop, plumber, notify } = plugins;
const { src, dist, build } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
};

// Task
export const nameTask = () => {
    return (
        gulp
            .src(src) // source files
            .pipe(plumber(config.plumber))
            .pipe(noop()) // pipe
            .pipe(isDev ? gulp.dest(dist) : gulp.dest(build)) // output

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
