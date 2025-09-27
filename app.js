const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("DataVision Processor test");
});

server.listen(PORT, () => {
  console.log(`Running: http://0.0.0.0:${PORT}`);
});