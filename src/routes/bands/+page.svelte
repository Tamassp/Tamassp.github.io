<script>
	// import Youtube from 'svelte-youtube-embed'
	// import { AudioPlayer } from 'svelte-mp3'
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Hamburger } from 'svelte-hamburgers';

	import Divider from '../../components/Divider.svelte'
	import Button from '../../components/Button.svelte'
	import TitleDescriptionCard from '../../components/TitleDescriptionCard.svelte'
	import TitleDescription from '../../components/TitleDescription.svelte'
	import { deserialize } from '$app/forms'
	import loaderGif from '$lib/images/loader.gif'
	import coverSmall from '$lib/images/coverSmall.jpg'
	import coverBig from '$lib/images/coverBig.jpg'
	import coverSmall2 from '$lib/images/coverSmall2.jpg'
	import coverBig2 from '$lib/images/coverBig2.jpg'
	import coverSmall3 from '$lib/images/coverSmall3.jpg'
	import coverBig3 from '$lib/images/coverBig3.jpg'

	import Title from '../../components/Title.svelte'
	import Menu from '../../components/Menu.svelte'
	let src = 'src/images/bandCover.jpg'
	let src2 = 'src/images/band2.jpg'
	//let recordingList = ['src/recordings/Watermelon Sugar Demo.mp3', 'src/recordings/Watermelon Sugar Demo.mp3'];
	let recordingList = [
		'https://filesamples.com/samples/audio/mp3/sample3.mp3',
		'https://filesamples.com/samples/audio/mp3/sample3.mp3'
	]
	let recording = recordingList[0]


	
	let loading = true

	onMount(async () => {
		loading = false
	});


	

	let innerWidth = 0
	let innerHeight = 0

	// let controller
	// $: console.dir(controller) // Output: DOM element object

	let open = false

	let sm = 640;
	let md = 768;
	let lg = 1024;
	let xl = 1280;
	let xxl = 1536;

	

</script>

<svelte:head>
	<!-- <link href="https://fonts.googleapis.com/css?family=Homenaje" rel="stylesheet" /> -->
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />


<div class="pageContainer">
	<!-- <div class="coverImage">
		<img {src} alt="background" />
	</div>

	<h1 class="mainTitle">SwingBy</h1>

	
	<div style="margin-top: 100px;" />
	<TitleDescriptionCard />
	<div style="margin-top: 32px;" />
	<Button />
	<div>
		<img style="max-height: 200px; width: 100%" src={src2} alt="background2" />
	</div>
	<div style="margin-top: 120px;" />
	<TitleDescriptionCard title="Our Style" right />
	<Divider />
	<h1>Portfolio</h1> -->
	<!-- <div class="video"> -->
	<!-- <Youtube id="9Vo4_XfPS5U" /> -->
	<!-- </div> -->
	<!-- <div class="video"> -->
	<!-- <Youtube id="dgZi5Qi400A" /> -->
	<!-- </div> -->
	<!-- <AudioPlayer  url={recording} bind:controller={controller} /> -->

	<!-- <TitleDescriptionCard/> -->

	<div  class="sticky top-0 left-0 z-10 flex flex-row items-center justify-between w-full pt-6 pb-6 pl-2 pr-2 bg-white navbar">
		<Title class="logo">Piano & Vocal Duo</Title>
		<Hamburger
			bind:open
			 />
	</div>
	<div class="fixed right-0 w-full ">
		<Menu bind:open />
	</div>
	<!-- <Menu bind:open /> -->
	
	<div  class="relative page-container 2xl:pl-2 2xl:pr-2">
		{#if loading}
			<div out:slide={{ delay: 600, duration: 600, easing: quintOut, axis: 'y' }} class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center bg-white">
				<img src={loaderGif} alt="loading" class="m-auto scale-50 " />
			</div>
		{/if}
		
		<!-- Responsive images for different screen sizes -->
		<picture transition:fade={{ delay: 250, duration: 300 }}  >
			<source srcset={coverSmall} media="(max-width: {sm}px)" />
			<img src={coverBig} alt="background" class="sticky top-16 left-0 /*max-h-[60vh] w-full "/>
		</picture>
		
		<Divider size={12} class="-m-1 bg-white" />
		<picture>
			<source srcset={coverSmall2} media="(max-width: {sm}px)" />
			<img src={coverBig2} alt="background" class="sticky top-16 left-0 /*max-h-[60vh] w-full "/>
		</picture>
		<Divider size={12} class="w-full -m-1 bg-white" />
		<picture>
			<source srcset={coverSmall3} media="(max-width: {sm}px)" />
			<img src={coverBig3} alt="background" class="sticky top-16 left-0 /*max-h-[60vh] w-full "/>
		</picture>
		<div class="flex flex-col items-center -m-1 bg-white md:mt-12 content">
			<Divider size={32} />
			<TitleDescription title="About" description=" 'There is one language that speaks to everyone: Music'" descriptionStyles=" text-center" />
			<TitleDescription description="As an international duo from Horsens with a passion for music, we enjoy performing in the cozy atmosphere of bars and cafes."/>
			<TitleDescription description="Our repertoire mostly consists of jazz/blues/pop cover songs, but we also love to create mashups and more upbeat tunes."/>
			<Divider size={24} />
			<a>Listen to our portfolio</a>
			<Divider size={48} />
			<TitleDescription title="Booking" description="hello@gmail.com"></TitleDescription>
		</div>
		<Divider />
	
	</div>
</div>

<style>
	* {
		/* font-family: 'Homenaje'; */
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
	}
	:global(body) {
		/* background-color: rgb(0, 0, 0);
		color: white; */
		display: flex;
		justify-content: center;

		padding: 0;
	}

	.pageContainer {
		/* background-color: bisque; */
		/* opacity: 0.5; */
		position: relative;
		/* display: flex;
		flex-direction: column;
		align-self: center; */
		/* MAKE CONDITION */
		/* max-width: 800px; */
		/* max-width: 1536px; */
		max-width: 1280px;
		/* margin-top: 25vh; */
	}

	.imageWrapper {
		background-image: url('../../lib/images/coverPic.jpg');
		background-position: 50% 40%;
  		/* background-size: cover; */
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		/* height: 0;
		padding-top: 81.56%; */
	}
	.mainTitle {
		/* font-family: Homenaje; */
		position: relative;
		/* left: 10px; */
		/* MAKE CONDITION */
		/* margin-left: 15%; */
		margin-top: -10px;
		font-size: 5em;
		background-color: rgba(0, 0, 0, 0.5);
		width: fit-content;
	}
	img {
		/* position: absolute; */
		/* margin: -10 */
		/* width: 100%; */
		/* aspect-ratio: 16/9; */
		object-fit: cover;
		/* border-radius: 20px; */
		z-index: -1;

		/* width: 100vw;
		position: relative;
		left: calc(-50vw + 50%); */

	}
	.video {
		margin-top: 24px;

		aspect-ratio: 16/9;
		border-radius: 20px;
		z-index: -1;
	}
	/* .coverImage {
        width: min-content;
    } */
	@media (min-width: 600px) {
		.pageContainer {
			min-width: 600px;
		}
		.mainTitle {
			margin-top: 20px;
		}
	}

</style>
