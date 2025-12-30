// 1. Contagem Regressiva
const targetDate = new Date("March 1, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
        document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
}, 1000);

// 2. Controle da Música e Vídeo
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-audio');
const video = document.getElementById('bg-video');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        video.play(); // Garante o play do vídeo na interação
        musicBtn.innerText = "Pausar Música ⏸️";
    } else {
        audio.pause();
        musicBtn.innerText = "Ouvir Música 🎵";
    }
});

// 3. Forçar Vídeo no iPhone ao primeiro toque
document.addEventListener('touchstart', function() {
    if (video) { video.play(); }
}, { once: true });

// 4. Pétalas
function createPetals() {
    const container = document.getElementById('petals-container');
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 7 + 's';
        petal.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(petal);
    }
}
createPetals();