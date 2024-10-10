function calculateRentalCost(daysRented, carType) {
    let dailyRate;

    switch (carType.toLowerCase()) {
        case 'economy':
            dailyRate = 4000;
            break;
        case 'midsize':
            dailyRate = 10000;
            break;
        case 'luxury':
            dailyRate = 20000;
            break;
        default:
            return "Invalid car type";
    }

    return dailyRate * daysRented;
}

