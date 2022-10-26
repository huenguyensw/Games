let userScore = 0;
let computerscore = 0;
let userValue = "";
let computerValue = "";
var countRound = 0;


// users choice
function getUserValue(x) {
    userValue = usersChoice(x);
}

function usersChoice(i) {
    resetUserChoice();
    document.getElementById(i).style.color = "green";
    let userChoice = "";
    if (i === 'user-rock') {
        userChoice = 'rock';
    } else if (i === 'user-paper') {
        userChoice = 'paper';
    } else if (i === 'user-scissor') {
        userChoice = 'scissor';
    }
    return userChoice;
}

function resetUserChoice() {
    document.getElementById("user-scissor").style.color = "#FF4500";
    document.getElementById("user-paper").style.color = "#FF4500";
    document.getElementById("user-rock").style.color = "#FF4500";
}


//calculate winner

function computersChoiceAndScore() {
    var number = Math.random();
    resetComputerChoice();
    if (0 <= number && number <= 0.33) {
        computerValue = 'scissor';
        document.getElementById("computer-scissor").style.color = "green";
    } else if (0.34 <= number && number <= 0.67) {
        computerValue = 'paper';
        document.getElementById("computer-paper").style.color = "green";
    } else if (0.68 <= number && number <= 0.99) {
        computerValue = 'rock';
        document.getElementById("computer-rock").style.color = "green";
    }
    setTimeout(function () {
        calculateScore(userValue, computerValue);
    }, 150);
}

function resetComputerChoice() {
    document.getElementById("computer-scissor").style.color = "#FF4500";
    document.getElementById("computer-paper").style.color = "#FF4500";
    document.getElementById("computer-rock").style.color = "#FF4500";
}

function winner() {
    if (userValue === "") {
        alert("Give your choice ");
    } else {
        computersChoiceAndScore();
    }
}
function calculateScore(user, comp) {
    if (user === comp) {
        alert('You and computer chose the same!');
        userScore += 1;
        computerscore += 1;
    
    } else if ((user === 'rock' && comp === 'scissor') || (user == 'paper' && comp == 'rock') || (user == 'scissor' && comp == 'paper')) {
        alert('Toppen! You won');
        userScore += 1;
    } else {
        alert('Unfortunately, You lost!');
        computerscore += 1;
    }
    countRound++;
    let text = 'Try again?';
    if (confirm(text) == true) {
        resetComputerChoice();
        userValue = "";
        resetUserChoice();
        computerValue = "";
    }
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerscore;
    document.getElementById("roundID").innerHTML = countRound;
}