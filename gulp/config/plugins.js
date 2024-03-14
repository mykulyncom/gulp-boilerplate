// base
import gulp from 'gulp';
import fs from 'fs-extra';
import browserSync from 'browser-sync';
import noop from 'gulp-noop';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import shell from 'gulp-shell';
import yargs from 'yargs';

// html/pug
import gulpPug from 'gulp-pug';

// styles
import gsass from 'gulp-sass';
import * as sass from 'sass';
import postCss from 'gulp-postcss';
import autoPrefixer from 'autoprefixer';
import smq from 'postcss-sort-media-queries';
import cleanCss from 'gulp-clean-css';
import sourceMaps from 'gulp-sourcemaps';
import uncss from 'postcss-uncss';
import sassGlob from 'gulp-sass-glob';

// fonts
import ttf2woff2 from 'gulp-ttf2woff2';

// scripts
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import terserPlugin from 'terser-webpack-plugin';
import uglify from 'gulp-uglify';

export default {
    isDev: !process.argv.includes('--build'),

    // base
    gulp,
    fs,
    browserSync,
    noop,
    rename,
    plumber,
    notify,
    shell,
    yargs,

    // html/pug
    gulpPug,

    // styles
    gsass,
    sass,
    postCss,
    autoPrefixer,
    smq,
    cleanCss,
    sourceMaps,
    uncss,
    sassGlob,

    // fonts
    ttf2woff2,

    // scripts
    uglify,
    babel,
    webpackStream,
    terserPlugin,
};
