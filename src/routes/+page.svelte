<script lang="ts">
	import LinkButton from '../components/LinkButton.svelte'
	import Button from '../components/Button.svelte'
	import Divider from '../components/Divider.svelte'
	import { onMount } from 'svelte'
	import Title from '../components/Title.svelte'

	let clicked = false

	setTimeout(() => {
		clicked = true
	}, 1000)

	onMount(() => {
		console.log('mounted')
	})

	function handleClick() {
		if (!clicked) {
			clicked = true
		} else {
			clicked = false
		}

		// console.log('clicked')
		// const pathUpper = document.querySelector('#upper')
		// const pathLower = document.querySelector('#lower')
		// console.log(pathUpper.getTotalLength())
		// console.log(pathLower.getTotalLength())
	}
	const handleMouseEnter = (e: MouseEvent) => {
		const targetElement = e.target as HTMLElement
		if (targetElement.id === 'software') {
			const computer = document.getElementById('computer')
			computer?.classList.remove('unSelect')
			computer?.classList.add('select')
		}
		if (targetElement.id === 'bands') {
			const note = document.getElementById('note')
			note?.classList.remove('unSelect')
			note?.classList.add('select')
		}
	}

	const handleMouseLeave = (e: MouseEvent) => {
		const targetElement = e.target
		if (targetElement.id === 'software') {
			const computer = document.getElementById('computer')
			computer?.classList.remove('select')
			computer?.classList.add('unSelect')
		}
		if (targetElement.id === 'bands') {
			const note = document.getElementById('note')
			note?.classList.remove('select')
			note?.classList.add('unSelect')
		}
	}

	//variable Init
	let count = 0
	//function to be called on click
	function incrementCount() {
		//incremtent
		count++
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Homenaje" rel="stylesheet" />
	<!-- <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />  -->
</svelte:head>

<!-- <svelte:window bind:innerWidth bind:innerHeight /> -->
<!-- TEST BUTTON -->
<!-- <button on:click={incrementCount}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button> -->
<div class="w-full pageContainer">
	<Title>Choose porfolio</Title>
	<Divider />
	<nav class="flex justify-center ">
		<LinkButton
			id="software"
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			navigateTo="/software"
		>
			<svg
				id="computer2"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="idle"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
				/>
			</svg>
			<svg
				id="computer"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="select unSelect"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
				/>
			</svg>

			<h3 class="">Software</h3>
		</LinkButton>
		<LinkButton
			id="bands"
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			navigateTo="/bands"
		>
			<svg
				id="note"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="select unSelect"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
				/>
			</svg>
			Bands
		</LinkButton>
	</nav>
</div>

<style>
	* {
		font-family: 'Homenaje';
		/* font-family: 'Raleway', sans-serif; */
	}
	:global(body) {
		/* background-color: rgb(0, 0, 0);
		color: white; */
		display: flex;
		justify-content: center;
	}

	#upper {
		stroke-dasharray: 5;
		stroke-dashoffset: 25;
		animation: 2s ease-in forwards test;
	}

	#lower {
		stroke-dasharray: 30;
		stroke-dashoffset: 5;
		animation: 2s ease-in forwards test;
	}

	@keyframes test {
		0% {
			stroke-dashoffset: 38;
			stroke-dasharray: 5;
		}
		100% {
			stroke-dashoffset: 0;
			stroke-dasharray: 38;
		}
	}

	@keyframes test2 {
		0% {
			stroke-dashoffset: 38;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}

	.pageContainer {
		/* background-color: bisque; */
		/* opacity: 0.5; */
		position: relative;
		display: flex;
		flex-direction: column;
		align-self: center;
		align-items: center;
		/* MAKE CONDITION */
		/* max-width: 800px; */
		width: 100%;
		margin-top: 25vh;
	}

	#computer {
		margin-top: -78px;
		stroke-dasharray: 75;
		stroke-dashoffset: 40;
		/* color: rgba(255, 255, 255, 0.9); */
		color: black;
		z-index: 5;
		/* animation: 2s ease-in forwards select; */
	}
	#software :hover {
		background-color: white;
	
	}

	#computer2 {
		z-index: 1;
	}

	#computer2.idle {
		animation: 10s ease-in-out forwards infinite idle;
	}

	#computer.select {
		animation: 600ms ease-in forwards select;
		/* color: blue; */
	}

	#computer.unSelect {
		animation: 600ms ease-out forwards unSelect;
	}

	#note {
		stroke-dasharray: 30;
		stroke-dashoffset: 30;
	}

	#note.select {
		animation: 600ms ease-in-out none selectNote;
	}

	#note.unSelect {
		animation: 600ms ease-out forwards unSelectNote;
	}

	@keyframes idle {
		0% {
			stroke-dasharray: 10;
			stroke-dashoffset: 80;
		}
		50% {
			stroke-dasharray: 10;
			stroke-dashoffset: 40;
		}
		100% {
			stroke-dasharray: 10;
			stroke-dashoffset: 0;
		}
	}
	@keyframes select {
		0% {
			stroke-dashoffset: 75;
		}
		100% {
			stroke-dashoffset: 40;
		}
	}

	@keyframes unSelect {
		0% {
			stroke-dashoffset: 40;
		}
		100% {
			stroke-dashoffset: 75;
		}
	}

	@keyframes selectNote {
		0% {
			stroke-dashoffset: 30;
			stroke-dasharray: 20;
		}
		100% {
			stroke-dashoffset: 0;
			stroke-dasharray: 10;
		}
	}

	@keyframes unSelectNote {
		0% {
			stroke-dashoffset: 0;
		}
		100% {
			stroke-dashoffset: 30;
		}
	}

	@media (min-width: 600px) {
		.pageContainer {
			min-width: 600px;
		}
		.mainTitle {
			margin-top: 20px;
		}
	}
</style>
