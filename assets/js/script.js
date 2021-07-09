var time = document.querySelector("#time")

var timeInt= parseInt(time, 10);



function timerColor() {
    if (timeInt <= 15) {
    timeInt.fontcolor("red");
    }
    return
}

    //This var holds the entire questions array and can be called by it's sections
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