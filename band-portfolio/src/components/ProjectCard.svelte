<script lang="ts">
	import TypeScriptIcon from '../icons/TypeScriptIcon.svelte'
	import Card from './Card.svelte'
	import Description from './Description.svelte'
	import Divider from './Divider.svelte'
	import Title from './Title.svelte'
	import TitleDescription from './TitleDescription.svelte'

	const cardWidth = 'max-w-xs min-w-[75vw] sm:min-w-[320px] md:min-w-[356px]'
	const portraitHeight = 200
	const landscapeHeight = 112

	export let title = ' '
	export let subTitle = ' '
	export let bulletPoints: string[] = []
	export let description = ' '
	export let demoOrientation: 'portrait' | 'landscape' = 'portrait'
</script>

<Card class="relative {cardWidth} p-0 /*sm:min-w-min shadow-md {$$props.class}">
	{#if demoOrientation == 'portrait'}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[200px] aspect-[9/16]">
			<img src="src/images/khIntro.gif" alt="thumbnail gif" />
		</div>
	{:else}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[80px] sm:h-[100px] aspect-[16/9]">
			<img src="src/images/bprDemo.gif" alt="thumbnail gif" />
		</div>
	{/if}
	<div class="w-full h-2 bg-primary" />
	<div
		class="flex flex-col justify-center p-4 pt-8 md:p-8 md:pb-4 
		/*max-w-[calc(100%-{(portraitHeight * 9) / 16}px)]
		/*max-w-[calc(100%-50px)]"
	>
		<TitleDescription
			{title}
			{subTitle}
			{bulletPoints}
			{description}
			titleStyles="max-w-[calc(100%-100px)] md:max-w-[calc(100%-64px)] "
			subTitleStyles="max-w-[calc(100%-100px)] md:max-w-[calc(100%-64px)]  font-normal"
		/>
		<Divider size={24} />
		<div class="flex justify-between w-full gap-4">
			<div class="flex justify-start gap-2">
				<TypeScriptIcon />
				<TypeScriptIcon />
				<TypeScriptIcon />
				<TypeScriptIcon />
			</div>
			<div class="flex flex-row justify-end">
				<Description class="mt-2">2022-2023</Description>
			</div>
		</div>
	</div>
</Card>
