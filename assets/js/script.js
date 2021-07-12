//set timer
const gameTimeEl = document.getElementById("time");
let startButtonEl = document.getElementById("start")
let gg = document.getElementById("gg")
var setInterval1;
var questions = [0];
var quizArea = document.getElementById("questionArea")
var letTheGamesBegin
let timeEl = 3;
var highScores = document.getElementById("highScores")
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
    //create multiple choice buttons and call the choices array
    for (let i = 0; i < question.choices.length; i++) {
        //created automatically and can be changed
        const element = question.choices[i];
        var choicesButton = document.createElement('button');
        choicesButton.textContent = element;
        choicesButton.setAttribute('class', "user-choice");
        //add a value to the button for comparison
        choicesButton.setAttribute('value', element);
        quizArea.append(choicesButton);
        //create an onclick for answer comparison
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
        var newScore = document.createElement('h5');
        newScore.textContent = ("Nice job! Your score: " + timeEl);
        highScores.append(newScore);


        // // Create a form synamically
        // var form = document.createElement('form');
        // form.setAttribute("method", "post");
        // form.setAttribute("action", "submit.php");
  
        // // Create an input element for Full Name
        // var FN = document.createElement("input");
        // FN.setAttribute("type", "text");
        // FN.setAttribute("name", "FullName");
        // FN.setAttribute("placeholder", "Your Name");
        // // create a submit button
        // var s = document.createElement("input");
        // s.setAttribute("type", "submit");
        // s.setAttribute("value", "Submit");
          
        // // Append the full name input to the form
        // form.appendChild(FN); 
        //  // Append the submit button to the form
        //  form.appendChild(s); 
  
        //  document.getElementsByTagName("body")[0]
        // .appendChild(form);
  

    
}
function displayLoseGame() {
    confirm("You're out of time! Try again?");
    if (true) {
        location.reload()
    }
}

function highScore() {
    var initialsEl = document.getElementById('initials').value;
    //grab the id and put a .value on it
    var newScore = {
        intials:initialsEl,
        score:timeEl,
    }
    //Either grabs something from localStorage or store something into localStorage
    var highScoreArray = JSON.parse(localStorage.getItem('highscore')) || []
    //adds an item to the beginning of an array
    highScoreArray.push(newScore),
    //stores the array locally
    localStorage.setItem('highscore', JSON.stringify(highScoreArray))
}

//loop through array and display the highscores
submitInitials.addEventListener('click', highScore);

