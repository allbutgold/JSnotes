/* ===== JavaScript Notes ===== */

// JavaScript is case sensetiv!! 
/* ============================================== */
/* VARIABLE NAME CONVENTIONS:

- first word starting small all follwing starting with capital letter
- cannot start with numbers
- Only allowed Symbols are _ and $ */
let $example = true

/* - Do not start with capital letter
    - Make sure valubale names are descriptive 
    GOOD */
let myFirstJob = "Programmer";
let myCurrentJob = "teacher";
//  BAD
let job1 = "programmer";
let job2 = "teacher";

// Other not used naming Conventions

// PascalCase
let AndereVariable = "PascalCase" // bitte nicht nutzen
console.log(AndereVariable)

// _underscore begins with underscore
let _nope = "not_to_be_used"
console.log(_nope)

// $ begins with $ sign
let $auchNope = "auch nicht benutzen"
console.log($auchNope)

/* ============================================== */

/* === DATA TYPES ===

Number(23): floating point number
    - used for decimals and integers */
let randomAge = 23;

/*  String(Jonas): Sequenz of characters 
    - used for text 
    - alway in parenthese "" */
let realName = "Jonas";

/*  Boolean(true): Logical type that can only be true or false
    - used for taking decisions */
let fullAge = true;

/*  Undefined(children): Value taken by a variable that is not yet defined. "empty value" */
let children;

/*  - Null: Also means "empty value"
    - Symbol: A value which is unique and cannot be changed
    - BigInt: larger integers than the numbertype can hold
    - "typeof"(typeof): can be used to show the type of a value */
console.log(typeof true);

/*  Dynamic Typing: means that we can easily change the type of a value that is hold by a variable 
    defive the value with "let" */
let javascriptIsFun = true;
//  change value 
javascriptIsFun = "YES!";

/* ============================================== */

/* === VARIABLES ===    "let","const" and "var" (use "const" by default)

    "let": is used to declare a changable variable (ressasign, mutate value) */
let age = 30;
age = 31;

//  "const": a variable declared with const cannot be changed (immutable variable). You cannot declare empty const values.
const birthyear = 1991;

//  "var": the old (pre ES6) way to write variables. Do not use.    
var job = "programmer";
job = "teacher";

/* ============================================== */

/* === BASIC OPERATORS === allows to transform or combine values (as well as do other things)

Basic math operators: you can do basic calculations with values and simple math operators */
const now = 2050;
const ageLeo = now - 1994;
const ageJeni = now - 1988;
console.log(ageLeo, ageJeni);

console.log(ageLeo * 2, ageLeo / 10, 2 ** 3);

/*  "*"     means multiply
    "/"     means divide
    "**"    means to the power of */   


// Assignment Operators --> changes the value of a variable:  
let x = 10 + 5;     // 15
x += 10;            // x = x + 10 = 25
x *= 4;             // x = x * 4 = 100
x++;                // x = x + 1 = 101
x--;                // x = x - 1 = 100
console.log(x);


// Comparison Operators: "<, >, >=, <=, ==, ===, !=. !==
console.log(5 > 10); // false 
console.log(ageLeo > ageJeni); // greather than
console.log(ageJeni >= 18); // greater OR equal to 
console.log(3 == 3); // true
console.log("a" == 'a'); // checks if the values are the same
console.log(3 === 3); // checks if value AND datatype is the same
console.log(2 == "3"); // true because the value is the same 
console.log(3 === "3"); // false becaue the dataype is not the same even if the value is right
console.log(1 == true); // number 1 is true so it's true
console.log(0 == false); // number 0 is false so it's true
console.log(1 != 2); // != means value not equal to, so this is true
console.log(1 !== 2); // !== means datatype OR value not equal to so this is true


// Modulo Operator (Restwert)
let a = 5;
let b = 4;
let c = 10;

console.log("Modulo");
console.log(c % a); // 0 (10/5 = 0 = Restwert 0 )
console.log(c % b); // 1 (1)
console.log(20 % 3); // 2 (20 / 3 = 18 = restwert 2)


// OPERATOR PRECEDENCE: defines in which order operators are executed 
const birthyearLeo = now - 1994;
const birthyearJeni = now - 1988;
console.log(now - 1994 > now - 2022);


// Most Operators are executed left-to-right, some right-to-left
let z, y;
z = y = 25 - 10 - 5; // first "-" then "="
console.log(x, y);


