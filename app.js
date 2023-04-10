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
