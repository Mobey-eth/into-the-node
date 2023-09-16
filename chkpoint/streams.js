// const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog2.txt");

// readStream.on("data", (chunk) => {
//   console.log("------------NEW CHUNK----------\n");
//   //   console.log(chunk);
//   console.log(chunk.toString());
// });

//2... To write stream

// const fs = require("fs");

// const readStream = fs.createReadStream("./docs/blog2.txt", {
//   encoding: "utf8",
// });

// const writeStream = fs.createWriteStream("./docs/blog3.txt");

// readStream.on("data", (chunk) => {
//   console.log("------------NEW CHUNK----------\n");
//   //   console.log(chunk);
//   console.log(chunk);

//   //writestream

//   writeStream.write("\nNew Chunk\n");
//   writeStream.write(chunk);
// });

//.. 3 Piping

const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog2.txt");
const writeStream = fs.createWriteStream("./docs/pipingBlog4.txt");

readStream.pipe(writeStream);
