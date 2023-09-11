<script lang="ts">
	import Card from './Card.svelte'
	import Description from './Description.svelte'
	import Title from './Title.svelte'
	import TitleDescription from './TitleDescription.svelte'

	export let title = ' '
	export let subTitle = ' '
	export let bulletPoints: string[] = []
	export let description = ' '
</script>

<Card class="max-w-xs min-w-[80vw]  sm:min-w-min p-0 {$$props.class}">
	<div class="h-2 bg-primary" />
	<div class="flex flex-col items-center justify-center p-8">
		<TitleDescription
			{title}
			{subTitle}
			{bulletPoints}
			{description}
			subTitleStyles="font-normal"
		/>
	</div>
</Card>
