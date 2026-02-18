const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.write('<p>This is my Node.js web server</p>');
    res.end();
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
    console.log('Press Ctrl+C to stop the server');
});