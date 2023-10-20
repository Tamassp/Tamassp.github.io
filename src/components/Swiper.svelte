<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import Header from './Header.svelte'
	import ProjectCard from './ProjectCard.svelte'
	import Checkbox from './Checkbox.svelte'
	import Divider from './Divider.svelte'

	type Project = {
		bulletPoints: string[]
		demoOrientation?: 'portrait' | 'landscape' | 'square'
		demoSrc?: string
		demoLink?: string
		description?: string
		icons?: string[]
		inProgress?: boolean
		filterTag: string
		gitHubLink?: string
		projectColor?: string
		subTitle: string
		title: string
		year?: string
	}

	export let title = ''
	export let projects: Project[] = []
	export let innerWidth = 0
	export let innerHeight = 0
	export let filter = false


	function onProjectCardClick(title: string, description: string) {
		// console.log('title', title || 'no title')
		// console.log('description', description || 'no description')
	}

	let filteredProjects: Project[] = projects
	let frontendCheck: boolean = true
	let XRCheck: boolean = true


	let activeFilters = ['frontend', 'xr/unity']

	$: activeFilters = [frontendCheck ? 'frontend' : '', XRCheck ? 'xr/unity' : '']

	$: filteredProjects = projects.filter((project) => {
		if(project)
			return activeFilters.includes(project.filterTag)
	})

</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if projects.length > 0}
	<div class="relative wrapper">
		<div class="flex flex-row gap-2">
			<Header>{title}</Header>
			{#if innerWidth > 1024}
			<Divider size={64}/>
			{:else}
			<Divider/>
			{/if}
			
			{#if filter}
			<Divider />
			<!-- Create components for these-->
			<input type="checkbox" bind:checked={frontendCheck} />
			<input type="checkbox" bind:checked={XRCheck} />
			{/if}
		</div>
		<div class="flex pt-2 /*-m-2 -ml-6 -mr-6 overflow-x-auto sm:-ml-8 sm:-mr-0 pr-8">
			{#each filteredProjects as project, i}
				<ProjectCard
					id = {i.toString()}
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
	<Divider/>
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
