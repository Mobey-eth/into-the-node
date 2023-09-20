const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.url, req.method);

  // lodash
  let num = _.random(0, 30);
  console.log(num);

  // set header content type
  res.setHeader("content-Type", "text, html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    // for redirections and status codes
    case "/about-us":
      res.statusCode = 302;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
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
