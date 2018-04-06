const fetch = require('node-fetch');

function *myGenerator() {
    console.log(1);
    let a = yield fetch('https://api.myjson.com/bins/8p5wl').then(data => data.json());
    console.log(a); // 1eyxut
    let b = yield fetch(`https://api.myjson.com/bins/${a}`).then(data=> data.json());
    console.log(b); // 3
  }
  
  let iterator = myGenerator();
  let firstYield = iterator.next();
  firstYield.value.then(data => console.log(data));
//   console.log(firstYield.value);
  let secondYield = iterator.next('1eyxut'); 
  secondYield.value.then(data => console.log(data));
  let generatorReturnValue = iterator.next(3); 
  console.log(generatorReturnValue);