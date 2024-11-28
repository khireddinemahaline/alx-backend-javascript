const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async.js'); // Ensure this is the correct file path
const path = require('path');

const port = 1245;
const hostname = 'localhost';

const app = createServer();

app.on('request', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        try {
            res.write('This is the list of our students\n');

            const filePath = process.argv[2];
            if (!filePath) {
                throw new Error('File path not provided');
            }

            // Pass the resolved absolute path
            const absolutePath = path.resolve(filePath);
            const result = await countStudents(absolutePath);

            res.end(`${result}\n`);
        } catch (error) {
            res.statusCode = 500;
            res.end(`Error: ${error.message}\n`);
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
