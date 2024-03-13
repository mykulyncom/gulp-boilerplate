const src = './src';
const dist = './dist';
const build = './build';

export default {
	src,
	dist,
	build,
	scss: {
		src: `${src}/assets/scss/**/*.scss`,
		output: `${dist}/css`,
		build: `${build}/css`,
	},
};
