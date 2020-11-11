// var button = document.getElementsByTagName("button")[0];

// button.addEventListener('click', function() {
//     console.log("Click");
// });


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
 
// button.addEventListener("click", function() {
//     if(input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value)); // add list item to end of list
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// input.addEventListener("keypress", function(event) {
    
//     if(input.value.length > 0 && event.keyCode === 13) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value)); // add list item to end of list
//         ul.appendChild(li);
//         input.value = "";
//     }
// })


 
// ####################################################################################################
//              ######################### Refactor Code #########################
// #################################################################################################### 

function inputLength(){
    return input.value.length;
}
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value)); // add list item to end of list
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
        if(inputLength() > 0) {
            createListElement();
        }
}

function addListAfterKeypress(event) {
        if(inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
    
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// #################################################################################################### 
// #################################################################################################### 