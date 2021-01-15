gsap.registerPlugin(ScrollTrigger);

gsap.from('.Intro_Heading', {
    duration: 0.6,
    opacity: 0,
    y: -300,
    stagger: 0.3
})

gsap.from('.Intro_Button', {
    duration: 1.5,
    opacity: 0,
    y: -300,
    rotate: -360,
    stagger: 0.3
})

gsap.from('.Price', {
    duration: 1,
    opacity: 0,
    y: -300,
    stagger: 0.3
})

gsap.from('.Intro_Img', {
    duration: 1.5,
    opacity: 0,
    rotate: 360,
    x: -500,
    stagger: 0.3
})


gsap.from('.Features_List_Items', {
    scrollTrigger: '.Features_List_Items',
    duration: 1,
    opacity: 1,
    x: -500,
    stagger: 0.12
})

gsap.from('.Features_Heading', {
    scrollTrigger: '.Features_List_Items',
    duration: 0.6,
    opacity: 0,
    y: -1000,
    stagger: 0.12
})

gsap.from('.Features_Heading2', {
    scrollTrigger: '.Features_List_Items',
    duration: 0.8,
    opacity: 0,
    y: -1000,
    stagger: 0.12
})

gsap.from('.Features_Img', {
    scrollTrigger: '.Features_List_Items',
    duration: 0.8,
    opacity: 0,
    x: 500,
    stagger: 0.12
})

gsap.from('.Plans_Heading', {
    scrollTrigger: '.Plans_Heading',
    duration: 0.6,
    opacity: 0,
    y: -300,
    stagger: 0.3
})

gsap.from('.Heading_Description', {
    scrollTrigger: '.Plans_Heading',
    duration: 1.3,
    opacity: 0,
    y: -300,
    stagger: 0.3
})

gsap.from('.Plans_Card1', {
    scrollTrigger: '.Plans_Heading',
    duration: 0.6,
    opacity: 0,
    x: -300,
    stagger: 0.3
})

gsap.from('.Plans_Card2', {
    scrollTrigger: '.Plans_Heading',
    duration: 0.8,
    opacity: 0,
    x: -600,
    stagger: 0.3
})

gsap.from('.Plans_Card3', {
    scrollTrigger: '.Plans_Heading',
    duration: 1,
    opacity: 0,
    x: -900,
    stagger: 0.3
})
