function maxInarray(numbers) {

    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const height = [167, 190, 120, 165, 137, 892];
const tallest = maxInarray(height);
console.log("Tellest person height: ", tallest);