// Write your code here
const multiply = function(num1, num2){
    let result = num1 * num2
    if(result === 62){
        return "Correct figures"
    }else {
        return "Those are the wrong numbers!"
    }
}

let random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
console.log(random);

let num3 = 14;
let num4 = 5;
let remainder = num3 % num4;
if (remainder === 4) {
  console.log("Modulus is successful!");
} else {
  console.log("Modulus is unsuccessful!");
}

const max = Math.max(5, 10, 15, 20);
   console.log(max)