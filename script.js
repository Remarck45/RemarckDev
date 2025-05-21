// 🌙 Bouton mode sombre
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// ⬆️ Bouton retour en haut
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Bouton de changement de thème
const toggleBtn = document.getElementById("theme-toggle");

// Appliquer le thème mémorisé dès le chargement de la page
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️ Mode clair";
}

// Écouteur du clic sur le bouton
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Mémorisation du choix
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️ Mode clair";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 Mode sombre";
  }
});

// Bouton retour en haut
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
