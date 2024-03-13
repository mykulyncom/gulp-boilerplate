// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { browserSync } = plugins;
const { dist } = paths;

// Config
const config = {
	server: {
		baseDir: dist,
	},
	open: false,
	notify: false,
	port: 3000,
};

// Task
export const serverTask = () => {
	browserSync.init(config);
};
