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
};
