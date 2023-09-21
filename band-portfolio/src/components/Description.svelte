<script>
	import { twMerge } from 'tailwind-merge'

	const classes = twMerge(
		'text-base /*sm:text-lg*/ md:text-lg /*lg:text-2xl*/ max-w-lg',
		$$props.class
	)
</script>

<!-- <h1 class="text-base /*sm:text-lg*/ md:text-lg /*lg:text-2xl*/ max-w-lg {$$props.class} ">
	<slot />
</h1> -->

<p class={classes}>
	<slot />
</p>

<style>
</style>
