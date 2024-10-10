function removeDuplicates(cart) {
    let uniqueCart = [];

    for (let item of cart) {
        if (!uniqueCart.includes(item)) {
            uniqueCart.push(item);
        }
    }

    return uniqueCart;
}

// Example usage:
let cart = ["apple", "banana", "apple", "orange", "banana", "grape"];
let uniqueCart = removeDuplicates(cart);
console.log(uniqueCart); // Output: ["apple", "banana", "orange", "grape"]
