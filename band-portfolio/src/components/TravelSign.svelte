<script lang="ts">
	import { draw } from 'svelte/transition'
</script>

<!-- <svg
	id="travelSign"
	xmlns="http://www.w3.org/2000/svg"
	width="320"
	height="256"
	viewBox="0 0 64 64"
	fill="none"
	class="/*ml-[calc(20%-144px)] mt-32"
>
	<path
		transition:draw={{ delay: 300, duration: 600 }}
		d="M28 32V56"
		stroke="black"
		stroke-width="0.5"
	/>
	<path
		transition:draw={{ delay: 0, duration: 600 }}
		d="M2 32V8H48L62 20L48 32Z"
		stroke="black"
		stroke-width="0.5"
	/>
	<text x="7" y="24" font-family="/*Transport" font-size="10" fill="black">My Story</text>
</svg> -->

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
	<text x="18" y="64" font-family="/*Transport" font-size="48" fill="black">My Story</text>
</svg>
<!-- <svg xmlns="http://www.w3.org/2000/svg" width="2" height="96" viewBox="0 0 2 96" fill="none">
	
</svg> -->
