let button = document.querySelector("button");
                                    
// 1. Declare a variable called `answer` that stores the p tag that has the class name `answer`.
let answer1 = document.querySelectorAll(".answer");
answer1 = [...answer1]
let answer2 = document.querySelectorAll("p");
answer2 = [...answer2]

let answer;
for (var i=0;i<answer1.length;i++) {
    if (answer2.includes(answer1[i])){
        answer = answer1[i];
        break;
    }
}

button.addEventListener("click", function() {
// 2. Replace the value with a string with a name of a movie you enjoy.
// 3. Uncomment the line of code below, run, and try the button.
    answer.innerHTML="the Matrix";





});