const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show','show2');
      } //else {
    //    entry.target.classList.remove('show','fade');
    //  }
  })
});

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElement = document.querySelectorAll('.hidden2')

 hiddenElements.forEach((el) => observer.observe(el));
 hiddenElement.forEach((el) => observer.observe(el));

 
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

Splitting();

function triggerAnimationHome() {
  var element = document.getElementById("outro-anim");

  element.classList.add("animate");
  setTimeout(function() {
    window.location.href = "index.html";
  }, 1000);
}

function triggerAnimationAbout() {
  var element = document.getElementById("outro-anim");

  element.classList.add("animate");
  setTimeout(function() {
    window.location.href = "about.html";
  }, 1000);
}


if (window.matchMedia("(max-width: 430px)").matches) {
  const allTriggers = ScrollTrigger.getAll();
  allTriggers.forEach(trigger => {
    trigger.kill();
  });
}else{
  gsap.registerPlugin(ScrollTrigger);

  const showAnim = gsap.from('header', { 
    yPercent: -100,
    paused: true,
    duration: 0.3,
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
  
  gsap.from(".introduction", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".introduction",
      start: "top 40%",
      end: "center center",
      scrub: 0.5,
      ease: "none",
    }, 
  });
  
  gsap.to(".quote-container", {
    y: 50,
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "bottom -50%",
      scrub: 0.5,
      ease: "none",
    }, 
  });
  
  gsap.to(".q-1", {
    y: -150,
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "bottom -50%",
      scrub: 0.5,
    }, 
  });
  
  gsap.to(".q-2", {
    y: 150,
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      end: "bottom -50%",
      scrub: 0.5,
    }, 
  });
  
  gsap.to(".bg-anim", {
    y: -50,
    scrollTrigger: {
      trigger: ".introduction",
      start: "top top",
      pin: true,
      scrub: 0.5,
      end: "bottom -50%",
    }, 
  });
  
  gsap.to(".section_container", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".section-1",
      start: "90% center",
      end: "90% 20%",
      scrub: 0.5,
    }, 
  });
    
  gsap.to(".section-1-svg-1", {
    x: "60vw",
    scrollTrigger: {
      trigger: ".section-1",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    }, 
  });
    
  gsap.to(".section-1-svg-2", {
    x: "-60vw",
    scrollTrigger: {
      trigger: ".section-1",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    }, 
  });
  
  gsap.to(".pfp-card", {
    y: -50,
    scrollTrigger: {
      trigger: ".section-1",
      start: "center top",
      end: "bottom top",
      scrub: 0.5,
    },
  });
  
  gsap.to(".section-1-svg-3", {
    y: -80,
    scrollTrigger: {
      trigger: ".section-1",
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    }, 
  });
    
  gsap.to(".section-2-svg-1:nth-child(1)", {
    xPercent: 5,
    scrollTrigger: {
      trigger: ".section-2",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    }, 
  });
    
  gsap.to(".section-2-svg-1:nth-child(2)", {
    xPercent: -5,
    scrollTrigger: {
      trigger: ".section-2",
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
    }, 
  });
  
  gsap.from(".con-container", {
    y: -120,
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }, 
  });
  
  // gsap.to(".about-section-1", {
  //   backgroundColor: "#eeeeee",
  //   scrollTrigger: {
  //     trigger: ".about-section-1",
  //     start: "10% top",
  //     end: "20% top",
  //     scrub: true,
  //   }, 
  // });
  
  // gsap.to(".section-content p", {
  //   color: "black",
  //   scrollTrigger: {
  //     trigger: ".about-section-1",
  //     start: "10% top",
  //     end: "15% top",
  //     scrub: true,
  //   }, 
  // });
  
  gsap.from(".img-container img", {
    width: 600,
    scrollTrigger: {
      trigger: ".about-section-1",
      start: "top bottom",
      end: "center top",
      scrub: true,
    }, 
  });
}