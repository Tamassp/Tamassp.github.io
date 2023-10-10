<script lang="ts">
	import { onMount } from 'svelte'
	import { setScrollVar, removeScrollVar } from '../../utils/helpers.js'
	import { draw, fade, slide, fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	// import IntersectionObserver from '../../utils/IntersectionObserver.svelte';
	import viewport from '../../actions/useViewportAction.js'
	import { scrollPosition } from '../../actions/scrollPosition.js'
	import { windowResize } from '../../actions/windowResize.js'
	import Header from '../../components/Header.svelte'
	import SubTitle from '../../components/SubTitle.svelte'
	import '../../app.css'
	import type { PageData } from './$types'
	import ProfileCard from '../../components/ProfileCard.svelte'
	import TypeWriter from '../../components/TypeWriter.svelte'
	import SubHeader from '../../components/SubHeader.svelte'
	import Description from '../../components/Description.svelte'
	import Title from '../../components/Title.svelte'
	import Divider from '../../components/Divider.svelte'
	import Popup from '../../components/Popup.svelte'
	import CV from '../../components/CV.svelte'
	import ProjectCard from '../../components/ProjectCard.svelte'
	import Swiper from '../../components/Swiper.svelte'
	import TypeScriptIcon from '../../icons/TypeScriptIcon.svelte'
	import TravelSign from '../../components/TravelSign.svelte'
	import DottedLineLeft from '../../components/DottedLineLeft.svelte'
	import DottedLineLeftSmall from '../../components/DottedLineLeftSmall.svelte'
	import Arrow from '../../icons/Arrow.svelte'
	import Footer from '../../components/Footer.svelte'
	import StorySection from '../../components/StorySection.svelte'

	export let data: PageData

	// window width and height
	let innerWidth = 0
	let innerHeight = 0

	let visible = false
	let isProfileExpanded = false
	let section1Animation = false

	let popupIsOpen = false
	let projectPopupIsOpen = false

	let highSchool = false
	let highSchoolDescription = false
	let highSchoolImg = false
	let university = false
	let universityDescription = false
	let work = false
	let workDescription = false

	let projectTitle = ''
	let projectDescription = ''

	// let scrollPercentage = --scroll

	onMount(() => {
		// setScrollVar()
		// const observer = new IntersectionObserver((entries) => {
		// 	// Loop over the entries
		// 	entries.forEach((entry) => {
		// 		// If the element is visible
		// 		if (entry.isIntersecting) {
		// 			// Add the animation class
		// 			// entry.target.classList.add('section-1-animation');
		// 			section1Animation = true
		// 		}
		// 	})
		// })

		// observer.observe(document.querySelector('section-1'))
		// return () => {
		// 	//cleanup
		// 	removeScrollVar()
		// }
		// visible = true
		console.log('visible: ' + visible)
	})
	//setScrollVar()

	setTimeout(() => {
		visible = true // After some delay, set showContent to true to show the content and trigger the transition

		//GETTING THE LENGHT OF THE SVGS
		// var myPath = document.getElementById("#arrow1");
		// var length = myPath.getTotalLength();
		// console.log("LENGHT" + length);
	}, 300)

	function onProfileCardClick() {
		isProfileExpanded = true
		console.log('Profile Card Clicked')
	}

	console.log(section1Animation)

	function openCV() {
		popupIsOpen = true
		console.log('CV opened')
	}

	function closeCV() {
		popupIsOpen = false
		console.log('CV closed')
	}

	//ONLOAD
	let waiting = 0

	const notifyLoaded = () => {
		console.log('loaded!')
	}

	let travelSignVisible = false

	function setTravelSign(a: boolean) {
		travelSignVisible = a
	}

	function openProjectPopup(title: string, description: string) {
		projectTitle = title
		projectDescription = description
		projectPopupIsOpen = true
		console.log('Project Popup opened')
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="pageWrapper"
	class="pl-4 pr-4 -mb-3 md:pl-8 md:pr-8 w-full
 /*sm:bg-accent /*md:bg-[#eeafaf] /*lg:bg-secondary /*xl:bg-primary"
>
	<!-- CV Popup -->
	<Popup title="CV" show={popupIsOpen} on:close={closeCV}>
		<CV />
	</Popup>

	<!-- Project Card Popup -->
	<Popup title={projectTitle} show={projectPopupIsOpen} on:close={closeCV}>
		<p>
			lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
			ipsum
		</p>
		<p>{projectDescription}</p>
	</Popup>
	<div class="h-screen /*bg-secondary">
		<!-- SCROLL POSITION TEST -->
		<!-- <div class="w-4 h-4 bg-primary" use:scrollPosition > 
    </div>-->
		<div class="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
			<section class="grid min-h-full full-width-section md:gap-16 md:grid-cols-2 lg:gap-32">
				<div class="flex items-center justify-center h-64">
					<Title><TypeWriter {visible} text="Welcome!" /></Title>
				</div>

				{#if visible}
					<!-- <div class="h-[600px]"> -->
					<span transition:fade={{ delay: 600, duration: 300 }}>
						<div class="flex flex-col items-center justify-end">
							<ProfileCard
								title="Tamas Peter"
								description="Software Engineer"
								on:click={onProfileCardClick}
								class="w-64"
							/>
						</div>
					</span>
					<!-- </div> -->
				{/if}
			</section>
		</div>
	</div>

	<section class="/*full-screen-section full-width-section -mt-[0vh] mb-32 /*bg-accent">
		{#if visible}
			<div
				class=" {isProfileExpanded ? 'animate-in' : 'animate-out'} 
					p-4 pr-6 mr-2 pt-[128px] mt-[128px] md:mt-0 /*border-b /*border-r
					flex flex-col items-center justify-center"
			>
				<SubHeader class="">Software Engineer specialized in React/React Native</SubHeader>
				<Divider size={24} />
				<Description>
					As a Front-end focused software engineer, I will be able to design, implement and maintain
					mobile and web applications using component based development.
				</Description>
				<div
					use:viewport
					on:enterViewport={() => {
						console.log('enter')

						//isProfileExpanded = true
						// section1Animation = true
					}}
					on:exitViewport={() => {
						console.log('exit')
						isProfileExpanded = false
					}}
				/>
				<div
					use:viewport
					on:enterViewport={() => {
						console.log('enter')

						isProfileExpanded = true
						// section1Animation = true
					}}
					on:exitViewport={() => {
						console.log('exit')
						//isProfileExpanded = false
					}}
				/>
				<Divider size={96} />
				<button on:click={openCV} class="pt-2 pb-2 pl-4 pr-4 border">Open CV</button>
			</div>
		{/if}
	</section>
	{#if travelSignVisible}
		<!-- <div transition:fade={{delay: 0, duration: 600}}> -->
		<TravelSign />
		<!-- </div> -->
	{/if}
	<!-- <section class="flex flex-col justify-center min-h-screen bg-green-300 full-screen-section"> -->
	<div id="#section1" class={section1Animation ? 'section-1' : ''} />
	<div class="section-1-animation" />
	<!-- <SubTitle>My story</SubTitle> -->

	<div
		use:viewport
		on:enterViewport={() => {
			console.log('enter DASHEDLINE')
			//dashedLineScrolling()
			setTravelSign(true)
		}}
		on:exitViewport={() => {
			console.log('exit DASHEDLINE')
		}}
	>
		{#if innerWidth > 1024}
			<DottedLineLeft id="1" />
		{:else}
			<DottedLineLeftSmall id="11" />
		{/if}
		<!-- </div> -->
	</div>
	<!-- </section> -->

	<StorySection>
		<SubHeader class="sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline"
			>I started learning programming in</SubHeader
		>
		<div>
			<div
				use:viewport
				on:enterViewport={() => {
					highSchool = true
					highSchoolDescription = true
				}}
				on:exitViewport={() => {}}
			/>
			<div class="w-full h-16">
				{#if highSchool}
					<div class="absolute ml-[15%] sm:ml-[35%] md:ml-[50%] transitionFromRight">
						<Title class="inline">high school</Title>
					</div>
				{/if}
			</div>
			<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
				<div class="flex flex-row order-2 lg:order-1 lg:justify-center">
					{#if highSchoolDescription}
						<div class="transitionFromLeft">
							<Description
								class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-r from-90% from-white to-100% pr-8 z-20
									"
							>
								We were introduced to C++ first, where I could learn the basics of programming and I
								could practice creating algorithms. Througout my studies I've participated in extra
								courses in software developement where we were creating apps in HTML/CSS, Java and
								Android studio. In the final year, our focus shifted to working extensively with C#.
							</Description>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-row justify-end order-1 col-span-1 lg:relative lg:justify-normal lg:order-2"
				>
					<img
						src="src/images/gimi.png"
						alt="gimi"
						class="w-[70%] mr-0 h-auto lg:w-auto min-h-full object-fit z-10"
					/>
				</div>
			</div>
		</div>
	</StorySection>
	<section class="/*min-h-screen /*full-screen-section bg-green-300 flex flex-col justify-center">
		<div id="#section1" class={section1Animation ? 'section-1' : ''} />
		<div class="section-1-animation" />
		{#if innerWidth > 1024}
			<DottedLineLeft id="2" inverted />
		{:else}
			<DottedLineLeftSmall id="22" inverted />
		{/if}
	</section>
	<StorySection>
		<SubHeader
			class="sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline /*drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
			>I studied Software Engineering at</SubHeader
		>
		<div
			use:viewport
			on:enterViewport={() => {
				university = true
				// universityDescription = true
			}}
			on:exitViewport={() => {}}
		/>
		<div>
			<div class="/*flex /*flex-wrap w-full h-16">
				{#if university}
					<div class="absolute ml-[5%] sm:ml-[15%] md:ml-[30%] inline transitionFromLeft">
						<Title class="inline">VIA University College</Title>
					</div>
				{/if}
			</div>
			<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
				<div
					class="flex flex-row justify-start order-2 col-span-1 lg:relative lg:justify-normal lg:order-1"
				>
					<img
						src="src/images/via.png"
						alt="via"
						class="w-[70%] mr-0 h-auto lg:w-auto min-h-full object-fit z-10"
					/>
				</div>
				<div class="flex flex-row order-2 lg:justify-center lg:order-1">
					{#if university}
						<div class={innerWidth > 1024 ? 'transitionFromRight' : 'transitionFromLeft'}>
							<Description
								class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-l from-90% from-white to-100% pl-8 z-20"
								>Here I dove deeper in the object oriented world. We used several design patterns
								and agile methodologies. Thanks to the semester projects, we were able to experience
								working in international teams. I chose the interactive media specification, that
								allowed me to take extra courses in frontend development, UX/UI interactions and
								VR/AR.
							</Description>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</StorySection>
	{#if innerWidth > 1024}
		<DottedLineLeft id="3" />
	{:else}
		<DottedLineLeftSmall id="33" />
	{/if}
	<StorySection>
		<SubHeader
			class="/*balancedText sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline bg-slate-500 text-cyan-300 "
			>I had my internship and student job at</SubHeader
		>
		<div
			use:viewport
			on:enterViewport={() => {
				work = true
			}}
			on:exitViewport={() => {}}
		/>
		<div>
			<div class="w-full h-16">
				{#if work}
					<div class="absolute ml-[15%] sm:ml-[35%] md:ml-[50%] inline transitionFromRight">
						<Title>Keyhole</Title>
					</div>
				{/if}
			</div>
			<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
				<div class="flex flex-row order-2 lg:order-1 lg:justify-end">
					{#if work}
						<div class="transitionFromLeft">
							<Description
								class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-r from-90% from-white to-100% pr-8 z-20"
							>
								I had a great opportunity to apply my skills in a practical setting during my recent
								student job. Collaborating closely with the backend team, we developed and evaluated
								frontend functionalities for both mobile and web applications. Besides the technical
								aspects, this experience taught me valuable lessons in teamwork, asynchronous task
								management, and taking ownership of hotfixes and releases.
							</Description>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-row justify-end order-1 col-span-1 lg:relative lg:justify-normal lg:order-2"
				>
					<div class="relative flex justify-end /*w-[70%]">
						<div
							transition:fade={{ delay: 600, duration: 300 }}
							class="absolute top-[30%] left-[68%] flex justify-between"
						>
							<Arrow class="scale-75 md:scale-100 " />
							{#if innerWidth > 1024}
								<Description small>This window here</Description>
							{:else}
								<Description small>Here</Description>
							{/if}
						</div>
						<img
							src="src/images/via.png"
							alt="via"
							class="z-10 w-[70%] h-auto min-h-full mr-0 lg:w-auto object-fit"
						/>
					</div>
				</div>
			</div>
		</div>
	</StorySection>
	{#if innerWidth > 1024}
		<DottedLineLeft id="4" inverted />
	{:else}
		<DottedLineLeftSmall id="44" inverted />
	{/if}
	<section>
		<Swiper
			{innerWidth}
			projects={[
				{
					title: 'Keyhole',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					],
					projectColor: '#ff8d93',
					demoSrc: 'src/images/khIntro.gif',
					icons: ['react', 'ts', 'js'],
					year: '2022-2023',
					description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
				}
			]}
			title="Work"
		/>
		<Divider />
		<Swiper
			{innerWidth}
			projects={[
				{
					bulletPoints: [
						'React web app for datapoint management and visaualization',
						'.NET API for data processing'
					],
					demoOrientation: 'landscape',
					demoSrc: 'src/images/bprDemo.gif',
					icons: ['react', 'ts', 'js', 'c#'],
					projectColor: '#663399',
					subTitle: 'A solution for visualizing datapoints coming from different companies',
					title: 'BPR Dashboard',
					year: '2023'
				},
				{
					bulletPoints: [
						'Blazor Web-Assembly app',
						'Using TMDB API',
						'Hosted in Azure',
						'GitHub Actions'
					],
					demoOrientation: 'landscape',
					demoSrc: 'src/images/movieAppDemo.gif',
					description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
					icons: ['blazor', 'c#', 'azure'],
					projectColor: '#DFA67B',
					subTitle: 'An imdb-like app for searching movies, actors and tv shows',
					title: 'Movie Info App',
					year: '2022'
				},
				{
					bulletPoints: ['Unity', 'Oculus Interaction SDK', 'OVRCameraRig'],
					demoOrientation: 'square',
					demoSrc: 'src/images/rockPaperDemo.gif',
					icons: ['unity', 'oculus', 'c#'],
					projectColor: '#79AC78',
					subTitle: 'A VR Game created where the player has to fight a cactus',
					title: 'Rock Paper Scrissors',
					year: '2022'
				},
				{
					bulletPoints: ['Physics for projectiles', 'AI pathfinding', 'Animations, shaders etc.'],
					demoOrientation: 'landscape',
					demoSrc: 'src/images/chessStrategyDemo.gif',
					icons: ['unity', 'c#'],
					inProgress: true,
					projectColor: '#645b37',
					subTitle: 'A Unity game where the player has to out-maneuver the opponent pieces',
					title: 'Chess Strategy',
					year: '2023'
				}
			]}
			title="University"
		/>
		<Divider />
		<Swiper
			{innerWidth}
			projects={[
				{
					bulletPoints: [
						'Component Based Development',
						'Learning a new framework (Svelte)',
						'Working with SVGs',
						'Hosting on GitHub Pages'
					],
					demoOrientation: 'landscape',
					demoSrc: 'src/images/chessStrategyDemo.gif',
					icons: ['svelte', 'ts', 'js'],
					inProgress: true,
					projectColor: '#176178',
					subTitle: 'Created for presenting my projects and experience',
					title: 'Portfolio Website',
					year: '2023'
				}
			]}
			title="Hobby"
		/>
	</section>
	<Divider size={96} />
	<Footer />
	<Divider />
</div>

<style>
	:root {
		--scroll: 0;
	}

	.balancedText {
		text-wrap: balance;
	}
	.half-screen-section {
		height: 50vh;
		width: 100%;
		max-width: 1536px;
		/* background: blue; */
		position: relative;
	}
	.full-screen-section {
		height: 100vh;
		width: 100%;
		max-width: 1536px;
		/* background: blue; */
		position: relative;
	}

	.full-width-section {
		width: 100%;
		max-width: 1536px;
		position: relative;
	}
	[data-img-to-show] {
		position: absolute;
		top: 30%;
		height: 100px;
		width: 100%;
		background: red;
	}

	@keyframes wipe-enter {
		0% {
			transform: scale(0, 0.025);
		}
		50% {
			transform: scale(1, 0.025);
		}
	}
	.section-1 {
		width: 200px;
		height: 200px;
		background: orange;
		animation: wipe-enter 1s 1;
	}

	@media (prefers-reduced-motion: no-preference) {
		.section-1-animation {
			animation: wipe-enter 1s infinite;
		}
	}

	.m-30p {
		/* width: 30%; */
		margin-left: 30%;
	}
	.m-60p {
		/* width: 60%; */
		margin-left: 60%;
	}

	.animate-in {
		animation: fade-in 600ms forwards;
	}

	@keyframes fade-in {
		0% {
			transform: translateX(0);
			opacity: 0;
		}
		100% {
			transform: translateX(-48);
			opacity: 1;
		}
	}

	.animate-out {
		animation: fade-out 600ms forwards;
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.line-in {
		animation: line-in 1600ms forwards;
	}

	@keyframes line-in {
		0% {
			height: 0vh;
			width: 4px;
		}
		50% {
			height: 50vh;
			width: 4px;
		}
		100% {
			height: 50vh;
			width: 45vw;
		}
	}

	#travelSign {
		/* rotate: 90deg; */
		min-height: 256px;
		transform-origin: bottom;
		animation: travelSignAnim 1s forwards;
	}

	@keyframes travelSignAnim {
		10% {
			-webkit-transform: translateX(3px) rotate(2deg);
			transform: translateX(3px) rotate(2deg);
		}
		20% {
			-webkit-transform: translateX(-3px) rotate(-2deg);
			transform: translateX(-3px) rotate(-2deg);
		}
		30% {
			-webkit-transform: translateX(3px) rotate(2deg);
			transform: translateX(3px) rotate(2deg);
		}
		40% {
			-webkit-transform: translateX(-3px) rotate(-2deg);
			transform: translateX(-3px) rotate(-2deg);
		}
		50% {
			-webkit-transform: translateX(2px) rotate(1deg);
			transform: translateX(2px) rotate(1deg);
		}
		60% {
			-webkit-transform: translateX(-2px) rotate(-1deg);
			transform: translateX(-2px) rotate(-1deg);
		}
		70% {
			-webkit-transform: translateX(2px) rotate(1deg);
			transform: translateX(2px) rotate(1deg);
		}
		80% {
			-webkit-transform: translateX(-2px) rotate(-1deg);
			transform: translateX(-2px) rotate(-1deg);
		}
		90% {
			-webkit-transform: translateX(1px) rotate(0);
			transform: translateX(1px) rotate(0);
		}
		100% {
			-webkit-transform: translateX(-1px) rotate(0);
			transform: translateX(-1px) rotate(0);
		}
	}

	.transitionFromRight {
		animation: transitionFromRight 1s ease-out;
	}

	@keyframes transitionFromRight {
		0% {
			transform: translateX(100px);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}

	.transitionFromLeft {
		animation: transitionFromLeft 1s ease-out;
	}

	@keyframes transitionFromLeft {
		0% {
			transform: translateX(-100px);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}
</style>
