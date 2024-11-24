// Gera um número aleatório entre 1 e 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; // Número de tentativas restantes

// Seleciona os elementos
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const feedback = document.getElementById("feedback");
const remainingAttempts = document.getElementById("remainingAttempts");

// Função para processar o palpite do usuário
guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Por favor, insira um número entre 1 e 100.";
    feedback.style.color = "yellow";
    return;
  }

  attempts--; // Reduz as tentativas
  remainingAttempts.textContent = attempts;

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Parabéns! Você acertou o número ${secretNumber}!`;
    feedback.style.color = "lime";
    endGame();
  } else if (attempts === 0) {
    feedback.textContent = `❌ Você perdeu! O número era ${secretNumber}.`;
    feedback.style.color = "red";
    endGame();
  } else if (guess < secretNumber) {
    feedback.textContent = "Tente um número maior!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Tente um número menor!";
    feedback.style.color = "orange";
  }

  guessInput.value = "";
  guessInput.focus();
});

// Função para finalizar o jogo
function endGame() {
  guessInput.style.display = "none";
  guessButton.style.display = "none";
  restartButton.style.display = "inline-block";
}

// Função para reiniciar o jogo
restartButton.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  remainingAttempts.textContent = attempts;
  feedback.textContent = "";
  feedback.style.color = "#fff";
  guessInput.value = "";
  guessInput.style.display = "inline-block";
  guessButton.style.display = "inline-block";
  restartButton.style.display = "none";
});
