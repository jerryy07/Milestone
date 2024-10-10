const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
};

// Example usage:
const originalPrice = 200;
const discountedPrice = 150;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`); // Output: Discount Percentage: 25.00%
