<script>
	import Divider from './Divider.svelte'
	import Header from './Header.svelte'
	import TitleDescription from './TitleDescription.svelte'
</script>

<!-- Grid for the text -->
<div class="grid md:grid-cols-2 gap-y-8 gap-x-4">
	<div>
		<TitleDescription
			title="Skills"
			bulletPoints={[
				'React / React Native / Vue',
				'JavaScript / TypeScript',
				'.NET C# / Java',
				'GraphQL / MongoDB / SQL',
				'Azure / GitHub Actions',
				'Unity'
			]}
		/>
		<Divider />
		<TitleDescription
			title="Experience"
			subTitle="Keyhole (Frontend Developer)"
			bulletPoints={[
				'Created features and maintained a React Native mobile application and two React web applications'
			]}
		/>
	</div>
	<div>
		<TitleDescription
			title="Education"
			subTitle="VIA University College (Software Engineering)"
			bulletPoints={['Group Projects', 'Internship', 'Interactive Media']}
			description="More details in projects"
		/>
		<Divider />
		<Header>Interests</Header>
	</div>
</div>
