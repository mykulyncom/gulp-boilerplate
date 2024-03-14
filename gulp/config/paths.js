const src = './src';
const dist = './dist';
const build = './build';
const components = `${src}/pug`;

export default {
	src,
	dist,
	build,
	components,
	scss: {
		src: `${src}/assets/scss/**/*.scss`,
		output: `${dist}/css`,
		build: `${build}/css`,
	},
	font: {
		ttf: `${src}/assets/fonts/**/*.ttf`,
		woff2: `${src}/assets/fonts/**/*.woff2`,
		output: `${dist}/fonts`,
		build: `${build}/fonts`,
	},
};
