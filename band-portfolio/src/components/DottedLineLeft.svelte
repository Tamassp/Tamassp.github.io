<script lang="ts">
	import viewport from '../actions/useViewportAction'

	export let inverted = false
	export let id: string = '1'
	const elmentID = 'dashline' + id

	let firstTime = true
	let offset = 0
	let elementHeight = 0

	function checkSVGHeight() {
		const vw = document.getElementById('viewportWrapper')
		if (vw) {
			elementHeight = vw.offsetHeight
		}
	}

	function setOffset() {
		offset = window.scrollY
	}

	function handleScroll() {
		const vh = window.innerHeight
		let animationValue = (window.scrollY - offset) / (vh + elementHeight)
		// console.log('wdwScroll: ' + window.scrollY)
		// console.log('Offs: ' + offset)
		// console.log('minus: ' + (window.scrollY - offset))
		// console.log('vh: ' + vh)
		// console.log('elementH: ' + elementHeight)
		// console.log('animationValue: ' + animationValue)
		// console.log('Value: ' + scrollValue)
		const dashedLine = document.getElementById(elmentID)
		if (animationValue) {
			//const pathLength = dashedLine.getTotalLength()
			dashedLine.style.strokeDasharray = `${-animationValue + 1} ${animationValue} `
			//console.log((1 - animationValue.toString()) * pathLength)

			console.log('pathlenght: ' + dashedLine.getTotalLength())
		}
	}
</script>

<div
	id="viewportWrapper"
	use:viewport
	on:enterViewport={() => {
		console.log('enter DASHEDLINE')
		checkSVGHeight()
		if (firstTime) {
			setOffset()
			firstTime = false
		}
		//dashedLineScrolling()
		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', checkSVGHeight)
	}}
	on:exitViewport={() => {
		removeEventListener('scroll', handleScroll)
		removeEventListener('resize', checkSVGHeight)
		console.log('exit DASHEDLINE')
	}}
>
	<svg
		class="ml-[20vw] {inverted ? 'invertedSVG' : ' '} "
		width="60%"
		height="h-auto"
		viewBox="0 0 690 408"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0,0 Q50,200 345,204 T690,408"
			stroke="white"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
		<path
			d="M0,0 Q50,200 345,204 T690,408"
			stroke="rgba(23,97,120,0.95)"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
			stroke-dasharray="20 20"
		/>
		<path
			id={elmentID}
			d="M690,408Q640,208 345,204Q50,200 0,0"
			stroke="white"
			stroke-width="6"
			stroke-linejoin="round"
			stroke-linecap="round"
			pathLength="1"
			stroke-dashoffset="0px"
			stroke-dasharray="300px 300px"
		/>
	</svg>
</div>

<!-- color:C0D1EB -->
<!-- stroke-dasharray="0.2941537710336538px 1px" -->
<style>
	.invertedSVG {
		transform: scale(1, -1);
		translate: calc(0, -100);
		rotate: 180deg;
	}
</style>
