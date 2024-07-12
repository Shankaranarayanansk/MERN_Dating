// //err object creation 
// const err = new Error("Error creating");
// // console.log(err.message)
// class cus_err extends Error {
//     constructor(msg) {
//         super(msg);
//         this.name = "CustomError";
//     }
// }

// module.exports = { cus_err };

const err = new Error("Error creating");
console.log(err.stack)
