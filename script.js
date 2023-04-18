const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show','fade');
      } //else {
    //    entry.target.classList.remove('show','fade');
    //  }
  })
});

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElement = document.querySelectorAll('.Hfade')

 hiddenElements.forEach((el) => observer.observe(el));
 hiddenElement.forEach((el) => observer.observe(el));


    
gsap.registerPlugin(ScrollTrigger);

gsap.to("#hoodie", {
  y: -10,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "30% top",
    end: "bottom center",
    scrub: true,
  },
}), 

ScrollTrigger.create({
  trigger: ".hero-section",
  start: "30% top",
  end: "bottom center",
  onLeave: () => {
    const element = document.querySelector("#hoodie");
    element.style.transition = "";
    element.style.transitionDelay = "";
  },
  onEnter: () => {
    const element = document.querySelector("#hoodie");
    element.style.transition = "";
    element.style.transitionDelay = "";
  }
});

gsap.to(".quote_container", {
  y: 50,
  scrollTrigger: {
    trigger: ".introduction",
    toggle: ".quote_container h3:active",
    start: "top top",
    end: "bottom -50%",
    scrub: 1, 
  }, 
});

gsap.to(".q-1", {
  y: -150,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top top",
    end: "bottom -50%",
    scrub: 1,
  }, 
});

gsap.to(".q-2", {
  y: 150,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top top",
    end: "bottom -50%",
    scrub: 1,
  }, 
});

gsap.to(".bg-anim", {
  y: -30,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top top",
    pin: true,
    end: "bottom -50%",
    scrub: 1,
  }, 
});

gsap.to(".section_content-1", {
  y: -30,
  ease: "power2",
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    scrub: 1,
  }, 
});
  
gsap.to(".section-1-svg-1", {
  y: 30,
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
  }, 
});

gsap.to(".section-1-svg-2", {
  y: -20,
  ease: "power2",
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: "bottom center",
    scrub: 1,
  }, 
});
  
gsap.to(".section-2-svg-1:nth-child(1)", {
  xPercent: -3,
  scrollTrigger: {
    trigger: ".section-2",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  }, 
});
  
gsap.to(".section-2-svg-1:nth-child(2)", {
  xPercent: 5,
  scrollTrigger: {
    trigger: ".section-2",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  }, 
});
  
gsap.to(".section-2", {
  y: 100,
  scrollTrigger: {
    trigger: ".section-2",
    start: "bottom bottom",
    end: "bottom top",
    scrub: 0.3,
  }, 
});
  
gsap.to(".section-3", {
  yPercent: -10,
  scrollTrigger: {
    trigger: ".section-3",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 0.3,
  }, 
});
  
gsap.to(".section-3-svg-1", {
  y: 30,
  scrollTrigger: {
    trigger: ".section-3",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  }, 
});
  
gsap.to(".services-container", {
  y: -30,
  scrollTrigger: {
    trigger: ".section-3",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  }, 
});

gsap.from(".con-container", {
  y: -150,
  scrollTrigger: {
    trigger: "footer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 0.5,
  }, 
});

gsap.to(".about-svg-1", {
  y: 30,
  scrollTrigger: {
    trigger: ".about-page-hero",
    start: "top top",
    end: "bottom center",
    scrub: 1,
  }, 
});
  