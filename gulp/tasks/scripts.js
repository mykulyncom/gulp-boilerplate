// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const {
    gulp,
    isDev,
    browserSync,
    noop,
    plumber,
    notify,
    TerserPlugin,
    babel,
    uglify,
    webpackStream,
} = plugins;
const { js } = paths;

// Config
const config = {
    plumber: {
        errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
    },
    webpack: {
        mode: isDev ? 'development' : 'production',
        output: {
            filename: 'bundle.js',
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            comments: false,
                        },
                    },
                },
                {
                    test: /\.js$/,
                    use: 'glob-import-loader',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    },
};

// Task
export const scriptsTask = () => {
    return (
        gulp
            .src(`${js.src}/main.js`, { sourcemaps: isDev }) // source files
            .pipe(plumber(config.plumber))
            .pipe(webpackStream(config.webpack)) // webpack settings
            .pipe(babel()) // use next generation js with babel
            .pipe(isDev ? noop() : uglify()) // minify srcipts
            .pipe(isDev ? gulp.dest(js.dist) : gulp.dest(js.build)) // output js

            // browser reload
            .pipe(isDev ? browserSync.stream() : noop())
    );
};
