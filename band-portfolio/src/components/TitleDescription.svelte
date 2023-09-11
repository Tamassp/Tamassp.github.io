<script lang="ts">
	import Description from './Description.svelte'
	import Header from './Header.svelte'
	import SubHeader from './SubHeader.svelte'

	export let title = ''
	export let description = ''
	export let subTitle = ''
	export let bulletPoints: string[] = []

	export let titleStyles = ''
	export let subTitleStyles = ''
	export let descriptionStyles = ''
</script>

<Header>{title}</Header>
{#if subTitle}
	<Description class="font-bold mt-4 {subTitleStyles}">{subTitle}</Description>
{/if}
{#if bulletPoints.length > 0}
	<div class="{subTitle ? 'mt-2' : 'mt-4'} ">
		{#each bulletPoints as bulletPoint}
			<div class="flex items-start">
				<div class="w-2 h-2 mt-2 mr-2 rounded-full bg-background md:mt-3" />
				<Description class="max-w-xs">{bulletPoint}</Description>
			</div>
		{/each}
	</div>
{/if}
{#if description}
	<Description class="max-w-xs mt-4">{description}</Description>
{/if}
