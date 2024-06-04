// operator
// 1.Arithmatic
// 2.Relation
// 3.Logical
// 4. Assignment
// 5.Termary (conditional)

// primitive Data type
// 1. defined 
// 2. undefined
// 3. Null

// Arithmatic operator(+,*,/,**,%)
let a = 20;
let b = 10;
let res=a*b;
let div=a/b;
let pow=a**b; 
console.log("----Multiply----")
console.log("Result of Mulitply:",res)

console.log("----Division----")
console.log("Result of Division:",div)

console.log("----Modules----")
console.log("Result of Modules:",pow)

// Relation Operator return ->(true,false)
console.log("---------Relation operator----------")
var x = 200;
var y = 300;
var z = x>y;
console.log("Greater:",z)

// <less 
var z = x<y;
console.log("less than:",z)


// Greater than or equal 
var z= x>=y;
console.log("greater than equal:",z)

// less than equal
var z=x<=y;
console.log("less than equal:",z)

// Assignment operator
console.log("-----Assignment operator-----")
console.log("--Standard method--")
var n=10;
n=n+3; 
n=n*4;
n--;
n++;
console.log("addition assignment:" +n);
console.log("--Shortand methods--")
var n=10;
n*=4;
n/=6;
n+=20;
console.log("Addition value:" +n);

// Termary operator return to true : false
console.log("------Termary/conditional operator------------")
let stu_name="Babita Dadvanshi";
res=(stu_name=="Babita Dadvanshi" ? "True" : "False")
console.log(res)

let stu_age="20";
res=(stu_age="25" ? "True" : "False")
console.log(res)

// Difference between == and ===
let h=345;
let e="346";
console.log(n==e);
console.log(n===e);











