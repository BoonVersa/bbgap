//performing
//function smoke(name, lastName) {
//    console.log('hello ' + Name + ' ' + lastName)
//}

//smoke ('John', 'Papa');

//calculating

//function square(number) {
//    return number * number;
//}

//let number = square(9);
//console.log(number);

//let x = 10;
//let y = 2;

// console.log(x + y);
// console.log(x ** y);

//increment (++)
//console.log(x++);
//console.log(x);

//decrement (--)
//console.log(y--);
//console.log(y);

//<svg width="120" height="103" viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
//</svg>

//GREEN SOCK CODE GREEN SOCK CODEGREEN SOCK CODEGREEN SOCK CODEGREEN SOCK CODEGREEN SOCK CODEGREEN SOCK CODE

//gsap.to('.cook', {y: -50, duration: 20,})

//gsap.fromTo('.text', {opacity: 0}, {opacity:1, duration: 1})

//gsap.fromTo('.logo', {y: 100}, {y:0,  ease: "expo.out", duration: 1})



gsap.set('body', { overflow: 'hidden' });

let gapcontainer = document.querySelector('.gapcontainer');

let isScrollLocked = true;

function toggleScrollLock() {
  isScrollLocked = false;
  const body = document.querySelector('body');
  body.style.overflow = isScrollLocked ? 'hidden' : 'auto';
}

////Scroll unlockers///////

const toggleButton = document.querySelector('#aboutSS');
const toggleButtonLock = document.querySelector('#lock');
const toggleButtonResume = document.querySelector('#resumeSS');
const toggleButtonSkills = document.querySelector('#skillsSS');

toggleButton.addEventListener('click', toggleScrollLock);
toggleButtonLock.addEventListener('click', toggleScrollLock);
toggleButtonResume.addEventListener('click', toggleScrollLock);
toggleButtonSkills.addEventListener('click', toggleScrollLock);


///Mobile Scroll unlocked///

function unlockScrollOnSmallScreens() {
  const screenWidth = window.innerWidth;
  const body = document.querySelector('body');
  if (screenWidth <= 768) {
    body.style.overflow = 'auto'; // Unlock scrolling on smaller screens
    isScrollLocked = false;
    gsap.set(gapcontainer, { x: 0, y: 0 });
  }
}

unlockScrollOnSmallScreens(); // Call the function initially to set the correct scroll state

// Add a listener for screen size changes
window.addEventListener('resize', unlockScrollOnSmallScreens);


if (window.innerWidth > 768) {
  gsap.set(gapcontainer, { x: -180, y: -250 });
}
//tl.fromTo('.cook', {scale: 0}, {scale: 1})
//tl.fromTo('.logo', {y: 0, rotation: '-1080deg'}, {duration: 1, y: 0, rotation: '0deg'}, '<')
//tl.fromTo('.logo', {y: 0,}, {y: -20, repeat: -1, yoyo: true, rotation: 20})
//tl.fromTo('#innerDisk', {y: 0,}, {y: 0, repeat: -1, yoyo: true, rotation: 20}, '<')

//tl.to('#lightRing', {scaleY: 0.5, y: 400})
//tl.to('#innerDisk', {scaleY: 0.2, y: 200},'<')
//tl.to('#mainDisk', {scaleY: 0.5, y: 340},'<')

const ent = document.querySelector('.idisk')

ent.addEventListener('mouseOver', () => {
    gsap.to('.cook', {opacity: 0, duration: 1, ease: 'rough', randomize: true})
})


//gsap.to('.idisk', {x: -500,});



gsap.to('.beam', {y:0 , duration: 0, opacity: 0,});

//3D disk drop//
 
const object1 = document.querySelector('.idisk');
const tl = gsap.timeline({defaults: {duration: 1,}})

