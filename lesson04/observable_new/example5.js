/**
 * https://stackoverflow.com/questions/45784825/frompromise-does-not-exist-on-type-observable/45785513
 */
const { from } = require('rxjs');
//example promise that will resolve or reject based on input
let myromise = new Promise((resolve, reject) => { setTimeout(function () { resolve("Success!"); }, 2000); });

const subscribe = from(myromise).subscribe(val => console.log(val));