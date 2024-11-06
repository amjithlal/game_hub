alert("Welcome to Rock Paper Scissors")

// Variables to track scores
let playerScore = 0;
let computerScore = 0;

/**
 * playGame function - handles the main game logic with a delay for result display
 * @param {string} playerChoice - the player's choice ('rock', 'paper', or 'scissors')
 */
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Initially display "Waiting for result..." message
    document.getElementById('result').innerText = 'Calculating result...';

    // Add a delay of 1 second (1000 ms) before displaying the result
    setTimeout(() => {
        let resultMessage;

        // Determine the winner based on player and computer choices
        if (playerChoice === computerChoice) {
        
            resultMessage = `It's a tie! You both chose ${playerChoice}.`;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
            playerScore++;  // Increment player score
        } else {
            resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
            computerScore++;  // Increment computer score
        }

        // Update the result message and scoreboard
        document.getElementById('result').innerText = resultMessage;
        updateScoreboard();
    }, 1000);  // 1-second delay
}

/**
 * updateScoreboard function - updates the scoreboard with current scores
 */
function updateScoreboard() {
    document.getElementById('scoreboard').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}