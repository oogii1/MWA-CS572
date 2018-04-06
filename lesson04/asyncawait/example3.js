var Studied = true;
var willPassTheExam = function () {
    return new Promise(function (resolve, reject) {
        if (Studied) resolve('Pass');
        else reject(new Error('Fail'));
    })
};

var askMe = function () {
    willPassTheExam()
        .then(function (results) { console.log(results); }).catch(function (error) { console.log(error); });
};

async function askMe2() { 
	try { 
		console.log('Before taking the exam'); 
		let results = await willPassTheExam(); 
		console.log(results); 
		console.log('After taking the exam'); 
	} catch (error) {
        console.log("Catch error..."); 
		console.log(error); 
	} 
}


askMe2(); 
console.log('Finish');
