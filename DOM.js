// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// document.getElementsByTagName("h1");
console.log(document.getElementsByTagName("h1")); // [h1]

// document.getElementsByClassName("second");
console.log(document.getElementsByClassName("second"));  // [p.second]

// document.getElementById("first");
console.log(document.getElementById("first")); // <p id=​"first">​Get it done today​</p>​


// document.getElementsByClassName("second")[0];
console.log(document.getElementsByClassName("second")[0]); // <p id=​"first">​Get it done today​</p>​


document.querySelector("h1");
console.log(document.querySelector("h1")); // <h1>​Shopping List​</h1>

document.querySelector("li");
console.log(document.querySelector("li")); //  <li random=​"23">​…​</li>​

document.querySelectorAll("li");
console.log(document.querySelectorAll("li")); // NodeList(6) [li, li, li, li, li, li]

