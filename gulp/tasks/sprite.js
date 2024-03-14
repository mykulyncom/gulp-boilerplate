// Import plugins and paths
import path from 'path';
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, isDev, browserSync, noop, plumber, notify, cheerio, replace, svgSprite, svgmin } =
    plugins;
const { sprite } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
    svgmin: {
        pretty: true,
    },
    cheerio: {
        run: ($) => {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('strole');
            $('[style]').removeAttr('style');
        },
        parserOptions: {
            xmlMode: true,
        },
    },
    sprite: {
        shape: {
            id: {
                separator: '+',
                generator: (filePath) => {
                    const fileName = path.basename(filePath);
                    return fileName.split('.')[0];
                },
            },
        },
        mode: {
            stack: {
                prefix: 'icon-%s',
                sprite: '../sprite.svg',
                render: {
                    scss: {
                        dest: '../../../src/assets/scss/sprite/_sprite.scss',
                        template: './src/assets/scss/sprite/_sprite_template.scss',
                    },
                },
                example: true,
                inline: true,
            },
        },
    },
};

// Task
export const spriteTask = () => {
    return (
        gulp
            .src([sprite.src, sprite.components]) // source files
            .pipe(plumber(config.plumber))
            .pipe(svgmin(config.svgmin)) // icon optimization
            .pipe(cheerio(config.cheerio)) // removing attributes
            .pipe(replace('>', '>'))
            .pipe(svgSprite(config.sprite)) // create sprite
            .pipe(isDev ? gulp.dest(sprite.output) : gulp.dest(sprite.build)) // output

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
