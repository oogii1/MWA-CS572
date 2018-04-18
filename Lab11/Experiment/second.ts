class Tom1 {
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