# JavaScript Notes

### `JAVASCRIPT TYPES`
---
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Object


### `JAVASCRIPT COMPARISONS`

---

```javascript
 !==
 ===
 >=
 <=
 >
 <
```

### `JAVASCRIPT COMPARISONS`


```javascript
var

let 

const

```

---  

### `CONTROL FLOW`

**`if statement`**

```javascript
    let name = "Billy";

    if(name === "Billy") {
        alert("hi Billy");
    }
// Hi Billy

```

---
**`else`**

```javascript
    let name = "Juan";

    if(name === "Juan") {
        alert("Hi Juan");
    } else {
        alert("I don't know you");
    }
// "Hi Juan"

```

---

**`else if`**

```javascript
    let name = "Maria";

    if(name === "Nate") {
        alert("Hi Maria");
    } else if (name === "Juan") {
        alert("Hi Juan");
    } else {
        alert("I don't know");
    }

// "I don't know you"
```


```javascript
    if(name === "Bob" || name === "Ann") {
        alert("Hi Bob or Ann");
    }
     // Hi Bob or Ann
```

```javascript
    if(name === "Bob" && name === "Ann") {
        alert("Hi Bob or Ann");
    }
    // Hi Bob or Ann
```

```javascript
   var firstName = "Bob";
   var lastName = "Smith";

   if(firstName === "Bob" && lastName === "Smith") {
        alert("Hi Bob Smith");
    }
    // Hi Bob Smith
```

```javascript
var name = "Billy";

    if(!(name === "Bob")) {
        alert("Hi Bob");
    }
    // Hi Bob
```

---

### `JAVASCRIPT LOGICAL OPERATORS`

`|| --> or`

`&& --> and`

`!  --> not`

---


### `DATA STRUCTURES: ARRAYS`

```javascript
var list = ["tiger","cat","bear","bird"];
console.log(list[1]); // cat
```

---
---
`array within an array`

```javascript
    var list = [
        ["tiger","cat","bear","bird"]
    ];
    console.log(list[0][2]);
    // bear
```

`Array Methods`

#### **`remove method`**

```javascript
var list = ["tiger","cat","bear","bird"];
list.shift(); // removes "tiger" from the beginning. Shifts to the left
list.pop();   // remover "bird" at the end of the array

```

#### **`add method`**

```javascript
    list.push("elephant"); // adds it to the end of the list
    list.concat(["bear","deer"]);
```

```javascript
    var myList = ["cat", "bear", "elephant", "bear", "deer"];
    var myNewList = myList.concat["monkey"];

    myList // ["cat", "bear", "elephant", "bear", "deer"];
    myNewList // ["cat", "bear", "elephant", "bear", "deer", "monkey"];
```

---
---

### `DATA STRUCTURES: OBJECTS`


`properties and values`

```javascript
    var user = {
        name: "John", //properties and values
        age: 34,
        hobby: "Soccer",
        isMarried: false
    }

```
'How to grab properties'

use the dot notation .


```javascript
    var user = {
        name: "John", //properties and values
        age: 34,
        hobby: "Soccer",
        isMarried: false
    }

    example: user.name // "John"    
    
```

___
___

```javascript
!false --> true
!true  --> false
```







---

```javascript
Prompt makes numbers strings when added to prompt window.

To convert it the string to a number use **`Number()`**.

var first = prompt("Enter first number');
var second = prompt("Enter second number');

Number(first) + Number(second);

var sum = Number(first) + Number(second);

alert("The sum is " + sum);
```

when using **`===`** to compare a string to a number you'll get an error when using prompt because prompt pulls it in as a string.

 
Use Number() to convert that string to a number to compare when using **`===`**
---

`true = 1`

`false = 0`

--- 

```javascript
`10 + "34" = "1034" ---> 10 is converted to a string`

`10 - "3" = 7 ---> Javascript thinks "3" is being subtracted from 10 so it makes it a number`

`5 + "34" = "534"`

`5 - "4" = 1`

`10 % 5 = 0`

`5 % 10 = 5`

`"Java" + "Script" = "JavaScript"`

`" " + " " = " "`

`" " + 0 = " 0"`

`true + true = 2`

`true + false = 1`

`false + true = 1`

`false - true = -1`

`3 - 4 = -1`

`"Bob" - "bill" = NaN`

```
---
