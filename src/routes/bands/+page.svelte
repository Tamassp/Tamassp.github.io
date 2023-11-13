<script>
	// import Youtube from 'svelte-youtube-embed'
	// import { AudioPlayer } from 'svelte-mp3'
	import { Hamburger } from 'svelte-hamburgers';

	import Divider from '../../components/Divider.svelte'
	import Button from '../../components/Button.svelte'
	import TitleDescriptionCard from '../../components/TitleDescriptionCard.svelte'
	import TitleDescription from '../../components/TitleDescription.svelte'
	import { deserialize } from '$app/forms'
	import bandIMG1 from '$lib/images/bandCover.jpg'
	import bandIMG2 from '$lib/images/band2.jpg'
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

	let innerWidth = 0
	let innerHeight = 0

	let controller
	$: console.dir(controller) // Output: DOM element object

	let open = false

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

	<div class="sticky top-0 left-0 z-10 flex flex-row items-center justify-between w-full pt-6 pb-6 pl-2 pr-2 bg-white navbar">
		<Title class="logo">Piano & Vocal Duo</Title>
		<Hamburger
			bind:open
			 />

		
		<!-- <Title class="burgerMenu">|||</Title> -->
		<!-- <div class="navLinks">
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Contact</a>
		</div> -->

	</div>
	<div class="fixed right-0 w-full ">
		<Menu bind:open />
	</div>
	<!-- <Menu bind:open /> -->
	
	<div class="relative page-container">
		<img src={bandIMG1} alt="background" class="sticky top-16 left-0 max-h-[60vh] w-full  "/>
		<Divider size={12} />
		<img src={bandIMG2} alt="background2" class="sticky top-32 left-0 /*rotate-2 max-h-[60vh] w-full"/>
		<Divider size={12} />
		<img src={bandIMG1} alt="background3" class="sticky top-40 left-0 max-h-[60vh] w-full"/>
		<div class="flex flex-col items-center bg-white md:mt-12 content">
			<Divider size={32} />
			<TitleDescription title="About" description="We are a duo from Horsens. We play background music in bars and coffes" descriptionStyles=" text-center" />
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
		max-width: 1536px;
		/* margin-top: 25vh; */
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
