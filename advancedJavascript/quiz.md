# Advanced Javasvript with Asim Hussain
The course is presented as a number of interview questions.
Below are the questions and then answers, asked by Asim throughout the course, to test progress.

#### For the following questions, it is important to take into account whether the `"use strict";` keyword has been used or not.


## Question 1:
#### What will the below code print out?
```
"use strict";

var a = 1;
var b = {};
function foo(x, y) {
  x = 2;
y.moo = 3;
}
 
foo(a, b);
console.log("a = " + a + "; b = " + JSON.stringify(b));
```
[Answer](#q1)

## Question 2:
#### What will the below code print out?
```
var asimsVar = 3
asimVar = 1
console.log(asimVar)
```
[Answer](#q2)

## Question 3:
#### What will the below code print out?
```
"use strict";

var asimsVar = 3;
asimVar = 1;
console.log(asimVar);
```
[Answer](#q3)

## Question 4:
#### What will the below code print out?
```
if (undefined == null) {
  console.log("Moo")
} else {
  console.log("Zoo")
}
```
[Answer](#q4)

## Question 5:
#### What will the below code print out?
```
console.log(typeof(null))
```
[Answer](#q5)

## Question 6:
#### What will the below code print out?
```
if (undefined === null) {
  console.log("Moo")
} else {
  console.log("Zoo")
}
```
[Answer](#q6)

## Question 7:
#### What will the below code print out?
```
console.log(NaN == "1")
```
[Answer](#q7)

## Question 8
#### What happens when you execute the code below
```
a = 1
```
[Answer](#q8)

## Question 9:
#### What will the below code print out?
```
"use strict"

var name = 'igloo'
var code = "var name = 'asim';"
eval(code)
console.log(name)
```
[Answer](#q9)

## Question 10:
#### What will this code print?
```
(function(){
  var a = 3
})()
console.log("a defined? " + (typeof a !== 'undefined'))
```
[Answer](#q10)

## Question 11:
#### What will this code print?
```
console.log(moo)
var moo = function() {
  console.log("loo")
}
```
[Answer](#q11)

## Question 12:
#### Consider the following code snippet:
```
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button')
  btn.appendChild(document.createTextNode('Button ' + i))
  btn.addEventListener('click', function() {
    console.log(i)
  })
  document.body.appendChild(btn)
}
```
#### What gets logged to the console when the user clicks on “Button 4”?
[Answer](#q12)

## Question 13:
#### What will the following code output to the console?
```
console.log((function f(n){
  return ((n > 1) ? n * f(n-1) : n)
})(4))
```
[Answer](#q13)

## Question 14:
#### Consider the code snippet below. What will the console output be?
```
(function(x) {
  return (function(y) {
    console.log(x)
  })(2)
})(1)
```
[Answer](#q14)

## Question 15:
#### Consider the code snippet below. What will the console output?
```
function loo() {
  var goo = 1
  moo()
}
function moo() {
  console.log(goo)
}
loo()
```
[Answer](#q15)

## Question 16:
#### What will be the output of first console.log in the code below?
```
var salary = "1000$"
(function () {
  console.log("Original salary was " + salary)
  var salary = "5000$"
  console.log("My New Salary " + salary)
})()
```
[Answer](#q16)

## Question 17:
#### What does the below code print out?
```
console.log(this)
```
[Answer](#q17)

## Question 18:
#### What does the below code print out?
```
"use strict";

(function () {
  console.log(this);
})();
```
[Answer](#q18)

## Question 19:
#### What does the below code print out?
```
"use strict";

var animal = {
  kind: "Cow",
  which: function () {
    console.log(this.kind);
  }
};
animal.which();
```
[Answer](#q19)

## Question 20:
#### What does the below code print out?
```
"use strict";
 
var animal = {
  kind: "Cow",
  which: function () {
    console.log(this.kind);
  }
};
var animalFunc = animal.which;
animalFunc();
```
[Answer](#q20)

## Question 21:
#### What does the below code print out?
```
"use strict";
 
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello("Hussain");
```
[Answer](#q21)

## Question 22:
#### What does the below code print out?
```
"use strict";

function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello.call("Asim", "Hussain");
```
[Answer](#q22)

## Question 23:
#### What does the below code print out?
```
"use strict";

function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello.apply("Asim", ["Hussain"]);
```
[Answer](#q23)

## Question 24:
#### What does the below code print out?
```
"use strict";

function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Asim");
sayHello("Hussain");
```
[Answer](#q24)

## Question 25:
#### What does the below code print out?
```
"use strict";

var sayHello = function(last_name) {
  console.log("Hello " + this + " " + last_name);
}.bind("Asim");
sayHello("Hussain");
```
[Answer](#q25)

## Question 26:
#### What does the below code print out?
```
var device = {
  kind: "music player"
}
var product = Object.create(device)
console.log(product.kind)
```
[Answer](#q26)

## Question 27:
#### How would you create an instance of this pseudo-class using the constructor pattern?
```
function Device(kind) {
  this.kind = kind
}

var product = new Device("music player")
var product = Device("music player")
var product = Device.call("music player")
```
[Answer](#q27)

## Question 28:
#### What would the below code print out?
```
function Device(kind) {
  this.kind = kind
  this.printKind = function () {
    console.log(this.kind)
  }
}

var product = new Device("music player")
product.printKind()
```
[Answer](#q28)

## Question 29:
#### What would the below code print out?
```
function Device(kind) {
  this.kind = kind
  this.printKind = function () {
    console.log(kind)
  }
}

var product = new Device("music player")
product.kind = "radio"
product.printKind()
```
[Answer](#q29)

## Question 30:
#### What would the below code print out?
```
function Device(kind) {
  this.kind = kind
}

Device.prototype.printKind = function () {
  console.log(this.kind)
}

var product = new Device("music player")
product.printKind()
```
[Answer](#q30)

## Question 31:
#### We want AppleProduct to inherit from Device. Whats the best method of setting the kind property?
```
function Device(kind) {
  this.kind = kind
}

function AppleProduct(name, kind) {
  this.name = name
}

//A)
function AppleProduct(name, kind) {
  this.name = name
  this.kind = kind
}

//B)
function AppleProduct(name, kind) {
  this.name = name
  Device.call(this, kind)
}

//C)
function AppleProduct(name, kind) {
  this.name = name
  Device(kind)
}
```
[Answer](#q31)

## Question 32:
#### We want AppleProduct to inherit from Device. How do we make available to AppleProduct the functions created for Device?
```
function Device(kind) {
  this.kind = kind
}

Device.prototype.printKind = function () {
  console.log(this.kind)
}

function AppleProduct(name, kind) {
  this.name = name
  Device.call(this, kind)
}

// A
AppleProduct.prototype = Object.create(Device.prototype);
// B
AppleProduct.prototype.__proto__ = Device.prototype;
// C
Nothing, the functions are already available!
```
[Answer](#q32)

## Question 33:
#### What does the below code print out?
```
var Device = {
  kind: "Music Player"
}

var AppleProduct = Object.create(Device, {
  name: "iPod"
})

var purchase = Object.create(AppleProduct)
console.log(purchase.name)
```
[Answer](#q33)

## Question 34:
#### What does CORS stand for?
[Answer](#q34)

## Question 35:
#### What header is always sent by the browser on a CORS request?
[Answer](#q35)

## Question 36:
#### What header needs the be present on a CORS response to a GET request for the browser to allow a request to pass through?
[Answer](#q36)

## Question 37:
#### If we were making a POST CORS request, what HTTP request does the browser send first?
[Answer](#q37)

## Question 38:
#### When we make a POST CORS request, the response to the pre-flight request needs to contain a header with a specific value.
#### Which of the below options would be an acceptable response for the browser to allow the POST request?
[Answer](#q38)

## Question 39:
#### Does event capturing happen first or is it event bubbling?
[Answer](#q39)

## Question 40:
#### Does this code add an event listener to the event capturing phase or the bubbling phase?
```
(function () {
  var y = i
  items[y].addEventListener("click", function (event) {
    console.log(items[y], event)
  }, true)
})()
```
[Answer](#q40)

## Question 41:
#### Does the below code add an event listener on the event capturing phase or the event bubbling phase?
```
(function () {
  var y = i
  items[y].addEventListener("click", function (event) {
    console.log(items[y], event)
  })
})()
```
[Answer](#q41)

## Question 42:
#### Calling the prevent default function in an event listener stops the next event listener from being called?
[Answer](#q42)

## Question 43:
#### If we clicked a checkbox, calling preventDefault() from one of the event listeners would stop the checkbox from having the tick applied to it.
[Answer](#q43)

## Question 44:
#### 
[Answer](#q44)

## Answers
#### Q1:
`a = 1; b = {'moo':3}`

"a" is passed by value so updates to "a" in function foo will NOT be visible outside of the function foo.

#### Q2:
`1`

In NON-strict mode we can use any variable even if it's hasn't been defined with var.

#### Q3:
`it throws an error`

In strict mode we can't use variables that have not been declared with var first, check the code closely you will see that "asimVar" is spelt differently to "asimsVar".

#### Q4:
`Moo`

They are both equal to each other.

#### Q5:
`"object"`

It prints "object" but the real type is actually "null", javascript prints "object" out in error but it's too late to fix!

#### Q6:
`Zoo`

undefined and null are not the same types so === will return false.

#### Q7:
`false`

NaN equal to ANYTHING is always false, even when compared to itself.

#### Q8:
`It creates a global variable called "a"`

The file is not in use strict mode so a will be automatically created as a global variable.

#### Q9:
`igloo`

Even though we redefine name when we eval(code) since we are un use strict mode the effects are not leaked out of the eval block.

#### Q10:
`false`

Since "a" is declared inside a function, it isn't visible outside the function therefore it's undefined.

#### Q11:
`undefined`

Because of variable hoisting the var moo is moved to the top of the scope, and since it's just declared (var moo;) it's default value is undefined.

#### Q12:
`5`

By the time the function is called, even though it's kept a reference to the "i" variable in it's closure, the i variable at that point is actually 5.

#### Q13:
`24`

This is an IIFE that actually performs a factorial, so 4! which is 24.

#### Q14:
`1`

Javascript searches the functions outer scope and in there it will find x and the value of x is 1 since that is what was passed in through the IIFE.

#### Q15:
`Uncaught ReferenceError: goo is not defined`

The scope chain lookup rules follow how the code is written on the page. The moo function doesn't see the goo variable either in it's local or outer global scope so the javascript engine throws an error.

#### Q16:
`undefined`

The var salary in the IIFE is hoisted to the top of the function scope, so that means that salary is set to undefined by the time the first console.log is run.

#### Q17:
`The global object (window in a browser)`

The default value for this is the global object.

#### Q18:
`undefined`

In use strict mode the default value of this is undefined.

#### Q19:
`Cow`

"this" in this situation points to the animal object itself.

#### Q20:
`It throws an error`

Because we are in use strict mode and not calling the function directly from the animal object, this is now undefined.

#### Q21:
`Hello undefined Hussain`

In strict mode this defaults to undefined.

#### Q22:
`Hello Asim Hussain`

The first param to call is used as the this variable and the second and onwards are the params to the function being called.

#### Q23:
`Hello Asim Hussain`

The first param to the apply function is used as the "this" variable, the array is then used for each of the params to the function being called.

#### Q24:
`Uncaught SyntaxError: Unexpected token`

bind can only be used on functions after they have been created and assigned to a variable

#### Q25:
`Hello Asim Hussain`

bind can be used on function expressions to fix the value of this regardless of how the function is called later on.

#### Q26:
`music player`

Javascript searches up the prototype chain to find the kind property on the device object.

#### Q27:
`var product = new Device("music player")`

The new keyword with is used with a function constructor to generate an instance of a pseudo-class.

#### Q28:
`music player`

#### Q29:
`music player`

The printKind function is a closure, it refers to the kind argument passed into the function constructor (and not this.kind).

#### Q30:
`music player`

Javascript looks for the printKind function and finds it on the prototype of the product object.

#### Q31:
`B`

We "re-use" the Device function constructor.

#### Q32:
`A`

We use the Object.create function.

#### Q33:
`Uncaught TypeErrorL Property description must be an object: iPod`

The second param to the Object.create function is an object literal that described the properties we want to create on the object. So the value should be something like {name: {value: 'iPod'}} and not {name: 'iPod'}.

#### Q34:
`Cross Origin Resource Sharing`

#### Q35:
`Origin`

#### Q36:
`Acess-Control-Allow-Origin`

If this header isn't present it won't allow the request to reach your code.

#### Q37:
`OPTIONS`

The browser sends what's called a "pre-flight" options request first to check to see if it can send a POST request later on.

#### Q38:
`Access-Control-Request-Method: POST, PUT, GET, DELETE`

It's this header and the value can contain a comma separated list of HTTP VERBS which the server will accept.

#### Q39:
`Event capturing happens first`

#### Q40:
`Event capturing phase`

#### Q41:
`Event bubbling phase`

#### Q42:
`False`

#### Q43:
`True`

Prevent default stops the default action of an element, but doesn't stop the event from propagating.
