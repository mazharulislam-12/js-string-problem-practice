function reverseString(text) {
    let resersed = '';
    for(i = text.length-1; i >= 0; i--){
        const element = text[i];
        resersed = resersed + element;
        console.log(element, resersed);
    }
    return resersed;
}
const myString = "I am a good boy";
const resersed = reverseString(myString); 
console.log(resersed);