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
    imageMin: {
        progressive: true,
        svgoPlugin: [{ removeViewBox: false }],
        interlanced: true,
        optimizationLevel: 3,
        use: [pngQuant()],
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

export const imgTask = () => {
    return (
        gulp
            .src([img.src, img.components]) // source files
            .pipe(plumber(config.plumber))
            .pipe(flatten({ includeParents: [0, 0] })) // delete folder structure
            .pipe(
                rename((file) => {
                    file.dirname = path.join(file.dirname, file.basename);
                }),
            )
            .pipe(isDev ? newer(img.dist) : noop()) // check if the file have changed
            .pipe(isDev ? noop() : imageMin(config.imageMin))
            .pipe(isDev ? gulp.dest(img.dist) : gulp.dest(img.build)) // output images

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};

// https://github.com/QumiQumi/gulp-optimize-images
const sizes = [500, 868, 1092, 1380, 1700];
const sharpOptions = {
    limitInputPixels: false,
};
const compressOptions = {
    jpeg: {
        quality: 80,
        progressive: true,
    },
    png: {
        quality: 90,
        progressive: true,
        compressionLevel: 6,
    },
    webp: {
        quality: 80,
    },
};
export const resTask = () => {
    return (
        gulp
            .src([img.src, img.components]) // source directory
            .pipe(isDev ? newer(img.dist) : noop()) // check if the file have changed
            .pipe(
                responsive({
                    sharpOptions,
                    compressOptions,
                    sizes,
                }),
            ) //
            .pipe(flatten({ includeParents: [0, 0] })) // delete folder structure
            .pipe(
                rename((file) => {
                    file.dirname = path.join(
                        file.dirname,
                        file.basename
                            .replace(/-500/, '')
                            .replace(/-868/, '')
                            .replace(/-1092/, '')
                            .replace(/-1380/, '')
                            .replace(/-1700/, ''),
                    );
                }),
            )
            .pipe(isDev ? gulp.dest(img.dist) : gulp.dest(img.build)) // output images
            .pipe(webP({ quality: 80 })) // Webp generation
            .pipe(isDev ? gulp.dest(img.dist) : gulp.dest(img.build)) // output images

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
