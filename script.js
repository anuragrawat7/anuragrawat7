const phrases = ["Senior Java Backend Engineer", "Spring Boot & Microservices", "Exploring Distributed Systems", "Building reliable APIs"];
const typed = document.getElementById("typed");
let phraseIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  const phrase = phrases[phraseIndex];
  typed.textContent = phrase.slice(0, charIndex);
  if (!deleting && charIndex < phrase.length) { charIndex++; setTimeout(typeLoop, 75); }
  else if (!deleting) { deleting = true; setTimeout(typeLoop, 1400); }
  else if (charIndex > 0) { charIndex--; setTimeout(typeLoop, 35); }
  else { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; setTimeout(typeLoop, 350); }
}
typeLoop();
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
