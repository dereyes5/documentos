let timer;
let letter;
let score = 0;
let timeRemaining;

function startGame() {
    document.getElementById('start-button').disabled = true;
    document.getElementById('random-letter').textContent = getRandomLetter();
    document.getElementById('submit-button').disabled = false;
    document.getElementById('finish-button').disabled = false;
    document.getElementById('score').textContent = "Puntuación: 0";
    score = 0;
    timeRemaining = 60;
    updateTimerDisplay();
    timer = setInterval(updateTime, 1000); // Actualizar tiempo cada segundo
}

function finishGame() {
    clearInterval(timer);
    document.getElementById('start-button').disabled = false;
    document.getElementById('submit-button').disabled = true;
    document.getElementById('finish-button').disabled = true;
}

function submitWords() {
    clearInterval(timer); // Detener el tiempo al presionar "Enviar"
    const inputs = ['name', 'lastName', 'city', 'country', 'animal', 'fruit'];
    const letterElement = document.getElementById('random-letter');
    const currentLetter = letterElement.textContent.toLowerCase();

    for (const inputId of inputs) {
        const input = document.getElementById(inputId);
        const word = input.value.trim().toLowerCase();
        if (word.startsWith(currentLetter)) {
            score += 10 + word.length;
        } else if (word !== '') {
            score -= 5;
        }
        input.value = '';
    }

    document.getElementById('score').textContent = `Puntuación: ${score}`;
}

function getRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
}

function updateTime() {
    timeRemaining--;
    if (timeRemaining === 0) {
        finishGame();
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time-remaining').textContent = `Tiempo restante: ${formattedTime}`;
}
