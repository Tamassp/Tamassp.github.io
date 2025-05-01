<script>
	import FootballIcon from '../icons/FootballIcon.svelte'
	import MountainIcon from '../icons/MountainIcon.svelte'
	import PianoIcon from '../icons/PianoIcon.svelte'
	import Divider from './Divider.svelte'
	import Header from './Header.svelte'
	import TitleDescription from './TitleDescription.svelte'
	import Description from './Description.svelte'
</script>

<div>
	<div class="grid md:grid-cols-2 gap-y-8 gap-x-4">
		<div>
			<!-- <TitleDescription
				title="Skills"
				bulletPoints={[
					'React / React Native / Vue',
					'JavaScript / TypeScript',
					'.NET C# / Java',
					'GraphQL / MongoDB / SQL',
					'Azure / GitHub Actions',
					'Unity / XR Interaction Toolkit / AR Core'
				]}
			/>
			<Divider /> -->
			<TitleDescription
				title="Experience"
				subTitle="Keyhole (Frontend Developer)"
				bulletPoints={[
					'Maintained a React Native mobile and two React web applications in the insurance industry',
					'Demonstrating ownership over components and several flows',
					'Designed reusable and extendable UI components and implemented them in the scope of the applications'
				]}
			/>
			<TitleDescription
				title=""
				subTitle="Artlinco (Full-stack Developer)"
				bulletPoints={[
					'Designing and implementing IoT, Cloud and Dashboard systems for monitoring roadwork sings',
					'Being a core developer for planning the software architecture',
					'Keeping close contact with the customers to solidify their needs'
				]}
			/>
		</div>
		<div>
			<TitleDescription
				title="Education"
				subTitle="VIA University College (Software Engineering)"
				bulletPoints={['Group Projects', 'Internship', 'Interactive Media']}
			/>
			<Divider />
			<TitleDescription
				title="Soft Skills"
				subTitle=""
				bulletPoints={[
					'I can contribute transparently, ensuring my work is ready for overview or handover',
					'I like to reason in the format of “I think [...], because of [...]” to optimize discussions'
				]}
			/>
			<Divider />
			<Header>Interests</Header>
			<div class="flex flex-row items-center gap-2 mt-4">
				<PianoIcon />
				<FootballIcon />
				<MountainIcon />
			</div>

		</div>
	</div>
	<div class="flex flex-col items-center">
		<Description class="w-full mt-16 text-center">
				More Details in project section
		</Description>
	</div>
</div>
