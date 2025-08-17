const cards = document.querySelectorAll('.card');
let positions = ['active', 'right', 'right2', 'left2', 'left'];
let index = 0;
const vitesse = 50;
const message = "Etudiant de deuxième année en informatique général à l’Ecole Nationale d’Informatique, Université de Fianarantsoa. Je suis un jeune développeur passionné par les nouvelles technologies, notamment la programmation web. Je suis actuellement à la recherche d’un stage de trois mois pour acquérir de nouvelles expériences dans le monde professionnel et par la même occasion conclure mes études en deuxième année de licence.";
const welcome = document.getElementById('welcome');
const wrapper = document.querySelector('.wrapper');
let touchStartX = 0;
let touchEndX = 0;

setTimeout(() => {
    welcome.style.opacity = 0;
    setTimeout(() => {
        welcome.style.display = 'none';
        wrapper.style.display = 'block';
        setTimeout(() => wrapper.classList.add('show'), 50);
        afficherTexte();
    }, 1000);
}, 2000);

function updateClasses() {
    cards.forEach((card, i) => {
        card.className = 'card ' + (positions[i] || '');
    });
}

function afficherTexte() {
  if (index < message.length) {
    document.getElementById("texte").textContent += message.charAt(index);
    index++;
    setTimeout(afficherTexte, vitesse);
  }
}
//navigation avec le curseur
document.querySelector('.next').addEventListener('click', () => {
    positions.unshift(positions.pop());
    updateClasses();
});
document.querySelector('.prev').addEventListener('click', () => {
    positions.push(positions.shift());
    updateClasses();
});
//navigation tactile
wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

wrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        // Swipe vers la gauche → carte suivante
        positions.unshift(positions.pop());
        updateClasses();
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe vers la droite → carte précédente
        positions.push(positions.shift());
        updateClasses();
    }
}
//navigation clavier
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        // Flèche droite → carte suivante
        positions.unshift(positions.pop());
        updateClasses();
    }
    if (e.key === "ArrowLeft") {
        // Flèche gauche → carte précédente
        positions.push(positions.shift());
        updateClasses();
    }
});


document.getElementById("telecharger").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "asset/cv.pdf"; 
    link.download = "cv_de_Sanda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

updateClasses();
