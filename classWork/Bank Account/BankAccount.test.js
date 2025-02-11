const {bankAccount} = require("./BankAccount.js");

test ("deposit 200 into the account", () => {
    let depositFunction = bankAccount.deposit(200);
    let expected = bankAccount.getBalance();
    expect(depositFunction).toBe(expected);
});

test ("deposit 1000 into the account", () => {
    let depositFunction = bankAccount.deposit(1000);
    let expected = bankAccount.getBalance();
    expect(depositFunction).toBe(expected);
});

test ("withdraw 200 from the account", () => {
    let withdrawFunction = bankAccount.withdraw(200);
    let expected = bankAccount.getBalance();
    expect(withdrawFunction).toBe(expected);
});

test ("withdraw 500 from the account", () => {
    let withdrawFunction = bankAccount.withdraw(500);
    let expected = bankAccount.getBalance();
    expect(withdrawFunction).toBe(expected);
});

test ("withdraw minus 700 from the account", () => {
    let withdrawFunction = bankAccount.withdraw(-700);
    let expected = bankAccount.getBalance();
    expect(withdrawFunction).toBe(expected);
})