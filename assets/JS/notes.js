/* ===== JavaScript Notes ===== */

// JavaScript is case sensetiv!! 
/* ============================================== */

/* // ====== VARIABLES ======    "let","const" and "var" (use "const" by default)

    "let": is used to declare a changable variable (ressasign, mutate value) */
    let age = 30;
    age = 31;
    
    //  "const": a variable declared with const cannot be changed (immutable variable). You cannot declare empty const values.
    const birthyear = 1991;
    
    //  "var": the old (pre ES6) way to write variables. Do not use.    
    var job = "programmer";
    job = "teacher";
    

/* === VARIABLE NAME CONVENTIONS ===

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



/* // ====== DATA TYPES ======

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




/* ====== OPERATORS ====== allows to transform or combine values (as well as do other things)

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



// ====== STRINGS ======
// ==== String Methods ====
const textOne = "Wo wohnt Stefan?";
console.log(textOne);

// == indexOF ==
// string.indexOF positions Angabe start counting at 0 

const wohntIndex = textOne.indexOf("wohnt");
console.log(wohntIndex); // 3

const stefanIndex = textOne.indexOf("Stefan");
console.log(stefanIndex); // 9

const result = textOne.indexOf("hallo")
console.log(result); // -1 means text does not contain this string.

// == includes ==
// string.includes checks if a string contains another string 
console.log(textOne.includes("Stefan")); // true

// == slice ==
// string.slice can cut a string and store it in a different one. The original string stays untouched.
const spring = "Der Frühling ist nah!";

console.log(spring.slice(0, 3)); // Cut the first 3 characters 
console.log(spring.slice(4,12)); // cut the word Frühling

console.log(spring);

console.log(spring.slice(-1)); // Cuts the last character of a string
console.log(spring.slice(0)); // Cuts the entire string

// == replace ==
// string.replace replaces first occurence of a string with a new one
console.log(spring.replace("nah", "fern"));

// string.replaceAll replaces all occurences of a string with a new one
console.log(spring.replaceAll("nah", "fern"));

// == toUpperCase ==
// string.toUpperCase converts all letters to uppercase
const lowText = "hier ist alles klein geschrieben.";
console.log(lowText.toUpperCase());

// == toLowerCase ==
// string.toLowerCase converts all letters to lowercase
const upText = "HieR IsT AlLEs DoOF.";
console.log(upText.toLowerCase());
console.log(upText); // original string will not be changed 

// == length ==
// string.length returns the length of a string
const username = "SuperUser5000";
console.log(username.length);


/* === String Concatination === You can use the "+" operator to add strings to each other  */

const firstName = "Karl Werner";
const lastName = "Kieffer";
console.log(firstName + lastName);

let mwst = 1.19;
let macBook = 1000;

// mein MacBook hat ... gekostet
console.log("Mein MacBook hat " + (macBook * mwst) + " gekostet!" );

// Use an empty string " " to add a space 
console.log(firstName + " " + lastName);

/* === TEMPLATE LITERALS === : a template literal can assamble multiple pices into one final string
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



/* === TYPE CONVERSION AND TYPE COERCION === :  You can covert values by using functions  like 'Number' or 'String. 
    These have to start with a capiatal letter! You can only convert Numbers, Strings and Booleans. */

// == type conversion ==
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Leo'));
console.log(typeof NaN);
console.log(String(23), 23);

// == type coercion == : JavaScript automatically coverts the value using the operator
console.log('I am ' + 23 + ' years old');
console.log('23'- '10' - 3);
console.log('23' / "2");

let n = '1' + 1;  // '11' (the number 1 in converted and added to the String '1')
n=n - 1
console.log(n)
/* ============================================== */



// ====== OUTPUT METHODS ======

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


// ====== Accessing HTML emelents through JS ======

// pulling element from HTML to JS and storing the ID headlineOne in a variable
let headlineOne = document.getElementById("headlineOne"); 
console.log(headlineOne);

// pulling multiple Elements by Classname
let headlineByClassname = document.getElementsByClassName("headlineByClassname")
console.log(headlineByClassname);

// Changing an HTML element

// == innerHTML == :
headlineOne.innerHTML = " Tag 2"; // change string
headlineOne.innerHTML += " Tag 2"; // add string 
headlineOne.innerHTML += "<span> Tag 2</span>"; // add span tag

let headlineTwo = document.getElementById("headlineTwo");

//styling with variable.style.  (JS styles override CSS styles)
headlineTwo.style.backgroundColor = "blue";
headlineTwo.style.color = "red";

// == Query Selector == --> access HTML element and store it in a variable. Will look at all elements but by default selectthe first element
let headlineThree = document.querySelector("h3"); 
console.log(headlineThree);

let headlineFour = document.querySelector("h3:nth-of-type(3)")
console.log(headlineFour);

headlineFour.style.fontSize = "4rem"
/* ============================================== */



/* ====== FUNCTIONS ====== */

// store HTML element in variables. define variables at the start of the document
let headline = document.getElementById("headline");

// function is defined with the word "function" and contains a function name
function welcome() {
    headline.innerHTML += " liebe Teilnehmer!"
    headline.style.color = "green"
}

// functions have to be called on 
welcome();

