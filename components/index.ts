import Vue from 'vue'
import global from './global.vue'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
Vue.component(name, {
	extends: global, props: {
		_customCounterOptions: {
			type: Object,
			default: () => ({ ...options })
		}
	}
})