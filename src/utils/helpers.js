import TypeScriptIcon from "../icons/TypeScriptIcon.svelte"

export function setScrollVar() {
	window.addEventListener('scroll', setScrollVar);
	window.addEventListener('resize', setScrollVar);
	const htmlElement = document.documentElement;
	const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
	// console.log(Math.min
	// (percentOfScreenHeightScrolled * 100, 100))
	htmlElement.style.setProperty('--scroll', Math.min(percentOfScreenHeightScrolled * 100, 100));
}

export function removeScrollVar() {
	window.removeEventListener('scroll', setScrollVar);
	window.removeEventListener('resize', setScrollVar);
}

// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('section-1-animation');
//     }
//   });
// })

// observer.observe(document.querySelector('.section-1'))


// export function getIcon(icon: string){
// 	if(icon == 'typescript'){
// 		return <TypeScriptIcon />
// 	}
// }