// function with parameters 
// parameters are placeholder which can be filled with user input --> pretty much local variables 
function functionName(parameter1, parameter2) {
    let result = parameter1 + parameter2
    console.log(result);
}

// call 
functionName(3, 9)

// onClick function
let container = document.querySelector("section")

function changeColor() {
    container.style.backgroundColor = "blue"
}

/* === Acessing Data in a HTML form through a JS function === */

// get Form Elements and store them in variables
const aName = document.getElementById("aName");
const myAge = document.getElementById("age");
const range = document.getElementById("range");
const checkbox = document.getElementById("checkbox");
const birthday = document.getElementById("birthday");


//  Acessing data input of an HTML form through a JS function and storing them in a variable
function formInput() {
    const userInput = "Name: " + aName.value + " Alter: " + myAge.value + " Range: " + range.value + " Checkbox: " + checkbox.checked + " Geburtstag: " + birthday.value// to access the value in the form define a new variable in the funtion to store the value in
    console.log(userInput);
}

// Classlist 
const text = document.getElementById("text");

function addStyles() { 
    text.classList.add("colorFontSize") // add class "colorFontSize" to the element with id "text"
}

function removeStyles() {
    text.classList.remove("colorFontSize") // remove class "colorFontSize" from the element with id "text"
}

// Eventlistener and toggle

const button = document.querySelector("button:nth-of-type(3)")

/* button.addEventListener("click", toggleStyles) // on click execute function toggleStyles()


function toggleStyles() {
    text.classList.toggle("colorFontSize") 
} */

// short version
button.addEventListener("click", function() {  // Add a click event to a <button> element element.addEventListener(event, function, useCapture)
    text.classList.toggle("colorFontSize")  // on click of button toggle class colorFontSize from the element with id "text"
})

const darkMode = document.querySelector("#darkMode"); // define variable darkMode by selecting the element with id "darkMode"

darkMode.addEventListener("click", function() { // on click of button darkMode toggle CSS class .darkMode
    document.body.classList.toggle("darkMode");
})
/* ============================================== */



/* ====== TAKING DECISIONS ======   */

// === if/else control structure === if / else statements: can take decsions using if else statements 
const currentAge = 19;

if(age >= 18) { // condition: any code that returns a true or false value
    console.log('Sarah can start driving license 🚗');}  // if condition is true, block will be executed
        
         else { // if condition is fals the else block will be executed (optional)
            const yearsleft = 18 - currentAge;
            console.log(`Sahra is to young. Wait another ${yearsleft} years :`);
        }


// if, else, else if
const trainer = "Sergio";

if (trainer === "Stefan") { // check this contidtion to see if the trainer is "Stefan"
    console.log("Das ist ein Trainer");
} else if (trainer === "Manuel") { // check this condtion to see if the trainer is "Manuel"
    console.log("Das ist ein Trainer");
} else { // if the trainer is not "Stefan" or "Manuel" log the message "Das ist dann wohl der Chef"
    console.log("Das ist dann wohl der Chef");
}


// logical operators
if (trainer === "Stefan" || trainer === "Manuel") {
    console.log("Das sind unsere Trainer");
} else {
    console.log("Das ist ein anderer Mitarbeite");
}

// what season is it?
const month = 12

if (month === 4) {
    console.log("Frühling");
} else if (month === 8) {
    console.log("Sommer");
} else if (month === 10) {
    console.log("Dezember");
} else {
    console.log("Winter");
}

if (month > 3 && month <= 6) {
    console.log("Frühling");
} else if (month > 6 && month <= 9) {
    console.log("Sommer");
} else if (month > 9 && month <= 12) {
    console.log("Herbst");
} else {
    console.log("Winter");
}

// Alterspruefung and displaying the result on the page
let alter = document.getElementById("#alterspruefung");
const ageOutput = document.querySelector("#ageOutput");

function ageCheck() {
    const input = alter.value;
    console.log(input);
}


if (input >= 18) {
    ageOutput.innerHTML = "Du bist Volljährig!";
} else if (input < 18 && input >= 0) {
    ageOutput.innerHTML = "Du bist nicht Volljährig!";
} else {
    ageOutput.innerHTML = "Deine Angabe ist ungültig!";
}

function ageCheck(){
    const input = alter.value
    let output = " ";

if (input >= 18) {  
    output = "Du bist volljährig";
} else if (input < 18 && input >= 0){
    output = "Du bist nicht volljahrig";
} else {
    output = "Deine Eingabe ist unguültig";
}}

// === SWITCH Control Structure ===  Switch check if condition is true and then executes code block 

    /* switch(expression) {
        case x: 
            code block to be executed
            break
        case y: 
            code block to be executed
        default:
            code block to be executed */

function getNameOfMonth() {
    const input = Number(numberOfMonth.value);
    console.log(input);
    
    let output = "";
    
    switch (input) { // check for the value of input
        case 1:     // if input is 1
            output = "Januar";
            break
        case 2:     // if input is 2 
            output = "Februar";
            break
        case 3:     // if input is 3
            output = "March";
            break
        default:    // everything else 
            output = "and so on";
    }
    
    document.getElementById("outputField").innerHTML = output
    }
    