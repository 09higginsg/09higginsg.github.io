// Round Variables 
var roundsPlayed = 0; 
var maxRounds = 3;    
var gameWon = false;  

function Game(userchoice) {
    // If either are true, the game will end 
    if (gameWon || roundsPlayed >= maxRounds) {
        document.getElementById("result").innerText = "This game has ended!";
        return;
    }

    // Game Variables
    var choices = ["rock", "paper", "scissors"];
    var randomcompute = choices[Math.floor(Math.random() * choices.length)];
    roundsPlayed++; // Increment rounds played

    //Computers choice vs Players Choice
    document.getElementById("userchoice").innerText = "You chose: " + userchoice;
    document.getElementById("randomcompute").innerText = "Computer chose: " + randomcompute;

    // Determine the outcome of Game
    if (userchoice === randomcompute) {
        document.getElementById("result").innerText = "It's a tie!";
    } else if (userchoice === "rock") {
        if (randomcompute === "scissors") {
            document.getElementById("result").innerText = "You win! Rock beats scissors.";
            gameWon = true;
        } else {
            document.getElementById("result").innerText = "You lose! Paper beats rock.";
        }
    } else if (userchoice === "paper") {
        if (randomcompute === "rock") {
            document.getElementById("result").innerText = "You win! Paper beats rock.";
            gameWon = true;
        } else {
            document.getElementById("result").innerText = "You lose! Scissors beat paper.";
        }
    } else if (userchoice === "scissors") {
        if (randomcompute === "paper") {
            document.getElementById("result").innerText = "You win! Scissors beat paper.";
            gameWon = true;
        } else {
            document.getElementById("result").innerText = "You lose! Rock beats scissors.";
        }
    }

    // Show number of rounds played
    document.getElementById("rounds").innerText = "Rounds Played: " + roundsPlayed;

    // Check if the game should end
    if (gameWon) {
        document.getElementById("result").innerText += " Congrats!! You have all the Luck!";
    } else if (roundsPlayed === maxRounds) {
        document.getElementById("result").innerText = "Game Over! Hard Luck!";
    }
}
