var quiz = document.querySelector("form")
var allQuestions = [
    {
        question: "What range does your age fall under?",
        choices: ["0-3 months", "4-11 months", "1-2 years old", "3-5 years old", "6-13 years old", "14-17 years old", "18-25 years old", "26-64 years old","65+ years old"],
        response: ["14 to 17 hours", "12 to 15 hours", "11 to 14 hours", "10 to 13 hours","9 to 11 hours","8 to 10 hours","7 to 9 hours","7 to 9 hours","7 to 8 hours"]
    },
    {
        question: "On average, how many hours of sleep do you get every night?",
        choices: ["Less than 5", "5-6", "7-8", "9-10", "11-12", "13-14", "15-16", "17-19", "More than 19"]
    },
    {
        question: "Select all that applies: what do you do in your bed or before you go to bed? ",
        choices: ["Watch TV", "Talk to another person", "Eat", "Sleep with the lights on","Intake caffeine"]
    },
]

//qArr.forEach(function(value, index, array))
function build(){
    const completeQuestion = []
    allQuestions.forEach(function(currentQ, questionNum){
        const answerArr = []
        for (choice in currentQ.choices){
            // console.log(currentQ.choices[choice])
            if (questionNum == 2){
                answerArr.push(`<input class="choice" type= "checkbox" name="q${questionNum}" value = "${choice}"> ${currentQ.choices[choice]}`)
                console.log(answerArr)
            }else{
                answerArr.push(`<input class="choice" type= "radio" name="q${questionNum}" value = "${choice}"> ${currentQ.choices[choice]}`)
            }
        }
        console.log(questionNum)
        completeQuestion.push(
            `<div class="questionContainer">
                <h2 class="question">${currentQ.question}</h2>
                <div class="choiceContainer">${answerArr.join("")}</div>
            </div>
            `) //joins elements in array into a string, separated by a space
        // console.log(completeQuestion)

        // console.log(questionArr)
    })
    quiz.innerHTML = completeQuestion.join("")
}
build()

var q0 = document.querySelector("[name*='q0']").value;
var q1 = document.querySelector("[name*='q1']").value;
var q2 = document.querySelector("[name*='q2']").value;
var result = []

function q0Result(){
    console.log(q0)
    allQuestions[0].choices.forEach(function(currentChoice, choiceNum){
        //if question value equals choice number then append message to array
        // console.log(choiceNum)
        if (q0 == choiceNum){
            // console.log(choiceNum + "!")
            var q0Choice = allQuestions[0].response[choiceNum]
            var q0Message= `<p>The recommended hours of sleep you should get is ${q0Choice}.</p>`
            result.push(q0Message)
            // console.log(choiceNum +"before return")
            return choiceNum
            // console.log(result)
        };
        // console.log(choiceNum + "!!")
    })
}

function q1Result(){
    if (q1 == q0Result) {
        var q1Message = "<p>You've been sleeping the right amount! Good job!</p>"
    } else{
        var q1Message = "<p>You're sleeping the wrong number of hours!</p>"
    };
    result.unshift(q1Message)
}

function q2Result(){
    var q2Message = `<p>To sleep well avoid:<br>- watching TV<br>- sleeping with lights on</p> `
    result.push(q2Message)
}

function showResults(){
    console.log(result)
    var resultMsg = document.createElement("div")
    resultMsg.setAttribute("id","resultMessage")
    document.querySelector(".content").append(resultMsg);
    q0Result();
    q1Result();
    q2Result();
    resultMsg.innerHTML = result.join("")
    console.log(result)
}
