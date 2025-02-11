bankAccount = {
    owner: "Alice",
    balance: 500,

    deposit: function(amount) {
    return this.balance += amount;
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            return this.balance -= amount;
        } else {
            return "Insufficient funds";
        }
    },
    getBalance: function() {
        return this.balance;
    }
};

module.exports = {bankAccount};