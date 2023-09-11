<script lang="ts">
	import Header from './Header.svelte'
	import ProjectCard from './ProjectCard.svelte'

	type Project = {
		title: string
		subTitle: string
		bulletPoints: string[]
	}

	export let title = ''
	export let projects: Project[] = []
</script>

{#if projects.length > 0}
	<div class="wrapper">
		<Header>University</Header>
		<div class="flex overflow-x-auto ">
			{#each projects as project}
				<ProjectCard
					class="m-6 ml-0"
					title={project.title}
					subTitle={project.subTitle}
					bulletPoints={project.bulletPoints}
				/>
			{/each}
		</div>
	</div>
{/if}
