// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const {
    gulp,
    isDev,
    browserSync,
    noop,
    gsass,
    sass,
    postCss,
    autoPrefixer,
    smq,
    rename,
    cleanCss,
    sourceMaps,
    sassGlob,
    plumber,
    notify,
} = plugins;
const { scss } = paths;

const sassCompile = gsass(sass);

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
    sass: {
        outputStyle: 'expanded',
        silenceDeprecations: ['legacy-js-api', 'import'],
        quietDeps: true,
    },
    rename: {
        suffix: '.min',
    },
    clean: {
        level: 2,
    },
};

// Task
export const stylesTask = () => {
    const postCSSPlugins = [
        autoPrefixer(),
        smq, // sort media queries
    ];
    return (
        gulp
            .src(scss.src) // source directory
            .pipe(plumber(config.plumber))
            .pipe(isDev ? sourceMaps.init() : noop()) // init source maps
            .pipe(sassGlob()) //
            .pipe(sassCompile(config.sass)) // sass compiling
            .pipe(postCss(postCSSPlugins)) // postCSS
            .pipe(rename(config.rename)) // add suffix min to main.css
            .pipe(isDev ? noop() : cleanCss(config.clean)) // clean and minify css
            .pipe(isDev ? sourceMaps.write('../maps') : noop()) // write source maps
            .pipe(isDev ? gulp.dest(scss.dist) : gulp.dest(scss.build)) // output css

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
