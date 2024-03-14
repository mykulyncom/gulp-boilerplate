// Import plugins and paths
import plugins from './gulp/config/plugins.js';
import paths from './gulp/config/paths.js';

// Importing task
import { cleanTask } from './gulp/tasks/clean.js';
import { pugTask } from './gulp/tasks/pug.js';
import { serverTask } from './gulp/tasks/server.js';
import { stylesTask } from './gulp/tasks/styles.js';
import { componentsTask } from './gulp/tasks/components.js';
import { fontsTask } from './gulp/tasks/fonts.js';
import { uncssTask } from './gulp/tasks/uncss.js';
import { scriptsTask } from './gulp/tasks/scripts.js';
import { svgTask } from './gulp/tasks/svg.js';

// Destructurization of objects
const { gulp } = plugins;
const { src, scss, font, js, svg } = paths;

// Watsher
const watcher = () => {
    const watchers = [
        { files: `${src}/**/*.pug`, task: pugTask },
        { files: [scss.src, scss.components], task: stylesTask },
        { files: [font.ttf, font.woff2], task: fontsTask },
        { files: [`${js.src}/**/*.js`, js.components], task: scriptsTask },
        { files: [svg.src, svg.components], task: svgTask },
    ];

    watchers.forEach(({ files, task }) => {
        gulp.watch(files, task);
    });
};

const mainTasks = gulp.parallel(pugTask, stylesTask, fontsTask, scriptsTask, svgTask);

const dev = gulp.series(cleanTask, mainTasks, gulp.parallel(watcher, serverTask));
export const build = gulp.series(cleanTask, mainTasks, uncssTask);
export const compile = gulp.series(cleanTask, mainTasks);
export const createComponent = gulp.series(componentsTask);

gulp.task('default', dev);
