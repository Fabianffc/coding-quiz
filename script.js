//  ```WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
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

var questionarray=[{
    title:"What is the basic piece in chess?", 
    choices:["pawn", "queen", "knight", "king"],
    anwser:0
},{
    title:"How many pieces are in total in chess?", 
    choices:["24", "16", "32", "34"],
    anwser:3
},{
    title:"How many moves can the king move in total?", 
    choices:["3", "2", "1", "4"],
    anwser:3  
}


]

var timeleft= questionarray.length*15
var stopid= ""
var index=0
document.getElementById("startbtn").addEventListener("click",function(){
    document.getElementById("introductionDiv").classList.add("noshow")
    document.getElementById("questiondiv").classList.remove("noshow")
    createchoicebutton()
    stopid= setInterval(countdown,1000)
})

function countdown(){
    timeleft=timeleft -1
    document.getElementById("time").textContent=timeleft
}


function createchoicebutton(){
    document.getElementById("title").textContent=questionarray[index].title
    for (let i = 0; i < questionarray[index].choices.length ; i++) {
       var li=document.createElement("li")  
        var button=document.createElement("button")

        button.textContent=questionarray[index].choices[i]
       li.appendChild(button)   
       document.getElementById("choices").appendChild(li)  
    }
}