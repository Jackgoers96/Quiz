//set timer
var gameTimeEl = document.getElementById("time");
let startButtonEl = document.getElementById("start")
let gg = document.getElementById("gg")
var setInterval1;
let questions = 0;
var quizArea = document.getElementById("questionArea")
var letTheGamesBegin

function startTimer() {
    startButtonEl.remove()
    setInterval1 = setInterval(countdownTime, 1000);
    letTheGamesBegin = beginQuiz()

}
startButtonEl.addEventListener("click", startTimer)

function countdownTime() {
    
    gameTimeEl.innerHTML -= 1; 

    if (gameTimeEl.innerHTML == 0) {
        clearInterval(setInterval1);
        displayEndGameMessage(); 
        
    };
}




function displayEndGameMessage() {
    if (gameTimeEl.innerHTML <= 0 ) {
    gg.remove();
    quizArea.remove()
    }
}
    // else if (gameTimeEl > 0 you win)



    // This var holds the entire questions array and can be called by it's sections
    function beginQuiz() {
        console.log("barf")
        //innerHTML clears element that is targeted and replaces with something else
        //clears the triviaArea for a new question
        quizArea.innerHTML = "";
        //This var holds the entire questions array and can be called by it's sections
        var question = quizMain[questions];
        var questionsH2 = document.createElement('h2');
        questionsH2.textContent = question.title;
        quizArea.append(questionsH2);
    //create multiple choice buttons and call the choices array
        for (let i = 0; i < question.choices.length; i++) {
            //created automatically and can be changed
            const element = question.choices[i];
            var choicesButton= document.createElement('button');
            choicesButton.textContent = element;
            choicesButton.setAttribute('class', "user-choice");
            //add a value to the button for comparison
            choicesButton.setAttribute('value', element);
            quizArea.append(choicesButton);
            //create an onclick for answer comparison
            choicesButton.addEventListener('click', compareAnswer);
        }
        
    
    }//End showQuestion function definition
    
    function compareAnswer() {
       const answer = quizMain[questions].answer;
            if(this.value != answer){
                gameTimeEl -= 5;
            }
        questions++;
    
        if (questions === quizMain.length) {
            //call end quiz function
            endGame();
        }
        else beginQuiz();
    }





    var quizMain = [
        {
            question: "Who famously fell from Nakatomi Plaza on Christmas Eve 1988?",
            choices: ["Vizzini", "Hans Gruber", "Norman Bates", "Cyberdyne Model 101 Terminator"],
            answer: "Hans Gruber"
        },
    
        {
            question: "Who once declared that the town needed an enema?",
            choices: ["Hannibal Lecter", "Annie Wilkes", "Joker", "Jack Torrance"],
            answer: "Joker"
        },
    
        {
            question: "Who famously declared they would never hurt a fly?",
            choices: ["Nurse Ratched", "Alex DeLarge", "Baby Jane", "Norman Bates"],
            answer: "Norman Bates"
        },
    
        {
            question: "Who once hobbled Paul Sheldon while firmly swearing to be his number one fan?",
            choices: ["Talia Al Ghul", "Annie Wilkes", "Bellatrix Lestrange", "O-Ren Ishii"],
            answer: "Annie Wilkes"
        },
    
        {
            question: "Who proved they could lie still for a very long time in their debut movie?",
            choices:["John Kramer", "Catherine Tramell", "Jason Voorhees", "Talia Al Ghul"],
            answer: "John Kramer"
        }
    
    ]