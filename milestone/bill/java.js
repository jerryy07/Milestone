function calculateBill(dishes, numberOfPeople) {
    // Calculate the total bill by summing up the cost of each dish
    const totalBill = dishes.reduce((total, dish) => total + dish, 0);
    
    // Calculate the bill per person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return an object with the total bill and the bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
const dishes = [100, 200, 150]; // Costs of each dish
const numberOfPeople = 3; // Number of people sharing the bill

const result = calculateBill(dishes, numberOfPeople);
console.log(result); // { totalBill: 450, billPerPerson: 150 }
