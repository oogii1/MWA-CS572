var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
        this.accelerate = function (speed) {
            this.acceleration += speed;
        };
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying; Tooooooooot!!");
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(66);
console.log(car.acceleration);
