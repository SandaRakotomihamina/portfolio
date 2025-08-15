const cards = document.querySelectorAll('.card');
let positions = ['active', 'right', 'left'];
const message = "Etudiant de deuxième année en informatique général à l’Ecole Nationale d’Informatique, Université de Fianarantsoa. Je suis un jeune développeur passionné par les nouvelles technologies, notamment la programmation web. Je suis actuellement à la recherche d’un stage de trois mois pour acquérir de nouvelles expériences dans le monde professionnel et par la même occasion conclure mes études en deuxième année de licence.";
let index = 0;
const vitesse = 50;

function updateClasses() {
    cards.forEach((card, index) => {
        card.className = 'card ' + positions[index];
    });
}

function afficherTexte() {
  if (index < message.length) {
    document.getElementById("texte").textContent += message.charAt(index);
    index++;
    setTimeout(afficherTexte, vitesse);
  }
}

document.querySelector('.next').addEventListener('click', () => {
    positions.unshift(positions.pop());
    updateClasses();
});

document.querySelector('.prev').addEventListener('click', () => {
    positions.push(positions.shift());
    updateClasses();
});

document.getElementById("telecharger").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "cv.pdf"; 
    link.download = "cv_de_Sanda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

updateClasses();
afficherTexte();
