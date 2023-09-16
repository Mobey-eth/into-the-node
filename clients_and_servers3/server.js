const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request made!");
});

let portNo = 3000;
server.listen(portNo, "localhost", () => {
  console.log(`Listening on port ${portNo}`);
});