// You can execute operations first by putting then into paranthesese
const averageAge = (ageLeo + ageJeni) / 2;
console.log(ageLeo, ageJeni, averageAge);

/* ============================================== */

/* ==== String Concatination ==== You can use the "+" operator to add strings to each other  */
const firstName = "Otto";
const lastName = "Kieffer";
console.log(firstName + lastName);

let mwst = 1.19;
let macBook = 1000;

// mein MacBook hat ... gekostet
console.log("Mein MacBook hat " + (macBook * mwst) + " gekostet!" );

// Use an empty string " " to add a space 
console.log(firstName + " " + lastName);

/* STRINGS AND TEMPLATE LITERALS: a template literal can assamble multiple pices into one final string
    to wirte a template string use backticks `` */

const leo = "I'm " + firstName + ', a ' + (now - birthyear) + ' years old ' + job + '!';
console.log(leo);

const leoNew = `I'm ${firstName},a ${now - birthyear} year old ${job}!`;
console.log(leoNew);

// Template Literals can also be used for any reguolar string
console.log(`just a regular string...`)

// before ES6 Breaks in a text had to be written with /n/
console.log('String with \n\
multiple \n\
lines');

// with Template Literals you can simply hit enter
console.log(`String 
multiple`)

// use ${} to write Expressions in a Template Literal
const myName = 'Leo';
const occupation = 'student';
const yearOfBirth = 1994;
const year = 2037;

const leoBrandNew = `I'm ${myName},a ${year - yearOfBirth} year old ${occupation}!`;
console.log(leoBrandNew);

/* ============================================== */

/* === TAKING DECISIONS === if / else statements: can take decsions using if else statements   */

// if/else control structure
const Currentge = 19;

if(age >= 18) { // condition: any code that returns a true or false value
    console.log('Sarah can start driving license 🚗');}  // if condition is true, block will be executed
        
         else { // if condition is fals the else block will be executed (optional)
            const yearsleft = 18 - Currentage;
            console.log(`Sahra is to young. Wait another ${yearsleft} years :`);
        }

/* ============================================== */

/* === TYPE CONVERSION AND TYPE COERCION:  You can covert ?values? by using functions like 'Number' or 'String. 
    These have to start with a capiatal letter! You can only conver Numbers, Strings and Booleans. */

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Leo'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion: JavaScript automatically coverts the value using the operator
console.log('I am ' + 23 + ' years old');
console.log('23'- '10' - 3);
console.log('23' / "2");

let n = '1' + 1;  // '11' (the number 1 in converted and added to the String '1')
n=n - 1
console.log(n)

/* ============================================== */

// === OUTPUT METHODS ===

// document.write()
document.write("Hallo zusammen") // use document.write to display something in browser 
document.write("<h2>Das ist schon besser!</h2>") // use document.write to display something in browser but with HTML element that can be manipulated with CSS

// window.alert opens a popup when page is loaded to give an alert.
/*     window.alert("Du hast Gewonnen!!!!!")
*/

/* ============================================== */

// === INPUT METHODS === 

// window.prompt opens a prompt when loading the page where the user can input data. Can be stored in a varibale. 
/*let howOld = window.prompt("wie alt bist du?")
console.log(howOld)
console.log("Der Nuter ist " + howOld + " Jahre alt.") */

// window.prompt opens a prompt that the user can confirm or cancel. Answer can be stored as boolean in a variable.
/*     let confirm = window.confirm("Stimmen sie allem auf unserer Seite zu?")
console.log(confirm) // true */


// Accessing HTML emelents through JS

// pulling element from HTML to JS and storing the ID headlineOne in a variable
let headlineOne = document.getElementById("headlineOne"); 
console.log(headlineOne);

// Changing an HTML element

// innerHTML:
headlineOne.innerHTML += " Tag 2";
headlineOne.innerHTML += "<span> Tag 2</span>";

let headlineTwo = document.getElementById("headlineTwo");

//styling with variable.style.  (JS styles override CSS styles)
headlineTwo.style.backgroundColor = "blue";
headlineTwo.style.color = "red";

// query selector --> access HTML element and store it in a variable. Will look at all elements but by default selectthe first element
let headlineThree = document.querySelector("h3"); 
console.log(headlineThree);

let headlineFour = document.querySelector("h3:nth-of-type(3)")
console.log(headlineFour);

headlineFour.style.fontSize = "4rem"