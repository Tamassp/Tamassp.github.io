<script>
	export let navigateTo = ' ';
	export let id = ' ';
</script>

<a {id} href={navigateTo} on:mouseenter on:mouseleave>
	<slot />
</a>

<style>
	.container {
		height: 128px;
		width: 128px;
	}

	a:link,
	a:visited {
		/* background-color: #f44336; */
		background-color: rgba(23, 97, 120, 100);
		color: white;
		margin: 8px;
		padding: 14px 25px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		height: 128px;
		width: 128px;

		/* border: 4px solid red; */
		border-radius: 4px;
	}

	/* a:hover, a:active {
    background-color: red;
    } */
</style>
