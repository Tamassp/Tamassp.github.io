<script lang="ts">
	import type { SvelteComponent } from 'svelte'
	import Card from './Card.svelte'
	import Description from './Description.svelte'
	import Divider from './Divider.svelte'
	import Title from './Title.svelte'
	import TitleDescription from './TitleDescription.svelte'
	import TypeScriptIcon from '../icons/TypeScriptIcon.svelte'
	import JavaScriptIcon from '../icons/JavaScriptIcon.svelte'
	import ReactIcon from '../icons/ReactIcon.svelte'

	const cardWidth = 'max-w-xs min-w-[75vw] sm:min-w-[320px] md:min-w-[356px]'
	const portraitHeight = 200
	const landscapeHeight = 112

	export let title = ' '
	export let subTitle = ' '
	export let bulletPoints: string[] = []
	export let description = ' '
	export let demoOrientation: 'portrait' | 'landscape' = 'portrait'
	export let projectColor = 'bg-background'
	export let icons: any[] = []
	export let demoSrc = ''

	let mdOffset = 0
	let smOffset = 0
	if (demoOrientation == 'portrait') {
		mdOffset = 64
		smOffset = 100
	} else {
		mdOffset = 100
		smOffset = 0
	}
</script>

<Card
	class="relative {cardWidth} p-0 /*sm:min-w-min shadow-md {$$props.class} flex flex-col justify-between h-auto"
>
	{#if demoOrientation == 'portrait'}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[180px] aspect-[9/16] ">
			<img src={demoSrc} alt="thumbnail gif" class="shadow-md" />
		</div>
	{:else}
		<div
			class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[80px] sm:h-[100px] aspect-[16/9] "
		>
			<img src={demoSrc} alt="thumbnail gif" class="shadow-md" />
		</div>
	{/if}
	<div>
		<div class="w-full h-2 {projectColor}" />
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
				subTitleStyles="max-w-[calc(100%-{smOffset}px)] md:max-w-[calc(100%-64px)]  font-normal"
			/>
			<Divider size={24} />
		</div>
	</div>
	<div class="flex justify-between w-full gap-4 p-4 md:p-8">
		<!-- An alternative needed for passing the Icons from the page.svelte, 
			instead of hardcoding each of them here 
		(In Svelte it's not possible to pass components as props as in i.e. React)-->
		<div class="flex justify-start gap-2">
			{#if icons.length > 0}
				{#each icons as icon}
					{#if icon == 'ts'}
						<TypeScriptIcon />
					{/if}
					{#if icon == 'js'}
						<JavaScriptIcon />
					{/if}
					{#if icon == 'react'}
						<ReactIcon />
					{/if}
				{/each}
			{/if}
		</div>
		<div class="flex flex-row justify-end">
			<Description class="mt-2">2022-2023</Description>
		</div>
	</div>
</Card>
