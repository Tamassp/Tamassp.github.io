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


//If multiple images are loading, wait for all of them to finish

export const createLoadObserver = handler => {
	let waiting = 0

	const onload = el => {
		waiting++
		el.addEventListener('load', () => {
			waiting--
			if (waiting === 0) {
				handler()
			}
		})
	}

	return onload
}

//Check if images are fully loaded
export const imagesLoaded = () => {
	const images = document.querySelectorAll('img')
	images.forEach((image) => {
		function loaded() {
			console.log('loaded!!!Helper')
			
		}

		if (image.complete) {
			return loaded()
		} else {
			image.addEventListener('load', loaded)
			image.addEventListener('error', () => console.log('error'))
		}
	}
	)
}
