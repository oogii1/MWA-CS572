var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._money = 2000;
    }
    Object.defineProperty(BankAccount.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: true,
        configurable: true
    });
    BankAccount.prototype.deposit = function (value) {
        this._money += value;
    };
    return BankAccount;
}());
var Customer = /** @class */ (function () {
    function Customer(name, bankAccount, hobbies) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
    Customer.prototype.toString = function () {
        return "Name: " + this.name + " | Money: " + this.bankAccount.money + " | Hobbies: " + this.hobbies;
    };
    return Customer;
}());
var myself = new Customer("Asaad", new BankAccount(), ['Violin', 'Cooking']);
myself.bankAccount.deposit(100);
console.log(myself + '');
