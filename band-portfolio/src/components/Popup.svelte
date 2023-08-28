<script>
	import Divider from "./Divider.svelte";
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


  export let show = false;
  export let title = '';
  export let content = '';

  // Reactive variable to control scrolling
  let preventScrolling = false;

  function closePopup() {
    // Emit an event to close the popup
    dispatch('close');
    preventScrolling = false;
    show = false;
  }

  // Update the reactive variable when the popup is active
  $: {
    if (show) {
      preventScrolling = true;
    }
  }

</script>
//GRID
{#if show}
{#if preventScrolling}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
  <div class="fixed inset-0 flex items-center justify-center z-40 //blur-sm backdrop-blur-md">
    <div class="relative bg-gray-800 text-white  shadow-lg //border-[1px] border-t-4 h-full md:h-auto max-h-[90vh] min-w-[256px] m-2 mt-8 z-50">
      <Divider />
      <div class="h-[90%] overflow-y-auto p-6">
      <slot/>
      <Divider />
      </div>
      <!-- <p>{content}</p> -->
      <button class="absolute p-4 right-1 top-1 bg-transparent text-white hover:bg-slate-400" on:click={closePopup}>
        X
      </button>
    </div>
  </div>
{/if}