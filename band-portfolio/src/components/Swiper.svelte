<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import Header from './Header.svelte'
	import ProjectCard from './ProjectCard.svelte'

	type Project = {
		title: string
		subTitle: string
		bulletPoints: string[]
		demoOrientation?: 'portrait' | 'landscape'
		projectColor?: string
		icons?: string[]
		demoSrc?: string
	}

	export let title = ''
	export let projects: Project[] = []
</script>

{#if projects.length > 0}
	<div class="wrapper">
		<Header>{title}</Header>
		<div class="flex pt-2 -m-2 -ml-3 overflow-x-auto sm:-ml-8 ">
			{#each projects as project, i}
				<ProjectCard class="m-6 ml-3 sm:ml-8" {...project} />
			{/each}
		</div>
	</div>
{/if}

<style>
	::-webkit-scrollbar {
		width: 12px;
		height: 12px;
	}

	::-webkit-scrollbar-track {
		/* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px; */
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #c0d1eb;
		/* -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.5); */
	}
</style>
