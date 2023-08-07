<script lang="ts">
    import {onMount} from "svelte";
    import {setScrollVar, removeScrollVar} from "../../utils/helpers.js";
    import { fade, slide } from "svelte/transition";
    // import IntersectionObserver from '../../utils/IntersectionObserver.svelte';
    import viewport from './useViewportAction';
    import Header from "../../components/Header.svelte";
    import "../../app.css";
    import type { PageData } from './$types';
	import ProfileCard from "../../components/ProfileCard.svelte";
	import TypeWriter from "../../components/TypeWriter.svelte";
	import SubHeader from "../../components/SubHeader.svelte";
	import Description from "../../components/Description.svelte";
	import Title from "../../components/Title.svelte";
	import Divider from "../../components/Divider.svelte";
   
    
    export let data: PageData;

    let visible = false;
    let isProfileExpanded = false;
    let section1Animation = false;

    // let scrollPercentage = --scroll 

    onMount(() => {
        setScrollVar()
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
        // Add the animation class
        // entry.target.classList.add('section-1-animation');
        section1Animation = true
        
    }
    });
    })

    observer.observe(document.querySelector('section-1'))
        return () => {
            //cleanup
            removeScrollVar()
        }
    });
    //setScrollVar()

    setTimeout(() => {
    visible = true; // After some delay, set showContent to true to show the content and trigger the transition
  }, 1000);

    function onProfileCardClick() {
        isProfileExpanded = true
        console.log("Profile Card Clicked");
    }

    console.log(section1Animation);


    
    
