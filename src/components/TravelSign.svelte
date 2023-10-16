<script lang="ts">
	import { draw } from 'svelte/transition'
	export let text = 'My Story'
	export let inverted = false
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="243"
	height="194"
	viewBox="0 0 243 194"
	fill="none"
	class="ml-[calc(20vw-110px)] sm:ml-[calc(20vw-100px)] -mb-8 sm:mb-8 scale-50 sm:scale-100"
>
	<path
		d="M1 97V1H185L241 49L185 97H1Z"
		stroke="black"
		stroke-width="2"
		transition:draw={{ delay: 0, duration: 600 }}
	/>
	<path
		d="M100 98V194"
		stroke="black"
		stroke-width="2"
		transition:draw={{ delay: 300, duration: 600 }}
	/>
	<text x="18" y="64" font-family="/*Transport" font-size="48" fill="black">{text}</text>
</svg>
