const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Jenkins CI/CD with Ansible & Docker!');
}).listen(3000);
