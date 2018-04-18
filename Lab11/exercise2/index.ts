class Car {
    constructor(private name: string) { }
    public acceleration: number = 0;
    public honk(): void {
        console.log(`${this.name} is saying; Tooooooooot!!`);
    }
    public accelerate = function (speed: number) {
        this.acceleration += speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(66);
console.log(car.acceleration);