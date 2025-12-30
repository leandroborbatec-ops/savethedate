// Contagem Regressiva
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

// Controle da Música
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-audio');
const video = document.getElementById('bg-video');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        video.play(); // Garante que o vídeo rode quando o usuário interagir
        musicBtn.innerText = "Pausar Música ⏸️";
    } else {
        audio.pause();
        musicBtn.innerText = "Ouvir Música 🎵";
    }
});

// Gerador de Pétalas
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
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}
createPetals();

// Truque para o iPhone: Tenta dar play no vídeo ao primeiro toque na tela
document.body.addEventListener('touchstart', function() {
    video.play();
}, {once: true});