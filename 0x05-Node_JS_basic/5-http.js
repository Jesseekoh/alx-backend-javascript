const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv[2] ? process.argv[2] : '';

const routeHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (parsedUrl.pathname === '/students') {
    const responseParts = ['This is the list of our students'];

    countStudents(DB_FILE)
      .then((report) => {
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        // res.setHeader('Content-Type', 'text/plain');
        // res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      }).catch((err) => {
        responseParts.push(err instanceof Error ? err.message : err.toString());
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(responseText);
      });
  }
};
const app = http.createServer(routeHandler);
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
