<script lang="ts">
	import Header from './Header.svelte'
	import ProjectCard from './ProjectCard.svelte'

	type Project = {
		title: string
		subTitle: string
		bulletPoints: string[]
		demoOrientation?: 'portrait' | 'landscape'
	}

	export let title = ''
	export let projects: Project[] = []
</script>

{#if projects.length > 0}
	<div class="wrapper">
		<Header>{title}</Header>
		<div class="flex pt-2 -m-2 -ml-3 overflow-x-auto sm:-ml-8 ">
			{#each projects as project}
				<ProjectCard
					class="m-6 ml-3 sm:ml-8"
					title={project.title}
					subTitle={project.subTitle}
					bulletPoints={project.bulletPoints}
					demoOrientation={project.demoOrientation}
				/>
			{/each}
		</div>
	</div>
{/if}
