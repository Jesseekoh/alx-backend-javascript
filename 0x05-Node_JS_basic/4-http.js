const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer((_, res) => {
  res.write('Hello Holberton School!');
  res.end();
});
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
