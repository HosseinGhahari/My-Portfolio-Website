const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 200
})

sr.reveal(".nav__animation");
sr.reveal(".home__image", {duration:2000});
sr.reveal(".home__content", {origin:"bottom",duration:2000});
sr.reveal(".main__part", {interval: 100,origin:"bottom",duration:1000})

