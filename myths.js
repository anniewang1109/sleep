var mythsArr = [
"Myth 1: Sleep is a time when your body and brain shut down for rest and relaxation.",
"Myth 2: Your body adjusts quickly to different sleep schedules",
"Myth 3: People need less sleep as they get older",
"Myth 4: Extra sleep for one night can cure you of problems with excessive daytime fatigue",
"Myth 5: You can make up for lost sleep during the week by sleeping more on the weekends",
"Myth 6: Naps aren't a bad thing",
"Myth 7: Getting just 1 hour less sleep per night than needed will not have any effect on your daytime functioning."];
var answerArr = ["false", "false", "false", "false","false", "true", "false"]
var incorrectAnswerArr = ["true", "true", "true", "true", "true", "false", "true"]
var answerInfoArr = ["No evidence shows that any major organ (including the brain) or regulatory system in the body shuts down during sleep. Some physiological processes actually become more active while you sleep. For example, secretion of certain hormones is boosted, and activity of the pathways in the brain linked to learning and memory increases. ",
"Your biological clock makes you most alert during the daytime and least alert at night. Thus, even if you work the night shift, you will naturally feel sleepy when nighttime comes. Most people can reset their biological clock, but only by appropriately timed cues—and even then, by 1–2 hours per day at best. Consequently, it can take more than a week to adjust to a substantial change in your sleep–wake cycle—for example, when traveling across several time zones or switching from working the day shift to the night shift.",
"Older people don’t need less sleep, but they may get less sleep or find their sleep less refreshing. That’s because as people age, the quality of their sleep changes. Older people are also more likely to have insomnia or other medical conditions that disrupt their sleep.",
"Not only is the quantity of sleep important, but also the quality of sleep. Some people sleep 8 or 9 hours a night but don’t feel well rested when they wake up because the quality of their sleep is poor. A number of sleep disorders and other medical conditions affect the quality of sleep. Sleeping more won’t lessen the daytime sleepiness these disorders or conditions cause. However, many of these disorders or conditions can be treated effectively with changes in behavior or with medical therapies. Additionally, one night of increased sleep may not correct multiple nights of inadequate sleep.",
"Although this sleeping pattern will help you feel more rested, it will not completely make up for the lack of sleep or correct your sleep debt. This pattern also will not necessarily make up for impaired performance during the week or the physical problems that can result from not sleeping enough. Furthermore, sleeping later on the weekends can affect your biological clock, making it much harder to go to sleep at the right time on Sunday nights and get up early on Monday mornings.",
"Although naps are no substitute for a good night’s sleep, they can be restorative and help counter some of the effects of not getting enough sleep at night. Naps can actually help you learn how to do certain tasks quicker. But avoid taking naps later than 3 p.m., particularly if you have trouble falling asleep at night, as late naps can make it harder for you to fall asleep when you go to bed. Also, limit your naps to no longer than 20 minutes, because longer naps will make it harder to wake up and get back in the swing of things. If you take more than one or two planned or unplanned naps during the day, you may have a sleep disorder that should be treated.",
"This lack of sleep may not make you noticeably sleepy during the day. But even slightly less sleep can affect your ability to think properly and respond quickly, and it can impair your cardiovascular health and energy balance as well as your body’s ability to fight infections, particularly if lack of sleep continues. If you consistently do not get enough sleep, a sleep debt builds up that you can never repay. This sleep debt affects your health and quality of life and makes you feel tired during the day."]

console.log(mythsArr.length)
console.log(answerInfoArr.length)


var question = document.querySelector("#question");
var t = document.querySelector("[value*='true']");
var f = document.querySelector("[value*='false']")
var submitButton = document.querySelector("[value*='Submit']")
var nextButton = document.querySelector("[value*= 'Next']");


var qNum = 0;
question.innerHTML = mythsArr[qNum]

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
  answerContainer.append(answerInfo)
  //show the answer and answer info
  if (qValue == answerArr[qNum]){
    answer.innerHTML = "You are correct! It is " + answerArr[qNum] +  ".";
    answerInfo.innerHTML = "<br>" + answerInfoArr[qNum] + "<br><br><i>Source: NIH</i>"
  }else if (qValue == incorrectAnswerArr[qNum]){
    answer.innerHTML = "You are wrong! It is " + answerArr[qNum] + ".";
    answerInfo.innerHTML = "<br>" + answerInfoArr[qNum] + "<br><br><i>Source: NIH</i>"
  }else{
    answer.innerHTML = "Select an answer!"
  }
  if (qNum == mythsArr.length - 1){
    answerInfo.remove();
  }

}

function next(qNum){
  console.log(qNum)
  if (qNum == mythsArr.length - 1){
    document.querySelector("#nextButton").remove();

  }
  //shows next question
  question.innerHTML = mythsArr[qNum]
  //removes the previous answer and answer info
  document.querySelector("#answer").remove();
  document.querySelector("#answerInfo").remove();
}
