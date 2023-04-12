'use strict';

//lab 05
alert("lab 05 started");

let userName = prompt("please enter your name");

let userGender = prompt("please enter your gender", "male or female");

let userAge = prompt("please enter your Age");
if (userAge <= 0) {
  alert("Age is equal or less than 0 !!");
}

let answer = confirm("Do want to skip the welcoming message?");

if (answer == false) {
  if (userGender.toLocaleLowerCase() == "male") {
    alert(`Welcome Mr.${userName} \n your age is ${userAge}`);
    console.log(1);
  } else if (userGender.toLocaleLowerCase() == "female") {
    alert(`Welcome Ms.${userName} \n your age is ${userAge}`);
    console.log(2);
  } else {
    alert(`Welcome ${userName} \n your age is ${userAge}`);
    console.log(3);
  }
}

//lab 06
alert("lab 06 started");
alert("note: You can track the process in the console");

const checkValue =(Ques) =>{
  
  if(Ques.toLocaleLowerCase()===''){
    Ques='invalid';  
    return Ques;
  }

  return Ques;

}

const addToArray =(Arr, Ques) =>{
  
  Arr.push(Ques);
  return Arr;

}

const arrOfAnswers = new Array();

let question1 = prompt("Is HTML a shortcut for HyperText Markup Language?", 'Yes or No');
console.log('question 1 answer: ', checkValue(question1));
console.log('Arr: ', addToArray(arrOfAnswers, checkValue(question1)));

let question2 = prompt("Is CSS a shortcut for Cascading Style Sheets?", 'Yes or No');
console.log('question 2 answer: ', checkValue(question2));
console.log('Arr: ', addToArray(arrOfAnswers, checkValue(question2)));

let question3= prompt("Is JS a shortcut for Javascript?", 'Yes or No');
console.log('question 3 answer: ', checkValue(question3));
console.log('Arr: ', addToArray(arrOfAnswers, checkValue(question3)));

console.log('The array of answers: ',arrOfAnswers);
alert(`Your answers are: (${arrOfAnswers})`);