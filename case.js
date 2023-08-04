const userName = "blackPink";
const userInput = "backPinK";
console.log(userName.toLocaleLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase);
console.log(userInput.toLocaleUpperCase);
if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
    console.log("invalid User");
}
else{
    console.log("invalid user");
}