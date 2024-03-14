// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, isDev, browserSync, noop, plumber, notify, svgmin, flatten, newer } = plugins;
const { svg } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
};

// Task
export const svgTask = () => {
    return (
        gulp
            .src([svg.src, svg.components]) // source files
            .pipe(plumber(config.plumber))
            .pipe(isDev ? noop() : svgmin())
            .pipe(flatten({ includeParents: [0, 0] })) // delete folder structure
            .pipe(isDev ? newer(svg.output) : noop()) // check if the file have changed
            .pipe(isDev ? gulp.dest(svg.output) : gulp.dest(svg.build)) // output

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
