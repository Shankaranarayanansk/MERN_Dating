// used for getting the user data in console
const prompt = require("prompt-sync")()
 const readline = require('readline');
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 rl.question('What is your name? ', (answer) => {
     console.log(`Thank you for your valuable feedback: ${answer}`);
     rl.close();
 });