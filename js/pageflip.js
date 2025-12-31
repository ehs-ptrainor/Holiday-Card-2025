const card = document.getElementById('card');
const toggleBtn = document.getElementById('toggle-btn');
const flipBtn = document.getElementById('flip-btn');

// Toggle Open/Close
function toggleCard() {
    card.classList.toggle('is-open');
    
    // Reset back view if we close the card
    if (!card.classList.contains('is-open')) {
        card.classList.remove('is-flipped');
    }

    // Update Button Text
    const isOpen = card.classList.contains('is-open');
    toggleBtn.innerText = isOpen ? "Close Card" : "Open Card";
    flipBtn.style.display = isOpen ? "block" : "none";
}

// Toggle Front/Back
function flipCard(e) {
    e.stopPropagation(); // Don't trigger the "Open" toggle
    card.classList.toggle('is-flipped');
    flipBtn.innerText = card.classList.contains('is-flipped') ? "See Inside" : "See Back";
}

// Event Listeners
card.addEventListener('click', toggleCard);
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCard();
});
flipBtn.addEventListener('click', flipCard);

// Hide flip button initially
flipBtn.style.display = "none";