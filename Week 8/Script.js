function Game(userchoice) {

     //Variables
     var choices = ["rock", "paper", "scissors"];
     var randomcompute = choices[Math.floor(Math.random() * choices.length)];

     //Computers choice vs Players Choice
     document.getElementById("userchoice").innerText = "You chose: " + userchoice;
     document.getElementById("randomcompute").innerText = "Computer chose: " + randomcompute;

     // if its a draw
     if (userchoice === randomcompute) {
         document.getElementById("result").innerText = "It's a tie!";
     // Outcome 1
     } else if (userchoice === "rock") {
         if (randomcompute === "scissors") {
             document.getElementById("result").innerText = "You win! Rock beats scissors.";
         } else {
             document.getElementById("result").innerText = "You lose! Paper beats rock.";
         }
     // Outcome 2
     } else if (userchoice=== "paper") {
         if (randomcompute === "rock") {
             document.getElementById("result").innerText = "You win! Paper beats rock.";
         } else {
             document.getElementById("result").innerText = "You lose! Scissors beat paper.";
         }
     // Outcome 3
     } else if (userchoice === "scissors") {
         if (randomcompute === "paper") {
             document.getElementById("result").innerText = "You win! Scissors beat paper.";
         } else {
             document.getElementById("result").innerText = "You lose! Rock beats scissors.";
         }
     }
 }

