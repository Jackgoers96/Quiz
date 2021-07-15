//set timer
const gameTimeEl = document.getElementById("time");
let startButtonEl = document.getElementById("start")
let gg = document.getElementById("gg")
var setInterval1;
var questions = [0];
var quizArea = document.getElementById("questionArea")
var letTheGamesBegin
let timeEl = 61;
var scoreBoard = document.getElementById("scoreBoard")
var bodyEl = document.getElementById("bodyEl")



function startTimer() {
    bodyEl.remove();
    setInterval1 = setInterval(score, 1000);
    letTheGamesBegin = quizLoop();
}
startButtonEl.addEventListener("click", startTimer)


function score() {
    timeEl--;
    gameTimeEl.textContent = timeEl;

    if(timeEl <= 0){
        clearInterval(setInterval1);
        displayLoseGame();
    };
}



function quizLoop() {
    quizArea.innerHTML = "";
    var question = quizMain[questions];
    var questionsH2 = document.createElement('h2');
    questionsH2.textContent = question.question;
    quizArea.append(questionsH2);
    for (let i = 0; i < question.choices.length; i++) {
        const element = question.choices[i];
        var choicesButton = document.createElement('button');
        choicesButton.textContent = element;
        choicesButton.setAttribute('class', "user-choice");
        choicesButton.setAttribute('value', element);
        quizArea.append(choicesButton);
        choicesButton.addEventListener('click', compareAnswer);
    }   
}
    
function compareAnswer() {
    const answer = quizMain[questions].answer;
        if(this.value != answer){
            timeEl -= 5;
        }
    questions++;
    
    if (questions == quizMain.length) {
        gameOver();
    }
    else quizLoop();
}


var quizMain = [
    {
        question: "Which character in 'The Phontom Menace' was highly disliked by the fanbase and considered a 'family-friendly' addon for children?",
        choices: ["Darth Maul", "Yoda", "Jar-Jar Binks", "Captain Panak"],
        answer: "Jar-Jar Binks"
    },
    
    {
        question: "Which film is the 'first' Star Wars, despite being falling 4th in the Saga's chronological timeline",
        choices: ["Return of the Jedi", "A New Hope", "The Phantom Menace", "Solo: A Star Wars Story"],
        answer: "A New Hope"
    },
    
    {
        question: "Which character famously says 'That's no moon, it's a space station!' in 'A New Hope'",
        choices: ["Darth Vader", "Han Solo", "C-3PO", "Ben Kenobi"],
        answer: "Ben Kenobi"
    },
    
    {
        question: "Which actor/actress was brought back to the screen in their role as Governer Tarkin through CGI in 'Rogue One', despite no longer living during filming",
        choices: ["Alec Guiness", "Peter Cushing", "Carrie Fisher", "Peter Mayhew"],
        answer: "Peter Cushing"
    },
    
    {
        question: "This well-loved robot was the first to be fully remote controlled:",
        choices:["bb-8", "R2-D2", "C-3PO", "R4"],
        answer: "bb-8"
    }]
    
function gameOver() {
    if (timeEl > 0) {
        displayWinGame()
    }
    else {
        displayLoseGame()
    }

}
function displayWinGame() {
        gg.remove();
        quizArea.remove();
        clearInterval(setInterval1);
        var yourScore= document.createElement('h5');
        yourScore.textContent = ("Nice job! Your score: " + timeEl);
        scoreBoard.append(yourScore);
        var initials = document.createElement("input");
        initials.setAttribute("type", "text");
        initials.setAttribute("id", "submitInitials2");
        var submitInitials = document.createElement("button");
        submitInitials.textContent = ("Submit your initials!");
        scoreBoard.append(initials);
        scoreBoard.append(submitInitials);
        submitInitials.value = (initials.text);
        submitInitials.addEventListener('click', highScore);
        // highScore();
        //initials, score loop
        
    for (const highScore of highScoreArray) {
        var listEl = document.createElement("li")
        listEl.textContent = (highScore.initials + ": " + highScore.score);
        scoreBoard.appendChild(listEl)
                  
    }

}
function displayLoseGame() {
    confirm("You're out of time! Try again?");
    if (true) {
        location.reload()
    }
}
var highScoreArray = JSON.parse(localStorage.getItem('scoreBoard')) || []

function highScore() {
    var initialsEl = document.getElementById("submitInitials2").value;
    var newScore = {
        initials:initialsEl,
        score:timeEl,
    }
highScoreArray.push(newScore),
quizArea.append(scoreBoard);

localStorage.setItem('scoreBoard', JSON.stringify(highScoreArray));
return JSON.stringify(highScoreArray);
}
var highScoreArray = JSON.parse(localStorage.getItem('scoreBoard')) || []


