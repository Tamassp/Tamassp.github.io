<script>
	let buttonProps = {
		class: [$$restProps.class]
	};

	export let type = 'primary';
	export let navigateTo = '';
</script>

<button
	on:click
	on:mouseover
	on:focus
	on:mouseenter
	on:mouseleave
	{...buttonProps}
	class="{type} style"
>
	<slot />
	<a href={navigateTo} />
</button>

<style>
	.primary {
		color: green;
	}
	.danger {
		color: red;
	}
	.sm {
		font-size: 1em;
		padding: 0.1em;
	}
	.lg {
		font-size: 2em;
	}
	.style {
		/* border: 1px solid rgb(255, 255, 255); */
		width: fit-content;
		padding-left: 16px;
		padding-right: 16px;
	}
	.text {
		font-size: 2em;
		font-weight: 600;
		color: rgb(255, 255, 255);
		padding: 12px;
	}
</style>
