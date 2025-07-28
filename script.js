let numberToGuess = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    attempts++;

    if (isNaN(guess)) {
        message.textContent = "⚠️ Please enter a valid number.";
        return;
    }

    if (guess < numberToGuess) {
        message.textContent = "📉 Too low! Try again.";
    } else if (guess > numberToGuess) {
        message.textContent = "📈 Too high! Try again.";
    } else {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    }
}