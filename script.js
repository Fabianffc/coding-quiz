//We start for grabbing the question html elements with the classes question n choices
const question = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choices"));
let currentQuestion = {};
let acceptAnswer = false;
//Set up the parameters to start the game
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
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

const Bonus = 5;
const maxQuestions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}
//switch between questions
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions){
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
    })
    availableQuestions.splice(questionIndex, 1);
    acceptAnswer = true;
}
     //loop between each choice
choices.forEach(choice => {
     //listen when each choice is click then get the number reference 

    choice.addEventListener("click", event => {
        if (!acceptAnswer) {
            return;

            acceptAnswer = false;
            const selectedChoice = event.target;
            console.log(selectedChoice);
            const selectedAnswer = selectedChoice.dataset["number"]
            console.log(selectedAnswer);
      //calling the getNewQuestion function to switch between questions
        } getNewQuestion()
    })
})


startGame();




























