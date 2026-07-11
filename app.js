const http = require('http');
const fs = require('fs');




const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    }
    if(req.url === '/message' && req.method === 'POST') {
        fs.writeFileSync('message.txt', 'Dummy Text');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    process.exit();
    }
});

server.listen(5000);
