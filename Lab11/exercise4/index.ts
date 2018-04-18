class Person {
    private _firstName: string;
    get FirstName(): string {
        return this._firstName;
    }
    set FirstName(firstName: string) {
        this._firstName = firstName;
    }
}
const person = new Person();
person.FirstName = "Joy";
console.log(person.FirstName);