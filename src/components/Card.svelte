<script>
	import { twMerge } from 'tailwind-merge'

	const classes = twMerge('h-full w-full block border-l border-b border-gray-200', $$props.class)

	export let onCardClick = () => {
		// console.log('onCardClick')
	}
</script>

<!-- Card -->
<!-- <a href="" class={classes}>
	<slot />
</a> -->

<!-- on:click|self={onCardClick} 
on:keydown|self={(e) => {
		if (e.key === 'Enter') {
			console.log('hi')
		}
	}}
role="button"
tabindex="0" -->
<div class={classes}>
	<slot />
</div>
