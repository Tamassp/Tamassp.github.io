<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte'
	import Card from './Card.svelte'
	import Description from './Description.svelte'
	import Divider from './Divider.svelte'
	import Title from './Title.svelte'
	import TitleDescription from './TitleDescription.svelte'
	import TypeScriptIcon from '../icons/TypeScriptIcon.svelte'
	import JavaScriptIcon from '../icons/JavaScriptIcon.svelte'
	import ReactIcon from '../icons/ReactIcon.svelte'
	import CSharpIcon from '../icons/CSharpIcon.svelte'
	import BlazorIcon from '../icons/BlazorIcon.svelte'
	import AzureIcon from '../icons/AzureIcon.svelte'
	import UnityIcon from '../icons/UnityIcon.svelte'
	import OculusIcon from '../icons/OculusIcon.svelte'
	import SvelteIcon from '../icons/SvelteIcon.svelte'

	const cardWidth = 'max-w-xs min-w-[75vw] sm:min-w-[320px] md:min-w-[356px]'
	const portraitHeight = 200
	const landscapeHeight = 112

	export let title = ' '
	export let subTitle = ' '
	export let bulletPoints: string[] = []
	export let description = ' '
	export let demoOrientation: 'portrait' | 'landscape' | 'square' = 'portrait'
	export let projectColor = '#666666'
	export let icons: any[] = []
	export let demoSrc = ''
	export let year = ' '
	export let inProgress = false

	let mdOffset = 0
	let smOffset = 0
	onMount(() => {
		if (demoOrientation == 'portrait') {
			mdOffset = 64
			smOffset = 100
		} else {
			mdOffset = 100
			smOffset = 0
		}
	})

	export let onCardClick = (): any => {
		console.log('onCardClick')
	}

	const bgColor = `bg-[${projectColor}]`

	$: cssVarStyles = `--inProgress-bg-color:${projectColor}`
</script>

<Card
	{onCardClick}
	class="relative {cardWidth} p-0 /*sm:min-w-min shadow-md {$$props.class} flex flex-col justify-between h-auto"
>
	{#if demoOrientation == 'portrait'}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[180px] aspect-[9/16]">
			<img src={demoSrc} alt="thumbnail gif" class="shadow-md" />
		</div>
	{:else if demoOrientation == 'square'}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[112px] sm:h-[136px] aspect-[1/1]">
			<img src={demoSrc} alt="thumbnail gif" class="shadow-md" />
		</div>
	{:else}
		<div class="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 h-[80px] sm:h-[100px] aspect-[16/9]">
			<img src={demoSrc} alt="thumbnail gif" class="shadow-md" />
		</div>
	{/if}
	<div style="--theme-color: {projectColor}">
		<div>
			<div class="w-full h-2 backgroundColor" />
			<div
				class="flex flex-col justify-center p-4 pt-8 md:p-8 md:pb-4
		/*max-w-[calc(100%-{(portraitHeight * 9) / 16}px)]
		/*max-w-[calc(100%-50px)]"
			>
				<TitleDescription
					{title}
					{subTitle}
					{bulletPoints}
					titleStyles="max-w-[calc(100%-128px)] md:max-w-[calc(100%-128px)] "
					subTitleStyles="/*max-w-[calc(100%-{smOffset}px)] {demoOrientation == 'portrait'
						? 'max-w-[calc(100%-100px)] md:max-w-[calc(100%-64px)]'
						: ''}  font-normal"
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
						{#if icon == 'c#'}
							<CSharpIcon />
						{/if}
						{#if icon == 'blazor'}
							<BlazorIcon />
						{/if}
						{#if icon == 'azure'}
							<AzureIcon />
						{/if}
						{#if icon == 'unity'}
							<UnityIcon />
						{/if}
						{#if icon == 'oculus'}
							<OculusIcon />
						{/if}
						{#if icon == 'svelte'}
							<SvelteIcon />
						{/if}
					{/each}
				{/if}
			</div>
			<div class="flex flex-row justify-end">
				<Description class="mt-2">{year}</Description>
			</div>
		</div>
		{#if inProgress}
			<div class="absolute right-0 p-1 text-white rounded-bl-lg -bottom-6 backgroundColor">
				<Description small>In Progress</Description>
			</div>
		{/if}
	</div>
</Card>

<style>
	.inProgress {
		background-color: var(--inProgress-bg-color, #000000);
		/* width: 100px;
		height: 100px;
		position: absolute;
		right: 0;
		bottom: -6px; */
	}

	.backgroundColor {
		background-color: var(--theme-color, #000000);
	}
</style>
