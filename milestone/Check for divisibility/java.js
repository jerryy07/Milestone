function printDivisibleBy3Not2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 !== 0 || numbers[i] % 2 === 0) {
            continue;
        }
        console.log(numbers[i]);
    }
}

// Example usage:
let numbers = [1, 3, 4, 6, 9, 12, 15, 18, 21];
printDivisibleBy3Not2(numbers); 
// Output:
// 3
// 9
// 15
// 21
