<script lang="ts">
	import Description from "./Description.svelte"

    export let text = ''
    export let checked = false
   
    // export function onClick() {
    //     console.log('on:click')
    // }

</script>

<!-- Checkbox with optional text -->
<div class="flex items-center">
    <input {checked} type="checkbox" class="w-4 h-4 mr-2 text-primary" />
    <Description small>{text}</Description>
</div>