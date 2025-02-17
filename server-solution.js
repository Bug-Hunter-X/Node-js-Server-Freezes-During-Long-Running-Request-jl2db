const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer(async (req, res) => {
  // Use a worker thread to offload the long-running task
  const worker = new Worker('./long-task.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello World! Result: ${result}`);
  });

  worker.on('error', (error) => {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// long-task.js
let count = 0;
while (count < 1000000000) {
  count++;
}
postMessage(count);