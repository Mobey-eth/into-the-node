const http = require("http");
const fs = require("fs");
const routes = require("./module");

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("content-Type", "text, html");

  let path = "./mobyTesting/";

  if (routes.hasOwnProperty(req.url)) {
    path += routes[req.url];
    res.statusCode = 200;
  } else {
    path += routes.error404;
    res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(); used for writing multiple things, instead of one
      // res.statusCode(200); // set inside the response onbject
      res.end(data);
    }
  });
});

let portNo = 3000;
server.listen(portNo, "localhost", () => {
  console.log(`Listening on port ${portNo}`);
});
