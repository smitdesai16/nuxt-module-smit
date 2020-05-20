<template>
	<h1>This is global tag</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
	@Prop({ default: '' }) projectStartYear: string | undefined
}
</script>

<style lang="scss" scoped>
h1 {
	color: red;
}
</style>
