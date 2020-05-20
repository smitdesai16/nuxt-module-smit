const options = JSON.parse(`<%= JSON.stringify(options) %>`)

export default ({ app }: { app: any }, inject: any) => {
	inject('name', (): string => {
		return 'smit desai'
	});

	inject('globalMethod', {
		get(): string {
			return 'globalMethod get got called';
		}
	});
}