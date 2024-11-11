const readline = require('node:readline');

const { Chatclient } = require('./client/Chatclient');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question(`What's your name? `, name => {
    rl.close();
    init(name);
});


const init = (name) => {
    const client = new Chatclient({ url: 'ws://localhost:8080', username: name });

    client.init();

    const chatInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    
    chatInput.on('line', (input) => {
      if (input.trim().toLowerCase() === 'exit') {
          chatInput.close();
      } else {
          client.send(input);
      }
  });
}