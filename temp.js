// approach 01-------
let first = 5;
let second = 7;
const temp = first;
first = second;
second = temp;
console.log(first, second);

// approach 02--------destructure
let first = 5;
let second = 7;
[first, second] = [second, first];
console.log(first, second);
