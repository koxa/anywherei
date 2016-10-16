var http = require('http'),
    express = require('express'),
    path = require('path');

var app = express();
app.use(express.static(path.resolve('./public')));
var server = http.createServer(app);
server.listen(3000, "0.0.0.0");
console.log('Anywherei Started on port 3000');
