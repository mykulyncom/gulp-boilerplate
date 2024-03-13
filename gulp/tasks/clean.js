// Import path and plugins
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { fs, isDev } = plugins;
const { dist, build } = paths;

export const cleanTask = async () => fs.removeSync(isDev ? dist : build);
