<script>
	import Card from "./Card.svelte";

    let cardProps = {
	class:[$$restProps.class]
	}

    export let title = "";
    export let description = "";

    


</script>

<Card class="{$$props.class}">
    <img src="src/images/profilepic.jpg" alt="Profile Pic" class="-mt-16 w-32 h-32 mx-auto rounded-2xl shadow-xl" />
    <h5 class="mt-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="font-normal text-center text-gray-700 dark:text-gray-400">{description}</p>
</Card>
