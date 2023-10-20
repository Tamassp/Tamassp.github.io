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
	import JavaIcon from '../icons/JavaIcon.svelte'
	import AndroidIcon from '../icons/AndroidIcon.svelte'
	import SpringBootIcon from '../icons/SpringBootIcon.svelte'
	import YoutubeIcon from '../icons/YoutubeIcon.svelte'
	import VuforiaIcon from '../icons/VuforiaIcon.svelte'

	const cardWidth = 'max-w-xs min-w-[75vw] sm:min-w-[320px] md:min-w-[356px]'
	const portraitHeight = 200
	const landscapeHeight = 112

	export let id = ''
	export let title = ' '
	export let subTitle = ' '
	export let bulletPoints: string[] = []
	export let demoLink: string = ''
	export let gitHubLink: string = ''
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
		// console.log('onCardClick')
	}

	const bgColor = `bg-[${projectColor}]`

	$: cssVarStyles = `--inProgress-bg-color:${projectColor}`

	let isDemoHovered = false

	function demoHover() {
		isDemoHovered = true		
	}
</script>

<Card
	{id}
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
	<div style="--theme-color: {projectColor}" class="flex flex-col justify-between h-full">
		<div>
			<div class="w-full h-2 backgroundColor" />
			<div
				class="flex flex-col justify-center p-4 pt-8 md:p-8 md:pb-4
		/*max-w-[calc(100%-{(portraitHeight * 9) / 16}px)]
		/*max-w-[calc(100%-50px)]"
			>
			<!-- The filter option wouldn't work because of the conditional styling in tailwind at subTitleStyles -->
				<TitleDescription
					{title}
					{subTitle}
					{bulletPoints}
					titleStyles="max-w-[calc(100%-128px)] md:max-w-[calc(100%-128px)] "
					subTitleStyles={demoOrientation == 'portrait'
						? 'max-w-[calc(100%-100px)] md:max-w-[calc(100%-64px)] font-normal'
						: 'font-normal'}
				/>
				{#if !demoLink}
				<Divider size={24} />
				{/if}	
			</div>
		</div>
		<div class="p-4 pt-0 md:p-8 md:pt-0">
			<div class="flex flex-row " >
			{#if demoLink}
				<a href={demoLink} target="_blank"  class="flex flex-row items-center max-w-max text-primary">
					<YoutubeIcon class="mr-2" />
					Demo Video
				</a>
				{#if gitHubLink}
					<Description class="mx-2 mt-1">/</Description>
				{/if}
			{/if}
			{#if gitHubLink}
				<a href={gitHubLink} target="_blank"  class="flex flex-row items-center max-w-max text-primary"> 
					Repo
				</a>
			{/if}
			</div>
			<Divider />
			<div class="flex justify-between w-full gap-4 /*p-4 /*md:p-8">
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
							{#if icon == 'java'}
								<JavaIcon />
							{/if}
							{#if icon == 'android'}
								<AndroidIcon />
							{/if}
							{#if icon == 'springboot'}
								<SpringBootIcon />
							{/if}
							{#if icon == 'vuforia'}
								<VuforiaIcon />
							{/if}
						{/each}
					{/if}
				</div>
				<div class="flex flex-row justify-end">
					<Description class="mt-2">{year}</Description>
				</div>
			</div>
		</div>
		
		{#if inProgress}
			<div
				class="absolute right-0 p-1 text-white rounded-bl-lg -bottom-6 md:-bottom-7 backgroundColor"
			>
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

	a {
		background:
    linear-gradient(
      to right,
     rgba(23,97,120,0.5),
	 rgba(23,97,120,0.5)
    ),
    linear-gradient(
      to right,
      rgba(23,97,120,0.95),
	  rgba(23,97,120,0.95)
  );
		background-size: 100% 2px, 0 2px;
		background-position: 100% 100%, 0 100%;
		background-repeat: no-repeat;
		transition: background-size 400ms;
	}

	a:hover {
		background-size: 0 2px, 100% 2px;
	}
</style>
