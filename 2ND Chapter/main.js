// const mathoperation=require("./mathoperation")
// //so this requirre function give the export object which we see in the mathoperation file so that object get return when we call the require function
// console.log(mathoperation.add(30,50));
// console.log(mathoperation.multiply(30,50));
// console.log(mathoperation.multiply(3,50));

// //so as you see here we have to write the mathoperation multiple time 
// //so to overcome that we can use the OBJECT DESTRUCTING THING OF JS

// const {add,multiply,name}=mathoperation;

// console.log(multiply(3,6));

// //  ALSO WE CAN DESTRUCTE AT THE TOP LINE LIKE const {ADD,MULTIPLY,NAME}=require("./mathoperation");

const logger=require("./Module2Logger");

const {currDate,currYear}=logger;
console.log(currDate(),currYear());