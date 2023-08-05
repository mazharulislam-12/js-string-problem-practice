function resersedWord(str) {
    const words = str.split = (' ');
    const result = [];
    for(let i = words.length-1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const resersed = result.join(' ')
    return resersed;
}

const myString = "I am a good boy";
resersedWord(myString);



