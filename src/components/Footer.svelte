<script lang="ts">
	import GitHubIcon from '../icons/GitHubIcon.svelte'
	import Description from './Description.svelte'
	import Divider from './Divider.svelte'
	import Header from './Header.svelte'
</script>

<div class="w-full /*border /*border-b-0">
	<div class="flex flex-col items-center justify-center h-full">
		<div class="flex flex-row items-center justify-center">
			<GitHubIcon class="m-2" />
			<!-- <GitHubIcon class="m-2" />
			<GitHubIcon class="m-2" /> -->
		</div>
		<Divider />
		<Description>Find more contact info on my CV</Description>
	</div>
</div>
