gsap.registerPlugin(ScrollTrigger);

 window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from("#logoText", {
  opacity: 0,
  y: -30,
  duration: 1.2,
  ease: "power4.out"
});


  gsap.from('.hero-title', {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.hero-title',
    start: 'top 80%',
    toggleActions: 'play none none reset'
  }
});



  gsap.from('.hero-desc', {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.hero-desc',
    start: 'top 80%',
    toggleActions: 'play none none reset'
  }
});

  gsap.from('.hero-img', {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    ease: 'elastic.out(1, 0.5)'
  });

  gsap.from('.hero-img-glow', {
  scale: 0.8,
  opacity: 0,
  duration: 1.5,
  ease: 'elastic.out(1, 0.5)',
  scrollTrigger: {
    trigger: '.hero-img-glow',
    start: 'top 80%',
    toggleActions: 'play none none reset'
  }
});

  gsap.from('.nav-list li', {
    duration: 1,
    opacity: 0,
    y: -20,
    stagger: 0.2
  });

  gsap.utils.toArray('.skill-box').forEach((box, i) => {
  gsap.from(box, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
      toggleActions: 'play none none reset'
    }
  });
});

gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reset'
    }
  });

  
});
});
