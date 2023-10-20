<script lang="ts">
    import { draw } from "svelte/transition";
	import viewport from "../actions/useViewportAction"


    export let visible = false;
</script>

<div
	use:viewport
	on:enterViewport={() => {
        visible = true;
    }}
	on:exitViewport={() => {
		
	}}
/>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="{$$props.class}">
    {#if visible}
        <g clip-path="url(#clip0_1031_57)">
            <path d="M28.7416 9.59586C28.5897 9.03132 28.2922 8.51659 27.8788 8.1032C27.4654 7.68982 26.9507 7.39228 26.3862 7.24039C24.8432 6.64466 9.89777 6.35279 5.5623 7.25746C4.99771 7.40937 4.48294 7.70694 4.06953 8.12037C3.65612 8.53381 3.35858 9.0486 3.2067 9.61319C2.5103 12.6685 2.45743 19.2741 3.22377 22.3977C3.37568 22.9622 3.67324 23.477 4.08665 23.8904C4.50005 24.3038 5.01481 24.6013 5.57937 24.7532C8.63463 25.4564 23.1602 25.5554 26.4032 24.7532C26.9678 24.6013 27.4825 24.3037 27.8959 23.8903C28.3093 23.477 28.6068 22.9622 28.7587 22.3977C29.5012 19.069 29.5541 12.8732 28.7416 9.59586Z" 
                stroke="rgba(23,97,120,0.95)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" 
                transition:draw={{ delay: 200, duration: 600 }}/>
            <path d="M20.3779 15.9966L13.4138 12.0024V19.9906L20.3779 15.9966Z" 
                stroke="rgba(23,97,120,0.95)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                transition:draw={{ delay: 800, duration: 600 }}/>
        </g>
        <defs>
            <clipPath id="clip0_1031_57">
                <rect width="32" height="32" fill="white"/>
            </clipPath>
        </defs>
    {/if}
</svg>