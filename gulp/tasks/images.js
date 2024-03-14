// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';
import path from 'path';

// Destructurization of objects
const {
    gulp,
    isDev,
    browserSync,
    noop,
    plumber,
    notify,
    newer,
    flatten,
    webP,
    imageMin,
    pngQuant,
    rename,
    responsive,
} = plugins;
const { img } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
};

// Task
export const webpTask = () => {
    return (
        gulp
            .src([img.src, img.components]) // source files
            .pipe(plumber(config.plumber))
            .pipe(webP({ quality: 80 })) // Webp generation
            .pipe(flatten({ includeParents: [0, 0] })) // delete folder structure
            .pipe(
                rename((file) => {
                    file.dirname = path.join(file.dirname, file.basename);
                }),
            )
            .pipe(isDev ? newer(img.dist) : noop()) // check if the file have changed
            .pipe(isDev ? gulp.dest(img.dist) : gulp.dest(img.build)) // output

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
