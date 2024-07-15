// const _ = require("lodash");
// // const arr = [1,2,34,35,36,37,38,39];
// // console.log(_.chunk(arr));//prints as pair
// // console.log(_.last(arr));// prints last
// const cowsay = require("cowsay");
// console.log(
//   cowsay.say({
//     text: "Cowsay learn vode",
//     e: "00",
//     t: "U",
//   })
// );


const {data} = require ("./car");
console.log(data.students.age);
console.log(JSON.stringify(data , null, 3));