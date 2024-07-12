// // var a =29;
// // {
// //     var a= 90;
// //     console.log(a);
// //     console.log("bhjbh"+a);
// // }


// // const a = 30; 
// // {
// //     const a = 100;
// //     console.log("inner"+a);
   
// // }
// // console.log("bhjbh"+a);


// //closure

// // function outerFunction() {
// //     const outerVariable = "I am outside!";
  
// //     function innerFunction() {
// //       console.log(outerVariable);
// //     }
  
// //     return  innerFunction;
   
// //   }
// //   const a  = outerFunction();
// //   const myClosure = outerFunction();

// // //   console.log()
// //   myClosure();  // Output: "I am outside!"
  

// // let a= "10";
// // if(a=="10")
// // {
// //     console.log(1)
// // }
// // else
// // {
// //     console.log(2)
// // }



// //star pattern 

// // let n= 5;

// // for(let i=0; i<n; i++)
// //     {
// //         let a = "";
// //         for(let j=0; j<=i; j++)
// //         {
// //             a += "*";
// //         }
// //         console.log(a);
// //     }


// //amstrong number 
// // let n =5;

// // let sum = 0;

// // let temp = n;

// // while(temp > 0)
// //     {
// //         let digit = temp % 10;
// //         sum += Math.pow(digit, 3);
// //         temp = Math.floor(temp / 10);
// //     }
// //     if(n == sum)
// //         console.log(n + " is an Armstrong number.");
// //     else
// //     console.log(n + " is not an Armstrong number.");


// //fizz buzz

// // for(let i=1; i<=100; i++)
// //     {
// //         if(i % 3 == 0 && i % 5 == 0)
// //             console.log("FizzBuzz");
// //         else if(i % 3 == 0)
// //             console.log("Fizz");
// //         else if(i % 5 == 0)
// //             console.log("Buzz");
// //         else
// //             console.log(i);
// //     }


// //factorial

// // let n = 5;

// // let factorial = 1;

// // for(let i=1; i<=n; i++)
// //     {
// //         factorial *= i;
// //     }
// //     console.log("Factorial of " + n + " is " + factorial);

// //Arrays 

// //     let arr = [1, 2, 3, 4, 5];

// //     for(let i=0; i<arr.length; i++)
// //         {
// //             console.log(arr[i]);
// //         }
    
// //         console.log(arr.length);
    
// //         console.log(arr[arr.length-1]);
    
// //         arr.push(6);
    
// //         console.log(arr);
    
//         // arr.pop();
    
//         // console.log("pop"+arr);//del the last element
    
// //         arr.unshift(0);//unshift the first element
    
// //         console.log(arr);
    
// //         arr.shift();//
    
// //         console.log(arr);
    
// //         console.log(arr.indexOf(3));
    
// //         console.log(arr.includes(3));
    
// //         arr.sort((a, b) => a - b);
    
// //         console.log(arr);
    
// //         console.log(arr.reverse());
    
//         // console.log("slice"+arr.slice(1, 3)); //last element with last ku munadi
    
//         // console.log("splice"+arr.splice(1,3,"10","20"));//last element ku munadi and then pinadi with kudutha element 
    
// // //array for looping concepts

// //     let arr2 = [1, 2, 3, 4, 5];

// //     for(let i in arr2)
// //         {
// //             console.log(arr2[i]);
// //         }
// //         console.log(arr2.length);
// //         console.log(arr2[arr2.length-1]);
// //         console.log(arr2.push(6));
// //         console.log(arr2);
// //         console.log(arr2.pop());
// //         console.log(arr2);
// //         console.log("unshift"+arr2.unshift(t));
// // //         console.log(arr2);
// // //         console.log("shift"+arr2.shift());
// // //         console.log(arr2);
// // //         console.log(arr2.indexOf(3));
// // //         console.log(arr2.includes(3));
// // //         console.log(arr2.sort((a, b) => a - b));

// //       //splice modifies
// //       let a = [1,2,3,4,5,6,7,8]
// //       let b = a.slice(2,5);
// //       console.log("itha paru "+b);


// //         //map function 
        
// //         let arr3 = [1, 2, 3, 4, 5];
// //         let newArr = arr3.map(x => x * 2);
// //         console.log(newArr);
        
// //         //filter function
        
