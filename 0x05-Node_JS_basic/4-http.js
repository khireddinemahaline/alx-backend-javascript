// create a small server using http module

// import http module
const { createServer } = require('node:http');
// create a server object

const port = 1245;
const hostname = 'localhost';
const app = createServer();

app.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
}
);

// listen for incoming requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}  );