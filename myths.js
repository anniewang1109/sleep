var mythsArr = ["Myth1", "Myth2", "Myth 3"];
var answerArr = ["true", "false", "false"]
var incorrectAnswerArr = ["false", "true", "true"]
var answerInfoArr = ["info1","info2", "info3"]

var question = document.querySelector("#question");
var t = document.querySelector("[value*='true']");
var f = document.querySelector("[value*='false']")
var submitButton = document.querySelector("[value*='Submit']")
var nextButton = document.querySelector("[value*= 'Next']");


var qNum = 0;

if (qNum < mythsArr.length){
  console.log(qNum)
  submitButton.addEventListener("click", function(){
    submit(qNum);
    return qNum ++;
  });
  nextButton.addEventListener("click", function(){
    next(qNum)
  })
}


function submit(qNum){
  var qValue = document.myths.q.value //uses name as an identifier

  console.log(qNum)
  console.log(qValue)

  //create answer and answer info
  var answer = document.createElement("p")
  answer.setAttribute('id', "answer");
  answerContainer.append(answer)
  var answerInfo = document.createElement("p");
  answerInfo.setAttribute("id", "answerInfo")
  answerInfoContainer.append(answerInfo)
  //show the answer and answer info
  if (qValue == answerArr[qNum]){
    answer.innerHTML = "You are correct: " + answerArr[qNum];
    answerInfo.innerHTML = answerInfoArr[qNum]
  }else if (qValue == incorrectAnswerArr[qNum]){
    answer.innerHTML = "You are wrong: " + answerArr[qNum];
    answerInfo.innerHTML = answerInfoArr[qNum]
  }else{
    answer.innerHTML = "Select an answer!"
  }

}

function next(qNum){
  console.log(qNum)
  if (qNum == mythsArr.length - 1){
    console.log("no more questions");
    document.querySelector("#nextButton").remove();
  }
  //shows next question
  question.innerHTML = mythsArr[qNum]
  //removes the previous answer and answer info
  document.querySelector("#answer").remove();
  document.querySelector("#answerInfo").remove();
}
