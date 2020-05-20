import { resolve, join } from "path"

export default function(moduleOptions) {
	const options = {
		...moduleOptions,
		...this.options.smitNuxtModule
	}

	if (!options.headlessCMS) options.headlessCMS = 'contentful';

	this.addPlugin({
		src: resolve(__dirname, 'debug.ts'),
		fileName: join(options.headlessCMS, 'debug.ts'),
		options
	})

	this.addPlugin({
		src: resolve(__dirname, 'plugins/global.ts'),
		fileName: join(options.headlessCMS, 'plugins/global.ts'),
		options
	})
}

module.exports.meta = require('./package.json')