export default function(moduleOptions) {
	const options = {
		...moduleOptions,
		...this.options.headlessCMS
	}
	console.log(options);
}

module.exports.meta = require('./package.json')