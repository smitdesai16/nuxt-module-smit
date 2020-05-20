import { resolve, join } from "path"

export default function(moduleOptions) {
	const options = {
		...moduleOptions,
		...this.options.smitNuxtModule
	}

	if (!options.headlessCMS) options.headlessCMS = 'contentful';

	
	this.addPlugin({
		src: resolve(__dirname, 'debug.js'),
		fileName: join(options.headlessCMS, 'debug.js'),
		options
	})
}

module.exports.meta = require('./package.json')