// //         let newArr2 = arr3.filter(x => x % 2 == 0);
// //         console.log(newArr2);
        
// //         //reduce function
        
// //         let sum = arr3.reduce((a, b) => a + b, 0);
// //         console.log(sum);
        
// //         //reduceRight function
        
// //         let sumRight = arr3.reduceRight((a, b) => a + b, 0);
// //         console.log(sumRight);
        
// //         //every function
        
// //         let isAllEven = arr3.every(x => x % 2 == 0);
// //         console.log(isAllEven);
        
// //         //some function
        
// //         let isSomeEven = arr3.some(x => x % 2 == 0);
// //         console.log(isSomeEven);
        
// //         //find function
        
// //         let firstEven = arr3.find(x => x % 2 == 0);
// //         console.log(firstEven);
        
// //         //find index function
        
// //         let indexEven = arr3.findIndex(x => x % 2 == 0);
// //         console.log(indexEven);

// //  //________________________________________________________________________________________________________________________

// //         //object create function
        
        let obj = Object.create(null);
        obj.name = "John";
        obj.age = 30;
        console.log("creation",obj);
        
        let obj2 = Object.create(obj);
        obj2.city = "New York";
        console.log("creation",obj2);
        
// //         //object.assign function
        
        let obj3 = {name: "John", age: 30};
        let obj4 = {city: "New York"};
        let obj5 = Object.assign({}, obj3, obj4);
        console.log("assign",obj5);
        
//         //object.keys function
        
        let obj6 = {name: "John", age: 30, city: "New York"};
        let keys = Object.keys(obj6);
        console.log("keys in obj",keys);
        
        //object.values function
        
        let values = Object.values(obj6);
        console.log("values in obj",values);
        
        //object.entries function
        let entries = Object.entries(obj6);
        console.log("entries",entries);
//_____________________________________________________________________________________________________________
// //         //for in syntax
        
        // let obj7 = {name: "John",name:"ala", age: 30, city: "New York"};
        // for(let key in obj7)
        // {
        //     console.log(key + " : " + obj7[key]);
        // }
        
// //         //for of syntax
        
// //         for(let value of values)
// //         {
// //             console.log(value);
// //         }
        
// //         //for each syntax
        
        // obj7.forEach((value, key) => {
        //     console.log(key + " : " + value);
        // });
        
        //object.freeze function
        
        let obj8 = {name: "John", age: 30, city: "New York"};
        Object.freeze(obj8);
        obj8.name = "Jane";
        console.log("freeze",obj8);
        
        //object.seal function
        
        let obj9 = {name: "John", age: 30, city: "New York"};
        Object.seal("seal",obj9);
        obj9.name = "Jane";
        console.log("seal",obj9);


//         //template literals
        
//         let name = "Shankar";
//         let age = 30;
//         let city = "New York";
//         let message = `Hello, my name is ${name}. I am ${age} years old. I live in ${city}.`;
//         console.log("template literals="+message);
        
//         //destructuring
        
//         let [firstName, lastName] = ["John", "Doe"];
//         console.log(firstName + " " + lastName);
        
//         let {firstName: first, lastName: last} = {firstName: "John", lastName: "Doe"};
//         console.log(first + " " + last);
        
//         //spread operator
        
//         let arr10 = [1, 2, 3];
//         let arr11 = [4, 5, 6];
//         let mergedArray = [...arr10, ...arr11];
//         console.log(mergedArray);
        
//         // //rest operator
        
//         // function sum(...numbers) {
//         //     let sum = 0;
//         // }
//         // for(let number of numbers) {
//         //     sum += number;
//         // }


//typeof

// const a = [1, 2,3,4 ,5,6];

// console.log(typeof a); // object



const person = {name: 1, age: 20, lname: "ram"};
// const result = Object.entries(person).map(([key, value]) => `${key} ${value}`);
// // console.log("map with entries",result);

// const result = Object.entries(person).map(([i, j,k]) =>`${i}${j}${k}`)
// console.log("read entiries",result);
// person=undefined;//can't do it becoz of 
// person.lname = "John";
// // person['name'] = 10;
// console.log(person)
const po ={...person,fname:"irfan"}
console.log("spread",po)


const po2 = {...person}


//rest operater example

function sum(...numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;
}




___________________________________________________________________________________________


