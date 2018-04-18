abstract class BaseObject {
    constructor(public width: number, public length: number) { }
    abstract calcSize(): number;
}
class Rectangle extends BaseObject {
    public calcSize(): number {
        return this.width * this.length;
    }
}
console.log(new Rectangle(5, 2).calcSize());