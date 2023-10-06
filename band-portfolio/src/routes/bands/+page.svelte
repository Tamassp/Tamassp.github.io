<script>
	import Youtube from 'svelte-youtube-embed'
	import { AudioPlayer } from 'svelte-mp3'
	import Divider from '../../components/Divider.svelte'
	import Button from '../../components/Button.svelte'
	import TitleDescriptionCard from '../../components/TitleDescriptionCard.svelte'
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

	console.log('OIII')
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Homenaje" rel="stylesheet" />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="pageContainer">
	<div class="coverImage">
		<img {src} alt="background" />
	</div>

	<h1 class="mainTitle">SwingBy</h1>

	<!-- <p style="margin-top: 200px;">bla bla bla asdjkjashkdjashdkjhs</p> -->
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
	<h1>Portfolio</h1>
	<!-- <div class="video"> -->
	<Youtube id="9Vo4_XfPS5U" />
	<!-- </div> -->
	<!-- <div class="video"> -->
	<Youtube id="dgZi5Qi400A" />
	<!-- </div> -->
	<!-- <AudioPlayer  url={recording} bind:controller={controller} /> -->

	<!-- <TitleDescriptionCard/> -->
</div>

<style>
	* {
		font-family: 'Homenaje';
	}
	:global(body) {
		background-color: rgb(0, 0, 0);
		color: white;
		display: flex;
		justify-content: center;
	}

	.pageContainer {
		/* background-color: bisque; */
		/* opacity: 0.5; */
		position: relative;
		display: flex;
		flex-direction: column;
		align-self: center;
		/* MAKE CONDITION */
		max-width: 800px;
		margin-top: 25vh;
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
		position: absolute;
		margin: 10%;
		width: 90%;
		aspect-ratio: 16/9;
		object-fit: cover;
		border-radius: 20px;
		z-index: -1;
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
