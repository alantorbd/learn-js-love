//arrays is reference type data it store into heep memory
let obj = {
  name: "Antor",
  "your age": 22,
  greet: () => "hello world!",
};
console.log(obj.greet());
console.log(obj["your age"]);
console.log(obj.name);
