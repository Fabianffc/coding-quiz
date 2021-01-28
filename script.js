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


































//Questions
const questions = [{
    title:"What is the basic piece in chess?", 
    choices:["pawn", "queen", "knight", "king"],
    answer: "pawn",
},
{
    title:"How many pieces are in total in chess?", 
    choices:["24", "16", "32", "34"],
    answer: "32",
},
{
    title:"How many squares can the king move at one time?", 
    choices:["3", "2", "1", "4"],
    answer: "1",
},
{
    title:"Wich piece in chess is the only animal ?", 
    choices:["bear", "lion", "horse", "giraffe"],
    answer: "horse",
}];