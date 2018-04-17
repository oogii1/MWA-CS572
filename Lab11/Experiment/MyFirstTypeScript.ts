class Tom {
    private myVar: string = `Huurhun ain:: ==${this.myPublicVar && this.myProtectedVar}== - this is myPublicVar`;
    protected myProtectedVar: number = 10;
    public myPublicVar: boolean = false;
    constructor(private hi: { k: Int16Array, l: string }, protected what: string = "hoho", public eeenuumVar: MyEnum) {
        for (let oobj in this.MyObj) {
            console.log(oobj);
        }
    }
    public thisIsFunctionTypedVar: () => number;
    public MyObj: {} = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: () => console.log('asdasdasd'),
        key5: function () {
            const haha = function () { console.log(this) };
            this.key1 = "changed value1";
            const hoho = () => console.log(this);
            return 'asd';
        }
    };
    public nowsh(aa: number | string | boolean): string {
        for (const k of [111, 112, 113, 114, 115]) {
            console.dir(k);
        }
        const a = (a: number) => console.log(a);
        a(55);
        return "";
    }
}
enum MyEnum {
    One, Two = 66, Three
}
const tom = new Tom({ k: new Int16Array([5, 2]), l: "asd" }, "WHAAT", MyEnum.Three);
tom.nowsh(true);
type p = 1 | 2 | 'asd' | false;
let hmm: p;
hmm = false;

interface IMyInterface {
    name: string;
}
interface IMyInterface2 {
    id: string;
}
abstract class AMyAbstract {
    abMethod() {
        if (Math.random() < 0) return 'asd';
        return 5;
    }
    abstract aaa: number;
    abstract bbb(): void;
}

function decorator(a: Function) {
    console.log(a);
};

@decorator
class CC extends AMyAbstract implements IMyInterface, IMyInterface2 {
    public name: string;
    public id: string;
    public func(): void {
        console.log(`id: ${this.id} name:${this.name}`);
    }
    public static func(): void {
        console.log(`static func ${this.name}`);
    }
    private _momo: (a: string, b: number) => void;
    get momo() {
        return this._momo;
    }
    set momo1(fn: (k: string, b: number) => void) {
        this._momo = fn;
    }
    private _aaa: string;
    get aaa() {
        return parseInt(this._aaa);
    }
    set aaa(a: number) {
        this._aaa = a + '';
    }
    bbb(): any {
        console.log('bbbbbb called');
    }
}
const cc = new CC();
cc.id = '8978798970';
cc.name = 'NNAWWWA';
cc.func();
CC.func();
cc.momo1 = (q: string, w: number) => { console.log(`${q} : ${w}`) };
console.log(cc.momo('MOOOMOOO', 2));
