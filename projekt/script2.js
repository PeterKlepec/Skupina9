// Izbira vseh gumbov za prikaz več/manj
const buttons = document.querySelectorAll('.showMoreBtn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const extraText = this.nextElementSibling; // Besedilo, ki je za gumbom
        const moreText = this.previousElementSibling; // Kratko besedilo pred gumbom

        if (extraText.style.display === 'none' || extraText.style.display === '') {
            // Prikaz razširjenega besedila
            extraText.style.display = 'block';
            moreText.style.display = 'none'; // Skrij kratko besedilo
            this.textContent = 'Pokaži manj'; // Posodobi gumb
        } else {
            // Skrij razširjeno besedilo
            extraText.style.display = 'none';
            moreText.style.display = 'inline'; // Prikaži kratko besedilo
            this.textContent = 'Pokaži več'; // Posodobi gumb
        }
    });
});
