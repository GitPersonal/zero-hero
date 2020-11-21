# Functions

## FUNCTION DECLATATIONS
<!-- 
`The most basic way of defining a fumction in Javascript is by using function declarations.`

`Every function declaration starts with a mandatory` **`function`** `keyword, followed by a mandatory function name and a list of optional comma-seperated parameter names enclosed within mandatory parentheses.`

`The function body, which is a potenntially empty list of statements, must be ensloced within an opening and a closing brace.`

`In addition to this form, which every function declaration must satisfy, there's one more condition: A function declaration must be placed on its own, as a separate Javascript statement (but can be contained within another fumction or a block of code; you'll see exactly wht we  mean by that in the next section).`

```javascript
function myFunctionName (myFirstArg, mySecondArg) {
    myStatement1;
    myStatement2;
}
```

```javascript
function samurai(){ // Defines function samurai in the global code
    return "Samurai here";
}


function ninja() { // Defines function ninja in the global code

        function hiddenNinha(){ // Defines function hiddenNinja within the ninja funcion
            return "Ninja here";
        }
    return hiddenNinha();
}

``` -->

<!-- ****************************************
****************************************
**************************************** -->

<!-- 
`DECLARING A FUNCTION`

**To create a function, you give it a name then write the statements needed to achieve its task inside the curly braces. This is known as a function declaration**

You declare a function using the **`function`** keyword

```javascript
function sayHello() {
    document.write('Hello');
}
```

---

`CALLING THE FUNCTION`

Having declared the function, you can then execute all of the statements between its curly braces with just one line of code.
This is known as **`calling the function`**

```javascript
sayHello();
```
1. The function can store the instructins for a specific task.
2. When you need the script to perform that task, you call the function.
3. The function executed the code in that code block.
4. When it has finished, the code continues to run from the point where it was initially called.

---

`GETTING A SINGLE VALUE OUT OF A FUNCTION`

```javascript
function calculateArea(width, height) {
    var area = width * height;
    return area;
}

var wallOne = calculateArea(3,5);
var wallTwo = calculateArea(8,5);
```

---

`GETTING MULTIPLE VALUES OUT OF A FUNCTION`

Functions can return more than one value using an array.

For ecample, this function calculates the area and volume of a box.

```javascript
    function getSize(width, height, depth) {
        var area = width * height;
        var volume = width * height * depth;
        var sizes = [area, volume];
        return sizes;
    }

    var areaOne = getSize(3, 2, 3)[0];
    var areaTwo = getSize(3, 2, 3)[1];
```

---

`FUNCTION EXPRESSIONS`

If you put a function where the interpreter would expect to see an expression, then it is treated as an expression, and it is knnown as a **`function expression`**.

```javascript
var area = function(width, height) {
    return width * height;
};
```

---
--- -->


## `Function Declaration`

```javascript
function sayHello() { // declare the function
    console.log("Hello");
}

sayHello(); // Call the function
```

---

## `Function Expression`

```javascript 
function sayBye() {
    console.log("Bye");
}

sayBye();
```

example

```javascript
function sing() {
    console.log("AHHH");
    console.log("TEEE");
}
```

`adding more would begin to repeat itself and more code.
`
```javascript

function sing2() {
    console.log("Laaaa dee daa");
    console.log("laaaa");
}
sing2();
```

`To clean it up`

```javascript

function sing(song) {
    console.log(song);
}
sing("Laaaa dee daa");
sing("Blah Blah");
sing("Yes");
```

---

example:

## `return`
```javascript

function multiply(a, b) {
    return a * b;
}
multiply(5, 10); // 50
```





