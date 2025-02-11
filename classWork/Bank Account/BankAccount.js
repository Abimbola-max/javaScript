bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: function(amount) {
    return this.balance += amount;
    },
    withdraw: function(amount) {
        if (amount <= person.balance) {
            return this.balance -= amount;
        } else {
            return this.balance = amount;
        }
    },
    getBalance: function() {
        return this.balance;
    }
};

module.exports = {bankAccount};