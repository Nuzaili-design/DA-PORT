 let typingEffect = new Typed(".typedText", {
        strings: ["Data Analyst", "Power BI", "SQL"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
const sr = ScrollReveal({
  origin: 'left',      // All from the left
  distance: '80px',    // Slightly more dramatic scroll
  duration: 1500,
  delay: 300,          // Unified delay
  reset: false
});

// Apply to all relevant sections
sr.reveal('.featured-text-card');
sr.reveal('.featured-name');
sr.reveal('.featured-text-info');
sr.reveal('.top-header');
sr.reveal('.about-info');
sr.reveal('.project-box');
sr.reveal('.project-header');
sr.reveal('.contact-info');
sr.reveal('.project-box', {
  interval: 200
});
