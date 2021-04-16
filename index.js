

var readlineSync = require('readline-sync')

var userName = readlineSync.question("What's your name ? ")

var welcomeMessage = " Welcome! " + userName + " to HOW WELL DO YOU KNOW ME? "

console.log(welcomeMessage)
console.log("---------------")



var score = 0
//processing unit
function play(question,answer){

  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase() ===answer.toUpperCase()){
    console.log("You were Right!!");
    score++;
    //console.log("Your Score : "+score)
  } else {

    console.log("You were Wrong!")
    //score--;
    //console.log("Your Score : "+score)
  }
  console.log("Your Current Score : "+score)
  console.log("---------------")
 

}


var highScores = [
  {
    name:"Manoj",
    score:4
  }
]

var questionArr = [{
  question : "Where Am I Born? ",
  answer : "Delhi"
},{
  question : "Which is my favorite Company? ",
  answer : "Microsoft"
},{
  question : "Which sport i like the most? ",
  answer : "Badminton"
},{
  question : "What is my favorite dish? ",
  answer : "Grill Chicken"
}]


for(var i=0;i<questionArr.length;i++){
  var currentQues = questionArr[i];

  play(currentQues.question,currentQues.answer)

}

console.log("YAY!! You Scored : "+score)
console.log("---------------")

for(var i = 0;i<highScores.length;i++){

  
  if(score>=highScores[i].score){
    console.log("You Answered All Questions. Your Score will be added in the list.")

    highScores.push({'name':userName,'score':score})
    
     break;
    //console.log("Highest Scorer Name : "+userName + " Highest Score : "+score)
  } else {
    console.log("Highest Scorer Name : "+highScores[i].name + " Highest Score : "+highScores[i].score)
  }
}
console.log("---------------")
console.log("HIGHEST SCORER LIST :")

for(var i = 0;i<highScores.length;i++){
 console.log("Highest Scorer Name : "+highScores[i].name + " Highest Score : "+highScores[i].score)
 console.log("--------------")
}

//play("Where Am I Born? ","Delhi");
//play("Which is my favorite Company? ","Microsoft");
//play("Which sport i like the most? ","Badminton")
//console.log("Your Final Score : "+score)


