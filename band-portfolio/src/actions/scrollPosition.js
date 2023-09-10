export function scrollPosition(node) {
	let scrollValue = 0;
	const viewportHeight = window.innerHeight / 2 - 124;
	function handleScroll() {
		scrollValue = window.scrollY;
		if (scrollValue < viewportHeight + 112) {
			//MOVING THE ELEMENTS
			//node.style.transform = `translateY(${scrollValue}px)`;
			node.style.height = `${218 + Math.round(scrollValue)}px`;
		}
	}

	window.addEventListener('scroll', handleScroll);

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};
}
