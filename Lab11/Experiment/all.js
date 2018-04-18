var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tom = /** @class */ (function () {
    function Tom(hi, what, eeenuumVar) {
        if (what === void 0) { what = "hoho"; }
        this.hi = hi;
        this.what = what;
        this.eeenuumVar = eeenuumVar;
        this.myVar = "Huurhun ain:: ==" + (this.myPublicVar && this.myProtectedVar) + "== - this is myPublicVar";
        this.myProtectedVar = 10;
        this.myPublicVar = false;
        this.MyObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: function () { return console.log('asdasdasd'); },
            key5: function () {
                var _this = this;
                var haha = function () { console.log(this); };
                this.key1 = "changed value1";
                var hoho = function () { return console.log(_this); };
                return 'asd';
            }
        };
        for (var oobj in this.MyObj) {
            console.log(oobj);
        }
    }
    Tom.prototype.nowsh = function (aa) {
        for (var _i = 0, _a = [111, 112, 113, 114, 115]; _i < _a.length; _i++) {
            var k = _a[_i];
            console.dir(k);
        }
        var a = function (a) { return console.log(a); };
        a(55);
        return "";
    };
    return Tom;
}());
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["One"] = 0] = "One";
    MyEnum[MyEnum["Two"] = 66] = "Two";
    MyEnum[MyEnum["Three"] = 67] = "Three";
})(MyEnum || (MyEnum = {}));
var tom = new Tom({ k: new Int16Array([5, 2]), l: "asd" }, "WHAAT", MyEnum.Three);
tom.nowsh(true);
var hmm;
hmm = false;
var AMyAbstract = /** @class */ (function () {
    function AMyAbstract() {
    }
    AMyAbstract.prototype.abMethod = function () {
        if (Math.random() < 0)
            return 'asd';
        return 5;
    };
    return AMyAbstract;
}());
function decorator(a1) {
    return function (a) {
        console.log("a: " + a + " a1: " + a1);
    };
}
;
function decoratorMethod(target, b, d) {
    console.log(target + " || " + b + " || " + d);
}
var CC = /** @class */ (function (_super) {
    __extends(CC, _super);
    function CC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CC.prototype.func = function () {
        console.log("id: " + this.id + " name:" + this.name);
    };
    CC.func = function () {
        console.log("static func");
    };
    Object.defineProperty(CC.prototype, "momo", {
        get: function () {
            return this._momo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC.prototype, "momo1", {
        set: function (fn) {
            this._momo = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC.prototype, "aaa", {
        get: function () {
            return parseInt(this._aaa);
        },
        set: function (a) {
            this._aaa = a + '';
        },
        enumerable: true,
        configurable: true
    });
    CC.prototype.bbb = function () {
        console.log('bbbbbb called');
    };
    __decorate([
        decoratorMethod
    ], CC.prototype, "func", null);
    __decorate([
        decoratorMethod
    ], CC, "func", null);
    CC = __decorate([
        decorator('nice')
    ], CC);
    return CC;
}(AMyAbstract));
var cc = new CC();
cc.id = '8978798970';
cc.name = 'NNAWWWA';
cc.func();
CC.func();
cc.momo1 = function (q, w) { console.log(q + " : " + w); };
console.log(cc.momo('MOOOMOOO', 2));
var Tom1 = /** @class */ (function () {
    function Tom1(hi, what, eeenuumVar) {
        if (what === void 0) { what = "hoho"; }
        this.hi = hi;
        this.what = what;
        this.eeenuumVar = eeenuumVar;
        this.myVar = "Huurhun ain:: ==" + (this.myPublicVar && this.myProtectedVar) + "== - this is myPublicVar";
        this.myProtectedVar = 10;
        this.myPublicVar = false;
        this.MyObj = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: function () { return console.log('asdasdasd'); },
            key5: function () {
                var _this = this;
                var haha = function () { console.log(this); };
                this.key1 = "changed value1";
                var hoho = function () { return console.log(_this); };
                return 'asd';
            }
        };
        for (var oobj in this.MyObj) {
            console.log(oobj);
        }
    }
    Tom1.prototype.nowsh = function (aa) {
        for (var _i = 0, _a = [111, 112, 113, 114, 115]; _i < _a.length; _i++) {
            var k = _a[_i];
            console.dir(k);
        }
        var a = function (a) { return console.log(a); };
        a(55);
        return "";
    };
    return Tom1;
}());
