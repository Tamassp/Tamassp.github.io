<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import Header from './Header.svelte'
	import ProjectCard from './ProjectCard.svelte'

	type Project = {
		bulletPoints: string[]
		demoOrientation?: 'portrait' | 'landscape' | 'square'
		demoSrc?: string
		description?: string
		icons?: string[]
		inProgress?: boolean
		projectColor?: string
		subTitle: string
		title: string
		year?: string
	}

	export let title = ''
	export let projects: Project[] = []
	export let innerWidth = 0
	function onProjectCardClick(title: string, description: string) {
		console.log('title', title || 'no title')
		console.log('description', description || 'no description')
	}
</script>

{#if projects.length > 0}
	<div class="relative wrapper">
		<Header>{title}</Header>
		<div class="flex pt-2 /*-m-2 -ml-6 -mr-6 overflow-x-auto sm:-ml-8 sm:-mr-0 pr-2">
			{#each projects as project, i}
				<ProjectCard
					class="mt-6 ml-6 mr-6 mb-9 sm:ml-8"
					{...project}
					onCardClick={onProjectCardClick(project.title, project.description || '')}
				/>
			{/each}
		</div>
		{#if innerWidth > 640}
			<div class="absolute right-0 w-16 pointer-events-none bottom-5 top-8 fader" />
			<div class="absolute w-16 rotate-180 pointer-events-none -left-8 bottom-5 top-8 fader" />
		{/if}
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

	.fader {
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
		/* background-color: aqua; */
	}
</style>