</script>
<div  class="h-screen">
    <div class="absolute m-auto left-0 right-0 top-0 bottom-0 w-fit h-fit">
        <section class="grid md:gap-16 md:grid-cols-2 lg:gap-32 min-h-full">
            {#if visible}
            <div class="h-64 flex justify-center items-center">
                <Title><TypeWriter {visible} text="Welcome!"/></Title>
            </div>
            {:else}
            
            {/if}
            <!-- {#if isProfileExpanded}
            <div class="h-64 flex justify-center items-center">
                <Header><TypeWriter {visible} text="Welcome!"/></Header>
            </div>
            {/if} -->
            {#if visible}
            <div class="h-[600px]">
            <span transition:fade={{delay: 1000, duration: 1000}}>
            <div class="flex flex-col items-center"
                transition:slide={{delay: 1000, duration: 1500}}>
            <ProfileCard 
                expanded={isProfileExpanded}
                title="Tamas Peter" 
                description="Software Engineer"
                on:click={onProfileCardClick}
                class="w-64"/>
            </div>
            </span>
            </div>
            {/if} 
        </section>
    </div>
</div>

<section class="full-width-section  -mt-[0vh] ">
    <!-- <div class="svg-wrapper">
        <svg height="50vh" width="90vw" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="50vh" width="90vw" />
            <div class="text bg-yellow-100">ZACH SAUCIER</div>
            <div class="text">ZACH SAUCIER</div>
        </svg>
    </div> -->
    <!-- <div class="ml-[45vw] w-1 h-1 border-r border-b-2 {isProfileExpanded ? 'line-in' : 'line-out'}">

    </div> -->
    {#if visible}
    <div class=" {isProfileExpanded ? 'animate-in' : 'animate-out'} p-4 pr-6 mr-2 mt-[2vh] borderImage">
        <SubHeader class="">Software Engineer specialized in React/React Native</SubHeader>
        <Divider size={24}/>
        <Description>
            As a Front-end focused software engineer, I will be
            able to design, implement and maintain mobile and web applications
            using component based development.
        </Description>
    </div>
    {/if}
</section>
<div class="bg-red-500 h-[0vh]" />
<!-- <div class="test"></div> -->
    <section class="min-h-screen full-screen-section">
        <div id="#section1" class='{section1Animation ? 'section-1' : ''}'></div>
        
        <div class='section-1-animation'></div>


        <div use:viewport
            on:enterViewport={() => {
                console.log('enter')

                //isProfileExpanded = true
                // section1Animation = true
            }}
            on:exitViewport={() => {
                console.log('exit')
                isProfileExpanded = false 
                }}
            
            >
        </div>
        <div class="h-0 bg-slate-500"></div>
        <div use:viewport
            on:enterViewport={() => {
                console.log('enter')

                isProfileExpanded = true
                // section1Animation = true
            }}
            on:exitViewport={() => {
                console.log('exit')
                //isProfileExpanded = false 
                }}
            >
        </div>
    </section>
    
    <!-- <section class="full-screen-section min-h-screen p-1">
        <div class="flex flex-wrap w-screen">
            <SubHeader class="sm:ml-[15%] md:ml-[25%] lg:ml-[30%] xl:ml-[32%] inline bg-slate-500 text-cyan-300">I started learning programming in</SubHeader> 
        <div>
        <div class="flex flex-wrap w-screen">
            <Title class="ml-[15%] sm:ml-[35%] md:ml-[50%] inline bg-slate-500 text-cyan-300">high school</Title>
        </div>
        <div class="grid md:gap-16 md:grid-cols-2">
            <img src="src/images/gimi.png" alt="gimi" class="h-auto" />
            <p class="flex">We were introduced to C++ first, where I could learn the basics
                of programming and I could practice creating algorithms. Througout my
                studies I've participated in extra courses in software developement
                where we were creating apps in HTML/CSS, Java and Android studio In the last
                year we were working with C#
            </p>
        </div>
    </section> -->
    <!-- <section class="min-h-screen">
        
        <svg xmlns="http://www.w3.org/2000/svg" width="307" height="916" viewBox="0 0 307 916" fill="none">
            <path d="M109.431 0.251831C131.77 166.396 305.918 113.338 304.894 205.489C303.714 311.844 -1.95896 266.452 1.92588 407.933C4.89191 515.952 133.166 472.157 170.862 632.716C177.181 659.627 175.051 897.988 175.051 897.988C163.872 870.228 141.383 866.516 141.383 866.516C173.344 876.966 175.124 914.666 175.124 914.666C182.606 876.132 202.062 863.814 202.062 863.814C184.452 879.835 195.361 872.857 175.051 897.639" stroke="black" stroke-width="3.77953"/>
        </svg>
        <p>We were introduced to C++ first, where I could learn the basics
            of programming and I could practice creating algorithms. Througout my
            studies I've participated in extra courses in software developement
            where we were creating apps in HTML/CSS, Java and Android studio In the last
            year we were working with C#
        </p>
    </section> -->
    
<style>
    :root {
        --scroll: 0
    }
    .test2{
        background-color: blueviolet;
        /* display: inline; */
    }
    .full-screen-section {
        height: 100vh;
        width: 100vw;
        max-width: 1536px;
        /* background: blue; */
        position: relative;
    }

    .full-width-section {
        width: 100%;
        max-width: 1536px;
        position: relative;
        
        
    }
    [data-img-to-show] {
        position: absolute;
        top: 30%;
        height: 100px;
        width: 100%;
        background: red;
    }

    @keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}
}
    .section-1 {
        width: 200px;
        height: 200px;
        background: orange;
        animation: wipe-enter 1s 1;
    }

    @media (prefers-reduced-motion: no-preference) {

        .section-1-animation {
            animation: wipe-enter 1s infinite;
        }
    }

    .m-30p {
        /* width: 30%; */
        margin-left: 30%;
    }
    .m-60p {
        /* width: 60%; */
        margin-left: 60%;
    }

    .animate-in {
        animation: fade-in 600ms forwards;
    }

    @keyframes fade-in {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        100% {
            transform: translateX(-48);
            opacity: 1;
        }
    }

    .animate-out {
        animation: fade-out 600ms forwards;
    }

    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    /* .borderImage{
        border: 30px solid transparent;
        border-image-source: url(https://picsum.photos/200/300);
        border-image-slice: 30;
        border-image-repeat: round;
    } */

        .shape {
  stroke-dasharray: 50;
  stroke-dashoffset: 700;
  stroke-width: 8px;
  fill: transparent;
  stroke: #19f6e8;
  border-bottom: 5px solid black;
  transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
}

.svg-wrapper:hover .shape {
  stroke-width: 2px;
  stroke-dashoffset: 600;
  stroke-dasharray: 50;
}

.line-in {
    animation: line-in 1600ms forwards;
}

@keyframes line-in {
    0% {
        height: 0vh;
        width: 4px;
    }
    50% {
        height: 50vh;
        width: 4px;
    }
    100% {
        height: 50vh;
        width: 45vw;
    }
}


</style>