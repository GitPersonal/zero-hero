// let firstName = "Billy";
// let lastName = "Smith";

// // if (firstName === "Billy" && lastName === "Smith") {
// //     alert("Hi Bob Smith");
// // }


// if (!(name === "Bob")) {
//     alert("Hi Bob");
// }

// ******************** ********************
//              keyless car 
// ******************** ********************


// let age = prompt("What is your age?");


// if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(age) == 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
// } 
// else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//     // console.log("Powering On. Enjoy the ride!")
// }

// ******************** ********************
//              function
// ******************** ********************

// ******************** function declaration ******************** 
    // function sayHello() {
    //     console.log("Hello");
    // }


    // sayHello();

// ******************** function expression ********************

// var sayBye = function() {
//     console.log("Bye");
// }

// sayBye();



// ******************** anonymous funtion ********************

// function () {
//     console.log("Bye");
// }

// ******************** function example ********************

// 1.
// function sing(){
//     console.log("AHHHHH");
//     console.log("TEEEEE");
// }

// sing();

// 2.
// function sing(song){
//     console.log(song);
// }

// sing("A day in a life");
// sing("Hey Jude");
// sing("Come together");



// 3.
//  function multiply(a, b) {
//      return a * b;
//  }

//  let answer =  multiply(5, 10);
// console.log(answer);




// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        // keyless car EVEN BETTER!
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// function checkDriverAge(){
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//          alert("Sorry, you are too yound to drive this car. Powering off");   
//     } else if (Number(age) > 18){
//         alert("Powering On. Enjoy the ride!");
//     } else if(Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }


// var checkDriverAge2 = function() {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off"); 
//    } else if (Number(age) > 18){
//         alert("Powering On. Enjoy the ride!");
//    } else if(Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//    }
// }

// return 
// var checkDriverAge = function(age) {
//     if (Number(age) < 18) {
//        return "Sorry, you are too yound to drive this car. Powering off";   
//    } else if (Number(age) > 18){
//        return "Powering On. Enjoy the ride!";
//    } else if(Number(age) === 18) {
//       return "Congratulations on your first year of driving. Enjoy the ride!";
//    }
// }

// checkDriverAge();
// checkDriverAge2();




// var first = prompt("Enter first Number");
// var second = prompt("Enter second Number");

// var fullAnswer = Number(first) + Number(second);
// alert("The answer is " + fullAnswer);

// var a = 34;
// var b = 21;

// console.log(a);
// a = 2;
// console.log(a);

// console.log(b);

// var sum = a + b;
// console.log("The sum is " + sum);


// ********************************************************************************
// **************** Exercise 4: Make A Keyless Car ****************
// ********************************************************************************

// var age = 18;

// var youAge = prompt("What is your age?");

// if(Number(youAge) < age) {
//     document.write("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(youAge) === age){
//     document.write("Congratulations on your first year of driving. Enjoy the ride!");
// } else{
//     document.write("Powering On. Enjoy the ride!");
// }
// console.log(typeof(Number(youAge)));




// var youAge = prompt("What is your age?");

// if(Number(youAge) < 18) {
//     document.write("Sorry, you are too young to drive this car. Powering off");
// } else if (Number(youAge) === 18){
//     document.write("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (Number(youAge) > 18) {
//     document.write("Powering On. Enjoy the ride!");
// }


// ********************************************************************************
// **************** Exercise 5: Make A Keyless Car Even Better ****************
// ********************************************************************************

// ***** Function Declaration *****
// var youAge = prompt("What is your age?");

// function checkDriverAge() {
//     if(Number(youAge) < 18) {
//         document.write("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(youAge) === 18){
//         document.write("Congratulations on your first year of driving. Enjoy the ride!");
//     } else if (Number(youAge) > 18) {
//         document.write("Powering On. Enjoy the ride!");
//     }
// }

// checkDriverAge();



// ***** Function Expression *****
// var youAge = 18;

// var checkDriverAge2 = function(youAge) {
//     if(Number(youAge) < 18) {
//         console.log("Sorry, you are too young to drive this car. Powering off");
//     } else if (Number(youAge) === 18){
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     } else if (Number(youAge) > 18) {
//         console.log("Powering On. Enjoy the ride!");
//     }
// }

// console.log(checkDriverAge2(100));


// ********************************************************************************
// **************** Exercise 5: Make A Keyless Car Even Better ****************
// ********************************************************************************


var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array);

// 1. Remove the Banana from the array
array.shift();
console.log(array);

// 2. Sort the array in order.
array.sort();
console.log(array);

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// 4. Remove "Apples" from the array.
array.shift();
console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);

// using this array,
var array2 = [
    "Banana", 
    ["Apples", 
        ["Oranges"], 
    "Blueberries"]
];
// access "Oranges".
// array2[1][1][1]
console.log(array2[1][1][0]); // Oranges 




