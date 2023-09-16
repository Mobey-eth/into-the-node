// console.log(global);

setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

let int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
