const result =  Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if (gap < 5) {
    console.log("You guys you be friend");
}
else{
    console.log("not be friend");
}

// math round
const number = 45.4587;
const roundNumber = Math.round(number);
console.log(roundNumber);

// celi 
const result2 = Math.ceil(2.045511);
console.log(result2);

// floor
const result3 = Math.floor(554.96120);
console.log(result3);

// random
// console.log(Math.random());

// random 1 to 100
const random = Math.round(Math.random()*100);
// console.log(random);

// random for loop
for(var i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
