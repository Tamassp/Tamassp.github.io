<script lang="ts">
	import { onMount } from 'svelte'
	import { setScrollVar, removeScrollVar } from '../../utils/helpers.js'
	import { draw, fade, slide } from 'svelte/transition'
	// import IntersectionObserver from '../../utils/IntersectionObserver.svelte';
	import viewport from './useViewportAction'
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

	export let data: PageData

	// window width and height
	let innerWidth = 0
	let innerHeight = 0

	let visible = false
	let isProfileExpanded = false
	let section1Animation = false

	let popupIsOpen = false

	// let scrollPercentage = --scroll

	onMount(() => {
		setScrollVar()
		const observer = new IntersectionObserver((entries) => {
			// Loop over the entries
			entries.forEach((entry) => {
				// If the element is visible
				if (entry.isIntersecting) {
					// Add the animation class
					// entry.target.classList.add('section-1-animation');
					section1Animation = true
				}
			})
		})

		observer.observe(document.querySelector('section-1'))
		return () => {
			//cleanup
			removeScrollVar()
		}
	})
	//setScrollVar()

	setTimeout(() => {
		visible = true // After some delay, set showContent to true to show the content and trigger the transition

		//GETTING THE LENGHT OF THE SVGS
		// var myPath = document.getElementById("#arrow1");
		// var length = myPath.getTotalLength();
		// console.log("LENGHT" + length);
	}, 1000)

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

	// const onload = el => {
	//     waiting++
	//     el.addEventListener('load', () => {
	//         waiting--
	//         if (waiting === 0) {
	//             notifyLoaded()
	//         }
	//     })
	// }

	//GETTING THE LENGHT OF THE SVGS
	// var myPath = document.getElementById("#arrow1");
	// var length = myPath.getTotalLength();
	// console.log(length);

	//SCROLL VALUE
	// let scrollValue = 0;

	// window.addEventListener('scroll', () => {
	//     scrollValue = window.scrollY;
	// });

	function dashedLineScrolling() {
		const offset = window.scrollY
		const vh = window.innerHeight
		function handleScroll() {
			let scrollValue = (window.scrollY - offset) / vh
			//let scrollValue = 0.5;
			console.log(scrollValue)
			console.log(offset)

			const dashedLine = document.getElementById('dashline1')
			//const dashedLineLength = dashedLine.getTotalLength();
			// console.log(dashedLineLength);
			if (scrollValue < 1) {
				dashedLine.style.strokeDashoffset = scrollValue.toString()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return {
			destroy() {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}
	function dashedLineScrolling2() {
		const offset = window.scrollY
		const vh = window.innerHeight
		function handleScroll() {
			let scrollValue = (window.scrollY - offset) / vh
			//let scrollValue = 0.5;
			console.log('SECOND' + scrollValue)
			console.log(offset)

			const dashedLine = document.getElementById('dashline2')
			//const dashedLineLength = dashedLine.getTotalLength();
			// console.log(dashedLineLength);
			if (scrollValue < 1 && scrollValue > 0) {
				//inverting the scrollValue
				scrollValue = -scrollValue
				dashedLine.style.strokeDashoffset = scrollValue.toString()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return {
			destroy() {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}

	let travelSignVisible = false

	function setTravelSign(a: boolean) {
		travelSignVisible = a
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
	id="pageWrapper"
	class="p-4 md:p-8 w-full
 /*sm:bg-accent /*md:bg-[#eeafaf] /*lg:bg-secondary /*xl:bg-primary"
>
	<Popup show={popupIsOpen} on:close={closeCV}>
		<CV />
	</Popup>

	<div class="h-screen /*bg-secondary">
		<!-- SCROLL POSITION TEST -->
		<!-- <div class="w-4 h-4 bg-primary" use:scrollPosition > 
    </div>-->
		<div class="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
			<section class="grid min-h-full full-width-section md:gap-16 md:grid-cols-2 lg:gap-32 ">
				{#if visible}
					<div class="flex items-center justify-center h-64">
						<Title><TypeWriter {visible} text="Welcome!" /></Title>
					</div>
				{/if}
				<!-- {#if isProfileExpanded}
            <div class="flex items-center justify-center h-64">
                <Header><TypeWriter {visible} text="Welcome!"/></Header>
            </div>
            {/if} -->
				{#if visible}
					<!-- <div class="h-[600px]"> -->
					<span transition:fade={{ delay: 600, duration: 300 }}>
						<div class="flex flex-col items-center justify-end">
							<!-- transition:slide={{delay: 1000, duration: 1500}} -->
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

	<section class="full-width-section  -mt-[0vh] /*bg-accent">
		<!-- <div class="svg-wrapper">
        <svg height="50vh" width="90vw" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50vh" width="90vw" />
            <div class="bg-yellow-100 text">ZACH SAUCIER</div>
            <div class="text">ZACH SAUCIER</div>
        </svg>
    </div> -->
		<!-- <div class="ml-[45vw] w-1 h-1 border-r border-b-2 {isProfileExpanded ? 'line-in' : 'line-out'}">

    </div> -->

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
	<section class="flex flex-col justify-center min-h-screen bg-green-300 full-screen-section">
		<div id="#section1" class={section1Animation ? 'section-1' : ''} />
		<div class="section-1-animation" />
		<!-- <SubTitle>My story</SubTitle> -->
		{#if travelSignVisible}
			<!-- <div transition:fade={{delay: 0, duration: 600}}> -->
			<svg
				id="travelSign"
				xmlns="http://www.w3.org/2000/svg"
				width="320"
				height="256"
				viewBox="0 0 64 64"
				fill="none"
				class="ml-[calc(20%-144px)] mt-32"
			>
				<path
					transition:draw={{ delay: 300, duration: 600 }}
					d="M28 32V56"
					stroke="black"
					stroke-width="0.5"
				/>
				<path
					transition:draw={{ delay: 0, duration: 600 }}
					d="M2 32V8H48L62 20L48 32Z"
					stroke="black"
					stroke-width="0.5"
				/>
				<text x="7" y="24" font-family="/*Transport" font-size="10" fill="black">My Story</text>
			</svg>
			<!-- </div> -->
		{/if}
		<div
			use:viewport
			on:enterViewport={() => {
				console.log('enter DASHEDLINE')
				dashedLineScrolling()
				setTravelSign(true)
			}}
			on:exitViewport={() => {
				console.log('exit DASHEDLINE')
			}}
		>
			{#if innerWidth > 1024}
				<svg
					class="ml-[20vw] "
					width="60%"
					height="h-auto"
					viewBox="0 0 690 408"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,0 Q50,200 345,204 T690,408"
						stroke="white"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
					/>
					<path
						d="M0,0 Q50,200 345,204 T690,408"
						stroke="#C0D1EB"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-dasharray="20 20"
					/>
					<path
						id="dashline1"
						d="M690,408Q640,208 345,204Q50,200 0,0"
						stroke="white"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
						pathLength="1"
						stroke-dashoffset="0px"
						stroke-dasharray="0.2941537710336538px 1px"
					/>
				</svg>
			{:else}
				<svg
					id="transitionSVG3"
					class=" ml-[20vw]"
					width="60%"
					height="h-auto"
					viewBox="0 0 345 408"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,0 Q25,150 172,204 T345,408"
						stroke="white"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
					/>
					<path
						d="M0,0 Q25,150 172,204 T345,408"
						stroke="#C0D1EB"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-dasharray="20 20"
					/>
					<path
						id="dashline3"
						d="M345,408Q370,208 172,204Q25,150 0,0"
						stroke="white"
						stroke-width="5"
						stroke-linejoin="round"
						stroke-linecap="round"
						pathLength="1"
						stroke-dashoffset="0px"
						stroke-dasharray="0.2941537710336538px 1px"
					/>
				</svg>
			{/if}
			<!-- <svg use:onload class="arrowSVG" xmlns="http://www.w3.org/2000/svg" width="auto" height="60vh" viewBox="0 0 307 916" fill="none">
            <path id="arrow1" d="M109.431 0.251831C131.77 166.396 305.918 113.338 304.894 205.489C303.714 
            311.844 -1.95896 266.452 1.92588 407.933C4.89191 515.952 133.166 472.157 170.862 
            632.716C177.181 659.627 175.051 897.988 175.051 897.988C163.872 870.228 141.383 
            866.516 141.383 866.516C173.344 876.966 175.124 914.666 175.124 914.666C182.606 
            876.132 202.062 863.814 202.062 863.814C184.452 879.835 195.361 872.857 175.051 897.639" 
            stroke="white" 
            stroke-width="3.77953"/>
        </svg> -->
		</div>
	</section>

	<section class="/*full-screen-section full-width-section p-1 /*flex /*flex-col justify-center">
		<div class="/*flex /*flex-wrap">
			<SubHeader
				class="sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline bg-slate-500 text-cyan-300"
				>I started learning programming in</SubHeader
			>
			<div>
				<div class="/*flex /*flex-wrap">
					<Title class="ml-[15%] sm:ml-[35%] md:ml-[50%] inline bg-slate-500 text-cyan-300"
						>high school</Title
					>
				</div>
				<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
					<div class="flex flex-row order-2 lg:order-1 lg:justify-end">
						<Description
							class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-r from-90% from-white to-100% pr-8 z-20"
						>
							We were introduced to C++ first, where I could learn the basics of programming and I
							could practice creating algorithms. Througout my studies I've participated in extra
							courses in software developement where we were creating apps in HTML/CSS, Java and
							Android studio In the last year we were working with C#
						</Description>
					</div>
					<div
						class="flex flex-row justify-end order-1 col-span-1 lg:relative lg:justify-normal lg:order-2 "
					>
						<img
							src="src/images/gimi.png"
							alt="gimi"
							class="w-[70%] mr-0 h-auto lg:w-auto min-h-full object-fit z-10 "
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="/*min-h-screen /*full-screen-section bg-green-300 flex flex-col justify-center">
		<div id="#section1" class={section1Animation ? 'section-1' : ''} />
		<div class="section-1-animation" />
		<div
			use:viewport
			on:enterViewport={() => {
				console.log('enter DASHEDLINE')
				dashedLineScrolling2()
			}}
			on:exitViewport={() => {
				console.log('exit DASHEDLINE')
			}}
		>
			<svg
				id="transitionSVG2"
				class=" ml-[20vw]"
				width="60%"
				height="h-auto"
				viewBox="0 0 690 408"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0,0 Q50,200 345,204 T690,408"
					stroke="white"
					stroke-width="5"
					stroke-linejoin="round"
					stroke-linecap="round"
				/>
				<path
					d="M0,0 Q50,200 345,204 T690,408"
					stroke="#C0D1EB"
					stroke-width="5"
					stroke-linejoin="round"
					stroke-linecap="round"
					stroke-dasharray="20 20"
				/>
				<path
					id="dashline2"
					d="M690,408Q640,208 345,204Q50,200 0,0"
					stroke="white"
					stroke-width="5"
					stroke-linejoin="round"
					stroke-linecap="round"
					pathLength="1"
					stroke-dashoffset="0px"
					stroke-dasharray="0.2941537710336538px 1px"
				/>
			</svg>
		</div>
	</section>
	<section class="/*full-screen-section p-1 flex flex-col justify-center">
		<div class="/*flex /*flex-wrap">
			<SubHeader
				class="sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline /*drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
				>I studied Software Engineering at</SubHeader
			>
			<div>
				<div class="flex flex-wrap">
					<Title
						class="ml-[5%] sm:ml-[15%] md:ml-[30%] inline /*drop-shadow-[0_2px_1px_rgba(0,0,0,0.3)]"
						>VIA University College</Title
					>
				</div>
				<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
					<div
						class="flex flex-row justify-start order-2 col-span-1 lg:relative lg:justify-normal lg:order-1 "
					>
						<img
							src="src/images/via.png"
							alt="via"
							class="w-[70%] mr-0 h-auto lg:w-auto min-h-full object-fit z-10 "
						/>
					</div>
					<div class="flex flex-row justify-end order-2 lg:order-1">
						<Description
							class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-l from-90% from-white to-100% pl-8 z-20"
							>We were introduced to C++ first, where I could learn the basics of programming and I
							could practice creating algorithms. Througout my studies I've participated in extra
							courses in software developement where we were creating apps in HTML/CSS, Java and
							Android studio In the last year we were working with C#
						</Description>
					</div>
				</div>
			</div>
		</div>
	</section>
	<svg
		id="transitionSVG3"
		class=" ml-[20vw]"
		width="60%"
		height="h-auto"
		viewBox="0 0 345 408"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0,0 Q25,150 172,204 T345,408"
			stroke="white"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
		<path
			d="M0,0 Q25,150 172,204 T345,408"
			stroke="#C0D1EB"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-dasharray="20 20"
		/>
		<path
			id="dashline3"
			d="M345,408Q370,208 172,204Q25,150 0,0"
			stroke="white"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
			pathLength="1"
			stroke-dashoffset="0px"
			stroke-dasharray="0.2941537710336538px 1px"
		/>
	</svg>
	<section class="/*full-screen-section full-width-section p-1 /*flex /*flex-col justify-center">
		<div class="/*flex /*flex-wrap">
			<div class="balancedText" />
			<SubHeader
				class="balancedText sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline bg-slate-500 text-cyan-300 "
				>I had my internship and student job at</SubHeader
			>
			<div>
				<div class="/*flex /*flex-wrap">
					<Title class="ml-[15%] sm:ml-[35%] md:ml-[50%] inline bg-slate-500 text-cyan-300"
						>Keyhole</Title
					>
				</div>
				<div class="relative grid /*md:gap-16 lg:grid-cols-2 w-full">
					<div class="flex flex-row order-2 lg:order-1 lg:justify-end">
						<Description
							class=" text-justify align-middle  col-span-1 mt-4 lg:mt-16 bg-gradient-to-r from-90% from-white to-100% pr-8 z-20"
						>
							We were introduced to C++ first, where I could learn the basics of programming and I
							could practice creating algorithms. Througout my studies I've participated in extra
							courses in software developement where we were creating apps in HTML/CSS, Java and
							Android studio In the last year we were working with C#
						</Description>
					</div>
					<div
						class="flex flex-row justify-end order-1 col-span-1 lg:relative lg:justify-normal lg:order-2 "
					>
						<!-- <img
							src="src/images/viaUpperBig.png"
							alt="viaUpperBig"
							class="w-[70%] mr-0 h-auto lg:w-auto min-h-full object-fit z-10 "
						/> -->
						<img
							src="src/images/viaUpper.png"
							alt="viaUpper"
							class=" mr-0 lg:w-auto min-h-full max-h-[348px] w-auto object-fit z-10 "
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<svg
		id="transitionSVG3"
		class=" ml-[20vw]"
		width="60%"
		height="h-auto"
		viewBox="0 0 345 408"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0,0 Q25,150 172,204 T345,408"
			stroke="white"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
		<path
			d="M0,0 Q25,150 172,204 T345,408"
			stroke="#C0D1EB"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-dasharray="20 20"
		/>
		<path
			id="dashline3"
			d="M345,408Q370,208 172,204Q25,150 0,0"
			stroke="white"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
			pathLength="1"
			stroke-dashoffset="0px"
			stroke-dasharray="0.2941537710336538px 1px"
		/>
	</svg>
	<!-- <section class="min-h-screen">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="307" height="916" viewBox="0 0 307 916" fill="none">
            <path d="M109.431 0.251831C131.77 166.396 305.918 113.338 304.894 205.489C303.714 311.844 -1.95896 266.452 1.92588 407.933C4.89191 515.952 133.166 472.157 170.862 632.716C177.181 659.627 175.051 897.988 175.051 897.988C163.872 870.228 141.383 866.516 141.383 866.516C173.344 876.966 175.124 914.666 175.124 914.666C182.606 876.132 202.062 863.814 202.062 863.814C184.452 879.835 195.361 872.857 175.051 897.639" stroke="black" stroke-width="3.77953"/>
        </svg>
        <p>We were introduced to C++ first, where I could learn the basics
            of programming and I could practice creating algorithms. Througout my
            studies I've participated in extra courses in software developement
            where we were creating apps in HTML/CSS, Java and Android studio In the last
            year we were working with C#
        </p>
    </section> -->
	<section>
		<Swiper
			projects={[
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					]
				},
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					],
					demoOrientation: 'landscape'
				},
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					]
				},
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					]
				}
			]}
			title="University"
		/>
		<Divider />
		<Swiper
			projects={[
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					]
				},
				{
					title: 'Dashboard App',
					subTitle: 'Implemented new features and mantained existing ones in a:',
					bulletPoints: [
						'React Native mobile app',
						'React web app for tenants',
						'React web app for landlords'
					]
				}
			]}
			title="Work"
		/>
		<!-- <ProjectCard
			title="Dashboard App"
			subTitle="Implemented new features and mantained existing ones in a:"
			bulletPoints={[
				'React Native mobile app',
				'React web app for tenants',
				'React web app for landlords'
			]}
		/>
		<ProjectCard
			title="Dashboard App"
			subTitle="Implemented new features and mantained existing ones in a:"
			bulletPoints={[
				'React Native mobile app',
				'React web app for tenants',
				'React web app for landlords'
			]}
		/> -->
	</section>
</div>

<style>
	:root {
		--scroll: 0;
	}
	.test2 {
		background-color: blueviolet;
		/* display: inline; */
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

	/* .borderImage{
        border: 30px solid transparent;
        border-image-source: url(https://picsum.photos/200/300);
        border-image-slice: 30;
        border-image-repeat: round;
    } */

	.shape {
		stroke-dasharray: 50;
		stroke-dashoffset: 700;
		stroke-width: 8px;
		fill: transparent;
		stroke: #19f6e8;
		border-bottom: 5px solid black;
		transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
	}

	.svg-wrapper:hover .shape {
		stroke-width: 2px;
		stroke-dashoffset: 600;
		stroke-dasharray: 50;
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

	svg {
		/* filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4)); */
	}

	#shadowPath {
		filter: url(#dropshadow);
	}

	.arrowSVG {
		stroke-dasharray: 1500;
		stroke-dashoffset: 0;
	}

	@keyframes arrowAnim {
		0% {
			stroke-dashoffset: 1500;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}

	.arrowSVG:hover {
		animation: arrowAnim 1s forwards;
		animation: dashline1Anim 1s forwards;
	}

	#dashline1 {
		stroke-dasharray: 1px 1px;
		stroke-dashoffset: 0;
	}

	#dashline2 {
		stroke-dasharray: 1px 1px;
		stroke-dashoffset: 0;
	}

	#transitionSVG2 {
		transform: scale(1, -1);
		translate: calc(0, -100);
	}

	@keyframes dashline1Anim {
		0% {
			stroke-dasharray: 1px 1px;
		}
		100% {
			stroke-dasharray: 0px 1px;
		}
	}

	#dashline1:hover {
		animation: dashline1Anim 1s forwards;
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
</style>
