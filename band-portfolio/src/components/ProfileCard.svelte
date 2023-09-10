<script>
	import Card from './Card.svelte'
	import { scrollPosition } from '../actions/scrollPosition'

	let cardProps = {
		class: [$$restProps.class]
	}

	export let title = ' '
	export let description = ' '
	export let expanded = false
</script>

<div class="{expanded ? 'expand' : 'shrink'} mt-16 mb-16">
	<div use:scrollPosition>
		<Card class=" {$$props.class} flex flex-col justify-end justify-items-end md:p-16 md:pt-0 ">
			<img
				src="src/images/profilepic.jpg"
				alt="Profile Pic"
				class="z-10 w-32 h-32 mx-auto -mt-16 border shadow-xl"
			/>
			<div class="relative">
				<div class="absolute z-0 w-32 h-32 border-2 -top-28 left-4" />
			</div>
			<h5 class="mt-8 text-2xl font-bold tracking-tight text-center text-background">{title}</h5>
			<p class="font-normal text-center text-gray-700 dark:text-gray-400">{description}</p>
		</Card>
	</div>
</div>

<style>
	.expand {
		animation: expand-animation-small 1s forwards;
	}

	.shrink {
		animation: shrink-animation-small 1s forwards;
	}
	@keyframes expand-animation-small {
		0% {
			height: 200px;
		}
		100% {
			height: 500px;
		}
	}
	@keyframes shrink-animation-small {
		0% {
			height: 500px;
		}
		100% {
			height: 200px;
		}
	}

	@keyframes expand-animation-large {
		0% {
			height: 200px;
		}
		100% {
			height: 500px; /* Double the height of the box */
		}
	}

	@media (min-width: 640px) {
		.expand {
			animation: expand-animation-large 1s forwards;
		}
	}
</style>
