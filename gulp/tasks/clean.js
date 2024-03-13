// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { fs, isDev } = plugins;
const { dist, build } = paths;

// Task
export const cleanTask = async () => fs.removeSync(isDev ? dist : build);
