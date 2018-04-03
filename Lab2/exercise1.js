Array.prototype.even = function () {
    const tmp = [];
    for (let el of this)
        el % 2 == 0 && tmp.push(el);
    console.log(tmp);
    return tmp;
};
Array.prototype.odd = function () {
    const tmp = [];
    for (let el of this)
        el % 2 != 0 && tmp.push(el);
    console.log(tmp);
    return tmp;
};
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();