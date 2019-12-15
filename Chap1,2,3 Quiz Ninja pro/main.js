/*
//CHAPTER ONE TASK
alert("Welcome to Quiz Ninja");

//CHAPTER TWO TASK
const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);

//CHAPTER THREE TASK

const quiz = [
["What is superman's real name?", "Clark Kent"],
["What is Wonder Woman's real name?","Sarah Tancredi"],
["What is Batman's real name?", "Bruce Wayne"]
];

let score = 0;
for(const [question,answer] of quiz) {
  const response = prompt(question);
  if(response === answer) {
    alert("correct");
    score++;
  } else {
    alert(`Wrong! The correct answer was ${Answer}` );
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`)
  }
}
*/

