<script>
	import { twMerge } from 'tailwind-merge'

	const classes = twMerge('text-3xl md:text-4xl max-w-lg', $$props.class)
</script>

<h1 class={classes}>
	<slot />
</h1>

<style>
</style>
