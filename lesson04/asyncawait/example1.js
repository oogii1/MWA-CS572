async function test(){
    return new Error("test...");
}

test().then(x => console.log(x)).catch(err => console.log(`Error message: ${err}`));