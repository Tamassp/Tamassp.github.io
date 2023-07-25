<script lang="ts">
    import Header from "../../components/Header.svelte";
    import "../../app.css";
    import type { PageData } from './$types';
	import ProfileCard from "../../components/ProfileCard.svelte";
	import TypeWriter from "../../components/TypeWriter.svelte";

    import { fade } from "svelte/transition";
    
    export let data: PageData;

    let visible = false;

    setTimeout(() => {
    visible = true; // After some delay, set showContent to true to show the content and trigger the transition
  }, 1000);

    
</script>

<div class="h-screen">
    <div class="absolute m-auto left-0 right-0 top-0 bottom-0 w-fit h-fit">
        <Header><TypeWriter {visible} text="Welcome!"/></Header>
        <!-- <SubHeader>Tamas Peter</SubHeader> -->
        {#if visible}
        <div class="flex flex-col items-center" transition:fade={{delay: 250, duration: 1000}} >
        <ProfileCard 
            title="Tamas Peter" 
            description="Software Engineer"
            class="mt-24 w-64"
             />
        </div>
        {/if}
    </div>
</div>
<style>

</style>