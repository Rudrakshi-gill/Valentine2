// Smooth scroll to next section on button click
document.getElementById('surprise-btn').addEventListener('click', function() {
    // Play background music
    const music = document.getElementById('bg-music');
    music.play();

    // Scroll to photos section
    document.getElementById('photos').scrollIntoView({ behavior: 'smooth' });
});

// Typing animation for the message
const text = "No matter where life takes us, I’ll always choose you as my best friend. Thank you for being my constant, my comfort, and my chaos partner. Happy Valentine’s Day 💕";
const typingText = document.getElementById('typing-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing when message section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(document.getElementById('message'));



// Close popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('easter-egg').classList.add('hidden');
});
