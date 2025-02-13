function revealLetter() {
    const letter = document.getElementById("letter");
    letter.style.display = "block";
    setTimeout(() => letter.classList.add("show"), 10); // Trigger fade-in after display

    // Create confetti
    for (let i = 0; i < 20; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => confetti.remove(), 2000);
    }
}