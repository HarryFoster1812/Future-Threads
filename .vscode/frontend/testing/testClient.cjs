const io = require("socket.io-client");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout });

rl.question('Room Code: ', (code) =>{
    rl.question('Host (Y/N): ', (host) => {
        rl.question('Username: ', (name) => {
            const socket = io('http://localhost:3001', {query: {
                name,
                roomID: code,
                isHost: host == 'Y' || host == 'y' ? true : false,
            }
            });

            const sendMsg = () => {
                rl.question('> ', (reply) => {
                    console.log(`Sending message: ${reply}`);
                    socket.emit('message', JSON.parse(reply));
                    sendMsg();
                });
            }

            socket.on('connect', () => {
                console.log('Sucessfully connected to server.');
                sendMsg();
            });

            socket.on('message', (message) => {
                console.log(message);
            });

            socket.on('disconnect', () => {
                console.log('Connection lost...')
            }); 
            
})})}) ;
