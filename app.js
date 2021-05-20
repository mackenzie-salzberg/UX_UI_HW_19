gsap.to(".flexContainer",{
    scrollTrigger:{
        trigger: ".flexContainer",
        scrub: true,
        start: "110% center",

    },
    duration: 1.1,
    scale: 1.2,
    height: 250,
});

gsap.from(".flexContainer",{
    duration:0.7,
    opacity: 0,
    y: -30,
    delay: 0.5,
});