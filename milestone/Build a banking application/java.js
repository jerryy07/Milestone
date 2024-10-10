// Customer account object
const customerAccount = {
    name: 'John Doe',
    balance: 1000,

    // Method to deposit money
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}. New Balance: $${this.balance}`);
        } else {
            console.log('Insufficient balance');
        }
    },

    // Method to display current balance
    displayBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }
};

// Example usage:
customerAccount.displayBalance(); // Current Balance: $1000
customerAccount.deposit(500); // Deposited: $500. New Balance: $1500
customerAccount.withdraw(200); // Withdrawn: $200. New Balance: $1300
customerAccount.withdraw(1500); // Insufficient balance
customerAccount.displayBalance(); // Current Balance: $1300
