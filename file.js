const fs = require("fs");

// reading files
// fs.readFile("./docs/test1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// // writing files
// const text = "INcominggggggggg!!!!!!";
// fs.writeFile("./docs/test2.txt", text, () => {
//   console.log("Writing file");
// });
// directories
let count = 0;
while (count < 2) {
  if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("folder created");
    });
  } else {
    fs.rmdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("folder deleted");
    });
  }
  count++;
}

// deleting files
fs.unlink("./docs/test2.txt", (err) => {
  if (err) {
    console.log(err);
  }
});
// console.log("last Line"); --reading files is asynchronous my love
