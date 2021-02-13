//We start for grabbing the question html elements with the classes question n choices
const question = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choices"));
let currentQuestion = {};
let acceptAnswer = false;
const timeRemaining = document.querySelector(".time-remaining");
var timeLeft;

//Set up the parameters to start the game
let questionCounter = 0;
let availableQuestions = [];
const maxQuestions = 4;

//Questions array where we are gonna pull our info
let questions = [
    {
        question: "What is the basic piece in chess?",
        choice1: "pawn ♟",
        choice2: "queen 👸",
        choice3: "knight ♞",
        choice4: "king 🤴",
        answer: 1
    },
    {
        question: "How many pieces are in total in chess?",
        choice1: "24",
        choice2: "16",
        choice3: "32",
        choice4: "34",
        answer: 3,
    },
    {
        question: "How many squares can the king move at one time?",
        choice1: "3",
        choice2: "2",
        choice3: "1",
        choice4: "4",
        answer: 3,
    },
    {
        question: "Which piece in chess is the only animal ?",
        choice1: "bear 🐻",
        choice2: "lion 🦁",
        choice3: "giraffe 🦒",
        choice4: "horse 🐴",
        answer: 4
    }
];


startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    setTime()
    getNewQuestion()
}
//timer for application
function setTime() {
    //setting up the seconds to 60
     timeLeft = 60;

    var timeInterval = setInterval(function () {
        timeRemaining.textContent = timeLeft;
        timeLeft--;
        //if time reach 0 while playing alert "too slow message" and redirect to initials page
        if (timeLeft === 0) {
            timeRemaining.textContent = "";
            clearInterval(timeInterval);
            alert("Too slow! Good luck next time!");
            return window.location.assign("./final.html");
        }

    }, 1000);
}

//switch between questions
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >> maxQuestions) {
        //go to the final page
        return window.location.assign("/final.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
};


//loop between each choice
choices.forEach(choice => {
    choice.addEventListener("click", event => {
        if (!acceptAnswer) return;

        acceptAnswer = false;
        const selectedChoice = event.target;
        console.log(selectedChoice);
        const selectedAnswer = selectedChoice.dataset["number"]

        if (selectedAnswer !== currentQuestion.answer) {
            alert("Wrong ❌")
            console.log(timeLeft);
            timeLeft -= 10
        } else alert("Correct!!")
        //calling the getNewQuestion function to switch between questions
        getNewQuestion();
    });
});

startGame();




























