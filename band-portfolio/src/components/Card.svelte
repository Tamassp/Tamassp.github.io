<script>
	import { twMerge } from 'tailwind-merge'

	const classes = twMerge('h-full w-full block border-l border-b border-gray-200', $$props.class)
</script>

<!-- Card -->
<a href="" class={classes}>
	<slot />
</a>
