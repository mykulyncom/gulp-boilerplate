// Import plugins and paths
import plugins from './gulp/config/plugins.js';
import paths from './gulp/config/paths.js';

// Destructurization of objects
const { gulp } = plugins;
const { src, scss, components } = paths;

// Importing task
import { cleanTask } from './gulp/tasks/clean.js';
import { pugTask } from './gulp/tasks/pug.js';
import { serverTask } from './gulp/tasks/server.js';
import { stylesTask } from './gulp/tasks/styles.js';
import { componentsTask } from './gulp/tasks/components.js';

// Watsher
const watcher = () => {
	const watchers = [
		{ files: `${src}/**/*.pug`, task: pugTask },
		{ files: [scss.src, `${components}/**/*.scss`], task: stylesTask },
	];

	watchers.forEach(({ files, task }) => {
		gulp.watch(files, task);
	});
};

const mainTasks = gulp.parallel(pugTask, stylesTask);

const dev = gulp.series(cleanTask, mainTasks, gulp.parallel(watcher, serverTask));
export const compile = gulp.series(cleanTask, mainTasks);
export const createComponent = gulp.series(componentsTask);

gulp.task('default', dev);
