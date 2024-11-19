// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2 = ", cond1 && cond2)


// let age = 15;

// if (age > 18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
    
// }


// let mode = "dark"
// let color;

// if (mode === "dark"){
//     color = "black";
// }else if (mode == "blue"){
//     color = "blue"
// }else if (mode == "red"){
//     color = "red"
// }else{
//     color = "white";
// }

// console.log(color);
// if (mode  === "dark") console.log(mode);


// let age = 14;

// let result = age  >= 18 ? "adult" : "not adult"

// console.log(result);

// alert("Hello");
// prompt("hello")

// let num = prompt("Enter a number")

// if (num % 5 === 0){
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num, "is not ");
    
// }

function onePlusAvg(x, y){
    return 1 + (x + y) / 2
}

const sum = (p,q) => {
    return p + q
}

let a = 1;
let b = 12;
let c = 123;


console.log("One plus Avarage of a & b is ", onePlusAvg(a, b));
console.log("One plus Avarage of b & c is ", onePlusAvg(b, c));
console.log("One plus Avarage of c & a is ", onePlusAvg(c, a));

console.log(sum(9,33))


const hello = ( ) => {
    console.log("Hii! How are you?"); 
}
hello()