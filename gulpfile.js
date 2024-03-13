// Import plugins and paths
import plugins from './gulp/config/plugins.js';
import paths from './gulp/config/paths.js';

// Destructurization of objects
const { gulp } = plugins;
const { src } = paths;

// Importing task
import { cleanTask } from './gulp/tasks/clean.js';
import { pugTask } from './gulp/tasks/pug.js';
import { serverTask } from './gulp/tasks/server.js';

// Watsher
const watcher = () => {
	const watchers = [{ files: `${src}/**/*.pug`, task: pugTask }];

	watchers.forEach(({ files, task }) => {
		gulp.watch(files, task);
	});
};

const mainTasks = gulp.parallel(pugTask);

const dev = gulp.series(cleanTask, mainTasks, gulp.parallel(watcher, serverTask));

gulp.task('default', dev);
