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
	class="ml-[calc(20vw+60%-132px)] sm:ml-[calc(20vw+60%-135px)] -mb-8 sm:mb-8 scale-50 sm:scale-100"
>
	<path
		d="M241.537 97V1H57.5366L1.53659 49L57.5366 97H241.537Z"
		stroke="black"
		stroke-width="2"
		transition:draw={{ delay: 0, duration: 600 }}
	/>
	<path
		d="M140 98V194"
		stroke="black"
		stroke-width="2"
		transition:draw={{ delay: 300, duration: 600 }}
	/>
	<text x="48" y="64" font-family="/*Transport" font-size="48" fill="black">{text}</text>
</svg>
