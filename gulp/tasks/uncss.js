// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, plumber, notify, cleanCss, postCss, uncss } = plugins;
const { dist, scss } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
    clean: {
        level: 2,
    },
};

// Task
export const uncssTask = () => {
    return gulp
        .src(`${scss.dist}/main.min.css`, { allowEmpty: true }) // source files
        .pipe(plumber(config.plumber))
        .pipe(
            postCss([
                uncss({
                    html: [`${dist}/**/*.html`],
                    media: ['print'],
                    ignore: [],
                }),
            ]),
        ) // pipe
        .pipe(cleanCss(config.clean))
        .pipe(gulp.dest(scss.build)); // output
};
