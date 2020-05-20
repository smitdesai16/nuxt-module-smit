export default function(moduleOptions) {
	const options = {
		...moduleOptions,
		...this.options.smitNuxtModule
	}
	console.log(options);
}

module.exports.meta = require('./package.json')