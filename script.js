// 1. Configuração da Contagem Regressiva (01/03/2026)
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

// 2. Controle Play/Pause da Música
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-audio');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Pausar Música ⏸️";
    } else {
        audio.pause();
        musicBtn.innerText = "Ouvir Música 🎵";
    }
});

// 3. Gerador de Pétalas de Rosa
function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 20; 

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 5 + 7 + 's';
        const delay = Math.random() * 10 + 's';
        
        petal.style.animationDuration = duration;
        petal.style.animationDelay = delay;

        container.appendChild(petal);
    }
}

createPetals();