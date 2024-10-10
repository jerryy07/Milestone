const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

// Example usage:
const customerCart = [
    { unitPrice: 50, quantity: 2 },
    { unitPrice: 30, quantity: 1 },
    { unitPrice: 100, quantity: 3 }
];

const totalCost = calculateTotalCost(customerCart);
console.log(totalCost); // Output: 380
