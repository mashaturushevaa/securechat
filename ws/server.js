const { Chatserver } = require('./server/Chatserver');

const chatserver = new Chatserver({ port: 8080 });

chatserver.init();