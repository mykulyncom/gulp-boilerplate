// Import plugins and paths
import plugins from '../config/plugins.js';
import paths from '../config/paths.js';

// Destructurization of objects
const { gulp, shell, yargs, plumber, notify } = plugins;
const { components } = paths;

// Config
const config = {
	plumber: {
		errorHandler: notify.onError((error) => 'Error: <%= error.message %>'),
	},
};

const { argv } = yargs(process.argv.slice(2));

// Task
export const componentsTask = () => {
	const componentName = argv.add || '';
	return gulp
		.src('.') // source files
		.pipe(plumber(config.plumber))
		.pipe(
			shell(
				[
					`mkdir -p ${components}/${componentName}/img`,
					`mkdir -p ${components}/${componentName}/icons`,
					`touch ${components}/${componentName}/img/.gitkeep`,
					`touch ${components}/${componentName}/icons/.gitkeep`,
					`touch ${components}/${componentName}/${componentName}.js`,
					`touch ${components}/${componentName}/${componentName}.pug`,
					`touch ${components}/${componentName}/_${componentName}.scss`,
					`echo "Created component ${components}/${componentName}"`,
				],
				{ templateData: { add: componentName } },
			),
		);
};
