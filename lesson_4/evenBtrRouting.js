const http = require("http");
const fs = require("fs");
const routes = require("./module");

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("content-Type", "text, html");

  let path = "./mobyTesting/";
  let errBool = true;
  let breakLoop = false;

  for (route in routes) {
    // console.log("-----start-------");
    // console.log(route);
    // console.log(req.url);
    if (route == req.url) {
      path += routes[req.url];
      // console.log(path);
      errBool = false;
      breakLoop = true;
    }

    if (breakLoop) {
      break;
    }
  }

  if (errBool) {
    path += routes["error404"];
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
