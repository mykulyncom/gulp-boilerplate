// Import plugins and paths
import plugins from './gulp/config/plugins.js';
import paths from './gulp/config/paths.js';

// Destructurization of objects
const { gulp } = plugins;

// Importing task
import { cleanTask } from './gulp/tasks/clean.js';
import { pugTask } from './gulp/tasks/pug.js';

// Watsher
const watcher = () => {};

const dev = gulp.series(cleanTask, pugTask);

gulp.task('default', dev);