function activateTimeline() {    
object1.removeEventListener('mouseenter', activateTimeline);
object1.removeEventListener('click', activateTimeline);
tl.to('.activate', {opacity: 1,duration: 1,})
tl.to('#ENTER', {opacity: 0,duration: 1,},'<')
tl.to('.ringon', {fill: '#93ddff',},'<')
tl.to('.gapcontainer', {y: 0,});
tl.to("#innerDiskstart", {morphSVG: "#innerDiskend", duration: .9, scaleY: 1, delay: .5,});
tl.to("#cringstart", {morphSVG: "#cringend", duration: .9, },'<');
//tl.to("#lightRingstart", {morphSVG: "#lightRingend", duration: .9, },'<');
tl.to("#Mainsstart", {morphSVG: "#Mainsend", duration: .9, },'<');
tl.to("#paint1_radial_59_29", {morphSVG: "#lightRingend", duration: .9, },'<');
tl.to("#lightRingstart", {scaleY: .3, y: 900,},'<');
tl.to("#cringstart", {y: -200,});
tl.to('.beam', {opacity: 1,duration: 5,})
tl.fromTo('#uno', {y: 500,}, {y: -500, repeat: -1, opacity: 0, duration: 2},'<');
tl.fromTo('#tres', {y: 400,}, {y: 0, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#quatro', {y: 0,}, {y: -700, repeat: -1, opacity: 0, duration: 3},'<');
tl.fromTo('#dos', {y: 0,}, {y: -700, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#cinco', {y: 300,}, {y: -500, repeat: -1, opacity: 0, duration: 3.5},'<');
tl.fromTo('#sies', {y: 300,}, {y: -500, repeat: -1, opacity: 0, duration: 2.2},'<');
tl.fromTo('#siete', {y: 700,}, {y: -700, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#ocho', {y: 500,}, {y: 0, repeat: -1, opacity: 0, duration: 1.4},'<');
tl.fromTo('.gap', {scaleX: 0, opacity: 0, y: 300,}, {scaleX: 1, opacity: 1, duration: 1, y: 100,});
tl.fromTo('.gap', {opacity: 1,}, {opacity: .5, duration: 4, repeat: -1, yoyo: true,});
tl.to('#gaplinestart', {scaleX: .9, scaleY: .9, x: 45, y: 35, repeat: -1, yoyo: true, duration: 2,},'<');
tl.to('.gapcontainer', {x: 0,});
//tl.fromTo('#gaplinestart', {y: 35, x: 45}, {x: 0, y: 0, repeat: -1, yoyo: true});
tl.fromTo('.hello',{y: -100, opacity: 0 }, {y: -1, scaleX: 1, opacity: 1},'<');
tl.fromTo('.butler', {y: -50, opacity: 0,}, {y: -1, scaleX: 1, opacity: 1, delay: .7});
//tl.fromTo('.butler', {x: 0, }, {x: 100, duration: 100},'<');
tl.fromTo('.list', {y: -50, opacity: 0, }, {y: -1, scaleX: 1, opacity: 1},'<');
//tl.fromTo('.dialogue', {x: 0, }, {x: -100, });
tl.fromTo('.but1', {x: 100, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1, duration: 2},'<');
tl.fromTo('.but2', {x: 130, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1, duration: 2.12},'<');
tl.fromTo('.but3', {x: 160, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1, duration: 2.14},'<');
tl.fromTo('.but4', {x: 190, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1, duration: 2.16},'<');


  }
  
  object1.addEventListener('mouseenter', activateTimeline)
  object1.addEventListener('click', activateTimeline);

///skipping timeline//

function skippedtl() {    
object1.removeEventListener('mouseenter', skippedtl);
object1.removeEventListener('click', skippedtl);
object1.removeEventListener('mouseenter', activateTimeline);
object1.removeEventListener('click', activateTimeline);
tl.to('.gapcontainer', {x: 0, duration: 0});  
tl.to('.activate', {opacity: 1, duration: 0,})
tl.to('#ENTER', {opacity: 0,duration: 0,},'<')  
tl.to('.ringon', {fill: '#93ddff', duration: 0},'<')
tl.to('.gapcontainer', {y: 0, duration: 0});
tl.to("#innerDiskstart", {morphSVG: "#innerDiskend",  duration: 0, scaleY: 1,});
tl.to("#cringstart", {morphSVG: "#cringend",  duration: 0, },);
//tl.to("#lightRingstart", {morphSVG: "#lightRingend", duration: .9, },'<');
tl.to("#Mainsstart", {morphSVG: "#Mainsend",  duration: 0, });
tl.to("#paint1_radial_59_29", {morphSVG: "#lightRingend",  duration: 0, },'<');
tl.to("#lightRingstart", {scaleY: .3, y: 900, duration: 0});
tl.to("#cringstart", {y: -200, duration: 0});
tl.to('.beam', {opacity: 1, duration: 0,})
tl.fromTo('#uno', {y: 500,}, {y: -500, repeat: -1, opacity: 0, duration: 2},'<');
tl.fromTo('#tres', {y: 400,}, {y: 0, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#quatro', {y: 0,}, {y: -700, repeat: -1, opacity: 0, duration: 3},'<');
tl.fromTo('#dos', {y: 0,}, {y: -700, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#cinco', {y: 300,}, {y: -500, repeat: -1, opacity: 0, duration: 3.5},'<');
tl.fromTo('#sies', {y: 300,}, {y: -500, repeat: -1, opacity: 0, duration: 2.2},'<');
tl.fromTo('#siete', {y: 700,}, {y: -700, repeat: -1, opacity: 0, duration: 5},'<');
tl.fromTo('#ocho', {y: 500,}, {y: 0, repeat: -1, opacity: 0, duration: 1.4},'<');
tl.fromTo('.gap', {scaleX: 0, opacity: 0, y: 300, duration: 0,}, {scaleX: 1, opacity: 1, duration: 0, y: 100,});
tl.fromTo('.gap', {opacity: 1, duration: 0,}, {opacity: .5, duration: 0, repeat: -1, yoyo: true, duration: 0,});
tl.to('#gaplinestart', {scaleX: .9, scaleY: .9, x: 45, y: 35, repeat: -1, yoyo: true,  duration: 0,});
//tl.fromTo('#gaplinestart', {y: 35, x: 45}, {x: 0, y: 0, repeat: -1, yoyo: true});
tl.fromTo('.hello',{y: -100, opacity: 0, duration: 0}, {y: -1, scaleX: 1, opacity: 1,  duration: 0});
tl.fromTo('.butler', {y: -50, opacity: 0, duration: 0}, {y: -1, scaleX: 1, opacity: 1, duration: 0});
//tl.fromTo('.butler', {x: 0, }, {x: 100, duration: 100},'<');
tl.fromTo('.list', {y: -50, opacity: 0, duration: 0}, {y: -1, scaleX: 1, opacity: 1, duration: 0});
//tl.fromTo('.dialogue', {x: 0, }, {x: -100, });
tl.fromTo('.but1', {x: 100, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1,  duration: 0});
tl.fromTo('.but2', {x: 130, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1,  duration: 0});
tl.fromTo('.but3', {x: 160, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1,  duration: 0});
tl.fromTo('.but4', {x: 190, opacity: 0,}, {x: 0, ease: Back.easeOut.config(2), opacity: 1,  duration: 0});


  }

const skipButton = document.querySelector('#skipper');

skipButton.addEventListener('click', skippedtl);

///skipping end


  // Ben Blanj 
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
})

ScrollTrigger.create({
  trigger: ".menu",
  pin: true,
  start: "top top",
  end: "+=8000",
  markers: false
});

 gsap.set(".menu", { opacity: 0 });

ScrollTrigger.create({
  trigger: ".menu",
  start: "top top",
  end: "+=50",
  onUpdate: (self) => {
    const opacity = self.progress.toFixed(2);
    gsap.to(".menu", { opacity: opacity });
  }
});

//////// Intro Buttons Travel to section.///////


document.querySelector("#lock").addEventListener("click", e => {
  smoother.scrollTo(".projectpic", true, "top top");
});

document.querySelector("#aboutSS").addEventListener("click", e => {
  smoother.scrollTo(".profile", true, "top top"); 
});

document.querySelector("#resumeSS").addEventListener("click", e => {
  smoother.scrollTo(".resumepic", true, "top top"); 
});

document.querySelector("#skillsSS").addEventListener("click", e => {
  smoother.scrollTo(".skillpic", true, "top top");
});


//////// Menu  Traveling buttons ////////


document.querySelector("#clock").addEventListener("click", e => {
  smoother.scrollTo(".projectpic", true, "top top");
});

document.querySelector("#aboutSSM").addEventListener("click", e => {
  smoother.scrollTo(".profile", true, "top top"); 
});

document.querySelector("#resumeSSM").addEventListener("click", e => {
  smoother.scrollTo(".resumepic", true, "top top"); 
});

document.querySelector("#skillsSSM").addEventListener("click", e => {
  smoother.scrollTo(".skillpic", true, "top top");
});
