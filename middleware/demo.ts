import Middleware from '../../middleware'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

Middleware['demo'] = context => {
	const { route, store, app } = context
	console.log('Demo middleware route', route.path)
}