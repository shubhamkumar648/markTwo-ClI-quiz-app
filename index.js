

var readlineSync = require('readline-sync');

var chalk = require('chalk')

var score = 0;

var userName= readlineSync.question('what is your name?');

console.log('Welcome !' + userName )

console.log(chalk.red('Lets  know the worldcup record!'));

function quiz(question, option,answer) {

var userAnswer = readlineSync.question(chalk.yellow(question,option));


if ( userAnswer === answer) {


  console.log('you answer is correct')

  score = score +2;
}

else {

  console.log('wrong')

  score = score -1;

}

console.log(chalk.green('your current score is' + score));
console.log ('------------------------------------')



}

var questions = [

   {
   question: 'who was the winner of 2011 worldcup?',
    option: '\n1.Australia \n2.Srilanka \n3.India \n4.WestIndies \n your option:',
    answer: '3'
},
 {
   question: 'who is highest run scorer in 2011 worldcup?',
    option: '\n1.sangakara \n2.Gambhir \n3.yuraj \n4.dilshad \n your option:',
    answer: '4'
},

 {
   question: 'who is captain of team India in year 2011 worldcup?',
    option: '\n1.Sachin \n2.Dhoni \n3.Kohli \n4.Raina \n your option:',
    answer: '2'


 },

  {
   question: 'who is the player of the tournament in 2011 worldcup?',
    option: '\n1.Sachin \n2.Dhoni \n3.yuvraj \n4.Raina \n your option:',
    answer: '3'


 },

]

for (var i=0; i<questions.length; i++) {

var currentResult = questions[i];
quiz (currentResult.question,currentResult.option,currentResult.answer)

}
console.log(chalk.green('you final score is ' + score ));

var highscore = [

{toper: 'raghav',  score: '8'},
{toper: 'abhijeet' ,score: '5'}

]

if (score >= 6  ) {

  console.log('you  won crore')
}
else {

  console.log('try next time for topper!');
  console.log('Here are high score player');
  console.log(highscore[0].toper, highscore[0].score, highscore[1].toper,highscore[1].score);

}

console.log('Thanks you !'+ userName)