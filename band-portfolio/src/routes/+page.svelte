<script>
	import LinkButton from "../components/LinkButton.svelte";
    import Button from "../components/Button.svelte";
    

    function handleClick() {
        console.log("Click")
    }
    function handleMouseEnter() {
        const computer = document.getElementById("computer")
        const pathComputer = document.querySelector("#computer path")
        // console.log(pathComputer);
        // console.log(pathComputer.getTotalLength());
        // console.log("Hover")
        computer?.classList.remove("unSelect")
        computer?.classList.add("select")
       console.log(computer?.classList);

        // const pathNote= document.querySelector("#note path")
        // console.log(pathNote);
        // console.log(pathNote.getTotalLength());
        // console.log("Hover")
    }

    function handleMouseLeave(){
        const computer = document.getElementById("computer")
        computer?.classList.remove('select')
        computer?.classList.add('unSelect')
        console.log(computer?.classList);
    }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Homenaje" rel="stylesheet">
</svelte:head>

<!-- <svelte:window bind:innerWidth bind:innerHeight /> -->

<div class="pageContainer">
    <h1>Choose portfolio</h1>
    <nav>
        <LinkButton on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} navigateTo="/software">
            <svg id="computer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
            Software
        </LinkButton>
        <LinkButton navigateTo="/bands">
            <svg id="note" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
            Bands
        </LinkButton>
    </nav>
    <!-- <Button type='primary' on:click={handleClick} navigateTo="/bands">
        <h2>Software</h2>
    </Button>
    <Button type='primary' on:click={handleClick}>
        <h2>Bands</h2>
    </Button> -->
</div>




<style>
    * {
        font-family: 'Homenaje';
    }
    :global(body) {
        background-color: rgb(0, 0, 0);
        color: white;
        display: flex;
        justify-content: center;
        
    }
    
    .pageContainer {
        /* background-color: bisque; */
        /* opacity: 0.5; */
        position: relative;
        display: flex;
        flex-direction: column;
        align-self: center;
        /* MAKE CONDITION */
        max-width: 800px;
        margin-top: 25vh;
    }

    #computer {
        stroke-dasharray: 110;
        stroke-dashoffset: 105;
        /* animation: 2s ease-in forwards select; */
    }

    #computer.select {
        animation: 2s ease-in forwards select;
    }

    #computer.unSelect {
        animation: 2s ease-out forwards unSelect;
    }

    @keyframes select {
        0% {
            stroke-dashoffset: 0;
        }
        50%{
            stroke-dashoffset: 110;
        }
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes unSelect {
        0% {
            stroke-dashoffset: 110;
        }
        50%{
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 110;
        }
    }
    
    @media (min-width: 600px) {
        .pageContainer {
             min-width: 600px;
        }
        .mainTitle {
            margin-top: 20px;
        }
    }

</style>