//    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// **************************** FUNCTIONS ****************************
//    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// function myFunctionName (myFirstArg, mySecondArg) {
//     myStatement1;
//     myStatement2;
// }


// function samurai(){ // Defines function samurai in the global code
//     return "Samurai here";
// }


// function ninja() { // Defines function ninja in the global code


//     function hiddenNinha(){ // Defines function hiddenNinja within the ninja funcion
//         return "Ninja here";
//     }
//     return hiddenNinha();
// }






// let samuraiFunction = samurai();
// let ninjaFunction = ninja();


// document.write(samuraiFunction);

// document.write(ninjaFunction);

// ------------------------------------------
// ------------------------------------------
var msg = "Cool to change from javascript";

function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage();
