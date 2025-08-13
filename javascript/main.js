const cards = document.querySelectorAll('.card');
let positions = ['active', 'right', 'left'];

function updateClasses() {
    cards.forEach((card, index) => {
        card.className = 'card ' + positions[index];
    });
}

document.querySelector('.next').addEventListener('click', () => {
    positions.unshift(positions.pop());
    updateClasses();
});

document.querySelector('.prev').addEventListener('click', () => {
    positions.push(positions.shift());
    updateClasses();
});

updateClasses();

document.getElementById("telecharger").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "cv.pdf"; 
    link.download = "cv_de_Sanda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
