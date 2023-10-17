<script lang="ts">
	import { quintOut } from "svelte/easing";
	import { draw } from 'svelte/transition'
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="40"
	height="40"
	viewBox="0 0 40 40"
	fill="none"
	class=" {$$props.class}"
>
	<path
		d="M38.4 19.2018H4.66241L13.1328 10.7298L12.0016 9.59863L1.60001 20.0018L12 30.4018L13.1312 29.2706L4.66241 20.8018H38.4V19.2018Z"
		
		stroke-width="0.7"
		stroke="black"
		transition:draw={{ delay: 0, duration: 3000, easing: quintOut }}
	/>
</svg>
