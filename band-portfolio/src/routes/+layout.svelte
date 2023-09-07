<script lang="ts">
	// import "../fonts.css"
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<!-- <h1 class="text-3xl font-bold underline">
  Hello world!
</h1> -->

<slot />

<style>
	* {
		font-family: 'Homenaje';
	}
	:global(body) {
		/*DARK THEME */
		/* background-color: rgba(5, 19, 24, 0.95);
        color: rgba(243 ,247 ,248 ,0.95); */
		/* LIGHT THEME */
		background-color: rgba(255, 255, 255, 1);
		color: rgba(5, 19, 24, 0.95);
		display: flex;
		justify-content: center;
		padding: 8px;
	}
</style>
