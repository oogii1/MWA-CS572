var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.FirstName = "Joy";
console.log(person.FirstName);
