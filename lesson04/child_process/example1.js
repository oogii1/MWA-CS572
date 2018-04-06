const http = require('http'); 
const { fork } = require('child_process'); 
const server = http.createServer(); 

server.on('request', (req, res) => { 
    const childProcess = fork('longOperation.js'); 
    childProcess.send('test'); 
    childProcess.on('message', sum => { 
    	res.end(`Sum is ${sum}`); 
    }); 
}); 

server.listen(3000);
