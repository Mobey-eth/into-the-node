const person = "yoshi";
const ninja = "mobi";

// console.log(person);

const greet = (name) => {
  console.log(`G'morning ${name} happy learning node - ${ninja}`);
};

// greet(person);

// The global object
// console.log(global);
const timeout = 3000;
setTimeout(() => {
  console.log("In the timeout");
  clearInterval(int);
}, timeout);

const int = setInterval(() => {
  console.log("In the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
