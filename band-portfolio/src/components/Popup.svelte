<script lang="ts">
	import Divider from './Divider.svelte'
	import { createEventDispatcher } from 'svelte'
	import { fade, slide } from 'svelte/transition'
	import { scrollPosition } from '../actions/scrollPosition'
	import Header from './Header.svelte'
	import SubHeader from './SubHeader.svelte'

	const dispatch = createEventDispatcher()

	export let show = false
	export let title: string = ' '
	export let content = ''
	let pageOffset = 0
	let innerWidth = 0
	// Reactive variable to control scrolling
	let preventScrolling = false

	function closePopup() {
		// Emit an event to close the popup
		dispatch('close')
		preventScrolling = false
		show = false
	}

	// Update the reactive variable when the popup is active
	$: {
		if (show) {
			preventScrolling = true
			document.body.style.width = `${innerWidth}px`
		}
	}

	function setScrollToOffset() {
		window.scrollTo(0, pageOffset)
		console.log('setScrollToOffset', pageOffset)
	}
</script>

<svelte:window bind:scrollY={pageOffset} bind:innerWidth />

{#if show}
	{#if preventScrolling}
		<style>
			html,
			body {
				overflow-y: hidden;
				position: relative;
				pointer-events: none;
				touch-action: none;
				/*SAFARI FIX*/
				/* height: 100%; */
			}
		</style>
	{/if}
	<div
		class="fixed inset-0 left-0 z-40 flex items-end justify-center pointer-events-none //blur-sm backdrop-blur-md"
	>
		<div
			transition:slide={{ duration: 300 }}
			class="relative bg-[rgba(255,255,255,0.7)] /*text-white shadow-lg //border-[1px] /*border-t-8 border-t-primary
      h-full md:h-auto max-h-[90vh] min-w-[256px] /*m-2 mt-8 z-50 pointer-events-auto"
		>
			<!-- <Divider /> -->
			<div
				class=" flex pl-6 /*justify-center pt-4 pb-4 border-b bg-primary text-white min-h-[64px]"
			>
				<SubHeader class="font-bold">{title}</SubHeader>
			</div>
			<!-- <div class="absolute w-full h-3 topBar" /> -->
			<div class="h-[90%] overflow-y-auto md:overflow-y-hidden p-6">
				<Divider />
				<slot />
				<Divider />
			</div>

			<!-- <p>{content}</p> -->
			<button
				class="absolute p-4 /*text-white bg-transparent right-1 top-1 hover:bg-slate-400 text-white"
				on:click|preventDefault={closePopup}
			>
				X
			</button>
		</div>
	</div>
{/if}

<style>
	.topBar {
		background-image: linear-gradient(to top, rgba(255, 255, 255, 0) 0, #fff 100%);
	}
</style>
