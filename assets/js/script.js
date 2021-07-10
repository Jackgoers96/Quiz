//set timer
const gameTimeEl = document.getElementById("time");
let startButtonEl = document.getElementById("start")
let gg = document.getElementById("gg")
var myVar;


function startTimer() {
    startButtonEl.remove()
    myVar = setInterval(countdownTime, 1000);
}
startButtonEl.addEventListener("click", startTimer)

function countdownTime() {
    
    gameTimeEl.innerHTML -= 1; 

    if (gameTimeEl.innerHTML == 0) {
        clearInterval(myVar);
        displayEndGameMessage(); 
        
    };
}




function displayEndGameMessage() {
    if (gameTimeEl.innerHTML <= 0 ) {
    gg.remove();
    }
}
    // else if (gameTimeEl > 0 you win)





    // This var holds the entire questions array and can be called by it's sections
    var currentQuestion = quiz[currentIndex];
    var questionsH2 = document.createElement('h2');
    questionsH2.textContent = currentQuestion.title;
    triviaArea.append(questionsH2);
//declare the correct answer
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        //created automatically and can be changed
        const element = currentQuestion.choices[i];
        var choicesButton= document.createElement('button');
        choicesButton.textContent = element;
        choicesButton.setAttribute('class', "user-choice");
        //add a value to the button for comparison
        choicesButton.setAttribute('value', element);
        triviaArea.append(choicesButton);
        //create an onclick for answer comparison
        // choicesButton.onclick = name of function
    }
    var choicesBtn = document.querySelectorAll(".user-choice");
    console.log("choicesBtn", choicesBtn);
    choicesBtn.forEach(element => {
    });





    var quiz = [
        {
            title: "Who famously fell from Nakatomi Plaza on Christmas Eve 1988?",
            choices: ["Vizzini", "Hans Gruber", "Norman Bates", "Cyberdyne Model 101 Terminator"],
            answer: "Hans Gruber"
        },
    
        {
            title: "Who once declared that the town needed an enema?",
            choices: ["Hannibal Lecter", "Annie Wilkes", "Joker", "Jack Torrance"],
            answer: "Joker"
        },
    
        {
            title: "Who famously declared they would never hurt a fly?",
            choices: ["Nurse Ratched", "Alex DeLarge", "Baby Jane", "Norman Bates"],
            answer: "Norman Bates"
        },
    
        {
            title: "Who once hobbled Paul Sheldon while firmly swearing to be his number one fan?",
            choices: ["Talia Al Ghul", "Annie Wilkes", "Bellatrix Lestrange", "O-Ren Ishii"],
            answer: "Annie Wilkes"
        },
    
        {
            title: "Who proved they could lie still for a very long time in their debut movie?",
            choices:["John Kramer", "Catherine Tramell", "Jason Voorhees", "Talia Al Ghul"],
            answer: "John Kramer"
        }
    
    ]