var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]
var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
]




// for (var i = 0; i < todos.length; i++) {
//     console.log(todos[i] + "!");
// }

// ========================= add ! to todos list ============================

// for (var i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] +  "!"
// } 
//["clean room!", "brush teeth!", "exercise!", "study javascript!", "eat healthy!"]

// ========================= pop() not worling. use a variabe to store in. see next example ==============================
// for (var i = 0; i < todos.length; i++) {
//     todos.pop(); //["clean room", "brush teeth"]
// }

// ======================= pop() with variable save ================================
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     todos.pop(); // []
// }


// var todosLength = todos.length;
// var counterOne = 0;
// var counterOne = 10;

// while(counterOne < 10) {
//     console.log(counterOne);
//     counterOne++; // 1,2,3,4,5,6,7,8,9
// }



// while(counterOne > 0) {
//     console.log(counterOne);
//     counterOne--; // 1,2,3,4,5,6,7,8,9
// }


// var counterTwo = 10;

// do {
//     console.log(counterTwo);
//     counterTwo++;
// } while (counterTwo > 0);



// |||||||||||||||||||||||||||||| forEach ||||||||||||||||||||
// todos.forEach(function(todo, i){
//     console.log(todo ,i);
// });


function logTodos(todo, i){
    console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);


