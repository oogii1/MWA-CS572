class BankAccount {
    constructor() { }
    private _money: number = 2000;
    get money(): number {
        return this._money;
    }
    public deposit(value: number): void {
        this._money += value;
    }
}
class Customer {
    constructor(public name: string, public bankAccount: BankAccount, public hobbies: string[]) { }
    public toString(): string {
        return `Name: ${this.name} | Money: ${this.bankAccount.money} | Hobbies: ${this.hobbies}`;
    }
}

const myself = new Customer("Asaad", new BankAccount(), ['Violin', 'Cooking']);
myself.bankAccount.deposit(100);
console.log(myself + '');