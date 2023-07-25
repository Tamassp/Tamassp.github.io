<script lang="ts">
    // import "../fonts.css"
    import "../app.css";
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<!-- <h1 class="text-3xl font-bold underline">
  Hello world!
</h1> -->


<slot />

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

</style>