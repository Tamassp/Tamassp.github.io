export function windowResize(node, isBigScreen) {

    function handleResize() {
        let isBig = window.innerWidth < 768; // Check if the screen is less than 768px
        window.addEventListener('resize', () => {
            isBig = window.innerWidth < 768; // Update the variable on window resize
        });
    }
    window.addEventListener('resize', handleResize);

    return {
        update(isBigScreen) {
            isBigScreen = isBig 
        // the value of `bar` has changed
      },

        destroy() {
            window.removeEventListener('resize', handleResize);
        },
    };
}