<script lang='ts'>
	import Description from "./Description.svelte";
import Header from "./Header.svelte";
	import SubHeader from "./SubHeader.svelte";


    export let title = '';
    export let description = '';
    export let subTitle = '';
    export let bulletPoints: string[] = [];

</script>

<Header>{title}</Header>
{#if subTitle}
    <Description class="font-bold mt-4">{subTitle}</Description>
{/if}
{#if bulletPoints.length > 0}
    <div class="mt-4">
        {#each bulletPoints as bulletPoint}
            <div class="flex items-start">
                <div class="w-2 h-2 bg-white rounded-full mr-2 mt-2 md:mt-3"></div>
                <Description class="max-w-xs">{bulletPoint}</Description>
            </div>
        {/each}
    </div>
{/if}
{#if description}
    <Description class="max-w-xs mt-4">{description}</Description>
{/if}
