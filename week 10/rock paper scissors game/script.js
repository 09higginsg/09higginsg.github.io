 // Round Variables 
 var roundsPlayed = 0; 
 var maxRounds = 5;    
 var userGuesses = []; // To store user guesses

 function Game(userchoice) {
     // If rounds are over, the game will end 
     if (roundsPlayed >= maxRounds) {
         document.getElementById("result").innerText = "This game has ended!";
         return;
     }

     // Game Variables
     var choices = ["rock", "paper", "scissors"];
     var randomcompute = choices[Math.floor(Math.random() * choices.length)];
     roundsPlayed++; // Increment rounds played

     // Store user guesses
     userGuesses.push(userchoice);

     // Computers choice vs Players Choice
     document.getElementById("userchoice").innerText = "You chose: " + userchoice;
     document.getElementById("randomcompute").innerText = "Computer chose: " + randomcompute;

     // Determine the outcome of Game
     if (userchoice === randomcompute) {
         document.getElementById("result").innerText = "It's a tie!";
     } else if (userchoice === "rock") {
         if (randomcompute === "scissors") {
             document.getElementById("result").innerText = "You win! Rock beats scissors.";
         } else {
             document.getElementById("result").innerText = "You lose! Paper beats rock.";
         }
     } else if (userchoice === "paper") {
         if (randomcompute === "rock") {
             document.getElementById("result").innerText = "You win! Paper beats rock.";
         } else {
             document.getElementById("result").innerText = "You lose! Scissors beat paper.";
         }
     } else if (userchoice === "scissors") {
         if (randomcompute === "paper") {
             document.getElementById("result").innerText = "You win! Scissors beat paper.";
         } else {
             document.getElementById("result").innerText = "You lose! Rock beats scissors.";
         }
     }

     // Show number of rounds played
     document.getElementById("rounds").innerText = "Rounds Played: " + roundsPlayed;

     // Check if the game should end and tell the user thiew choices
     if (roundsPlayed === maxRounds) {
         document.getElementById("result").innerText = "Game Over! Here are your results:";
         document.getElementById("userguesses").innerText = "Your choices: " + userGuesses.join(", ");
     }
 }  