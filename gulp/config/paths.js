const src = './src';
const dist = './dist';
const build = './build';
const components = `${src}/pug`;
const assets = `${src}/assets`;

export default {
    src,
    dist,
    build,
    components,
    scss: {
        src: `${assets}/scss/**/*.scss`,
        components: `${components}/**/*.scss`,
        output: `${dist}/css`,
        build: `${build}/css`,
    },
    font: {
        ttf: `${assets}/fonts/**/*.ttf`,
        woff2: `${assets}/fonts/**/*.woff2`,
        output: `${dist}/fonts`,
        build: `${build}/fonts`,
    },
    js: {
        src: `${assets}/js`,
        components: `${components}/**/*.js`,
        output: `${dist}/js`,
        build: `${build}/js`,
    },
    svg: {
        src: `${assets}/img/**/*.svg`,
        components: `${components}/**/img/**/*.svg`,
        output: `${dist}/img`,
        build: `${build}/img`,
    },
    sprite: {
        src: `${assets}/icons/*.svg`,
        components: `${components}/**/icons/*.svg`,
        output: `${dist}/img`,
        build: `${build}/img`,
    },
};
