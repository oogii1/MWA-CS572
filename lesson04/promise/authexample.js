function authenticate(userID) { 
	return new Promise((resolve, reject) => { 
		if(userID > 0) {
            let userData = {};
			userData.userId = true; 
			userData.authenticated = true;
			resolve(userData); 
		} else { reject(Error('Can not find the author')); } 
	}); 
} 

authenticate(3) 
	.then(userData => { console.log(userData); }) 
	.then(bankInfo => { console.log(bankInfo); }) 
	.catch(err => { console.error(err); });
