//arrays is reference type data it store into heep memory
// let obj = {
//   name: "Antor",
//   "your age": 22,
//   greet: () => "hello world!",
// };
// console.log(obj.greet());
// console.log(obj["your age"]);
// console.log(obj.name);
// obj2 = { obj };
// // obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "Joy";
// console.log(obj.name);
// console.log(obj2.name);
// obj.city = "Kushtia";
// console.log(obj);
// delete obj.name;g
// console.log(obj);

//------------------------array------------------------

// let arr = [1, 3, 4, 5, 6];
// console.log(arr);
// //arr constructor
// let arr1 = new Array(1, 2, 3, 4, 5);
// console.log(typeof arr1);
// console.log(arr[0]);
// arr.push(34);

// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(45);
// console.log(arr);

// arr3 = arr.slice(1, 4);
// console.log(arr3);

// arr.splice(1, 2, "antor");
// console.log(arr);

// arr1 = arr1.map((n, i) => n * i);
// console.log(arr1);

// console.log(
//   arr.filter((n) => {
//     if (n % 2) {
//       return false;
//     } else {
//       return true;
//     }
//   })
// );

// let ans = arr1.reduce((s, v) => {
//   return s + v;
// }, 0);
// console.log(ans);

// arr = [53, 353, 2, 35, 645];
// arr.sort((a, b) => b - a);
// console.log(arr);

// console.log(arr.indexOf(53));
//---------------------------------------------------------

let arr = [35, 33, 445];

// arr.forEach((value, index) => {
//   console.log("number", value, "index", index);
// });

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let key of arr) {
//   console.log(key);
// }

// let obj = { name: "antor", age: 35, city: "kushtia", msg: () => "hello bd" };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// let sum = (arr) => {
//   let s = 0;
//   for (i of arr) {
//     s += i;
//   }
//   return s;
// };
// console.log(sum(arr));
