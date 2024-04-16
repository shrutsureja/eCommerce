import { Application } from 'express';

export default function getAPIRoutes(app: Application) {
	console.log('\n\x1b[31mAPI Routes:\x1b[0m');
	function print(path: any, layer: any) {
		if (layer.route) {
			layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
		} else if (layer.name === 'router' && layer.handle.stack) {
			layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
		} else if (layer.method) {
			const methodColor = '\x1b[33m'; // Yellow color
			const routeColor = '\x1b[35m'; // Magenta color
			const resetColor = '\x1b[0m'; // Reset color
			const layerColor = '\x1b[36m'; // Cyan color

			// Printing details
			console.log(
				`${methodColor}${layer.method.toUpperCase()}${resetColor} ${routeColor}/${path.concat(split(layer.regexp)).filter(Boolean).join('/')}${resetColor} ${layerColor}${layer.name}${resetColor}`
			);
		}
	}

	function split(thing: any) {
		if (typeof thing === 'string') {
			return thing.split('/');
		} else if (thing.fast_slash) {
			return '';
		} else {
			var match = thing
				.toString()
				.replace('\\/?', '')
				.replace('(?=\\/|$)', '$')
				.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
			return match
				? match[1].replace(/\\(.)/g, '$1').split('/')
				: '<complex:' + thing.toString() + '>';
		}
	}

	app._router.stack.forEach(print.bind(null, []));
}
