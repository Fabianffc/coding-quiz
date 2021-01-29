// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//We start for grabbing the question html elements with the classes question n choices
const question = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choices"));


let currentQuestion = [];
let acceptAnswer = true;

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
        question: "Wich piece in chess is the only animal ?",
        choice1: "bear 🐻",
        choice2: "lion 🦁",
        choice3: "giraffe 🦒",
        choice4: "horse 🐴",
        answer: 4
    }
];

const correctBonus = 10;
const maxQuestions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
}
getNewQuestion = () =>{
    questionCounter++;
    
}

startGame();




























