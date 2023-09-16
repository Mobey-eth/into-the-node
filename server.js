const http = require("http");
const fs = require("fs");

// we use the response object to send a response
// from the server to the browser

/**
 * To send plain text
  const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);

  // set header content type

  res.setHeader("content-Type", "text, plain");
  res.write("Moby, here!!"); // to write/send the text to the browser
  res.end();
});

*/

/**
// To send HTML?
const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);

  // set header content type

  res.setHeader("content-Type", "text, html");
  res.write("<h1>Moby, here</h1>"); // to write/send the text to the browser
  res.write("<h2>Paint the Town red!</h2>"); // to write/send the text to the browser
  res.end();
});

let portNo = 3000;
server.listen(portNo, "localhost", () => {
  console.log(`Listening on port ${portNo}`);
});

*/

// A better way to send HTML?

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);

  // set header content type

  res.setHeader("content-Type", "text, html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(); used for writing multiple things, instead of one
      res.end(data);
    }
  });
});

let portNo = 3000;
server.listen(portNo, "localhost", () => {
  console.log(`Listening on port ${portNo}`);
});
