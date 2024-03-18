console.log("app loaded");
// NOTE primitive Data types 🪨
// Their value is passed, and nothing more

// Boolean
true
false
// TECHNICALLY (1 & 0)**


// String
let double = "Hello"
let single = 'Hola'
let backticks = `The only string that supports newline
characters`

// Number (Js sees all numbers as "floats")
10
  - 8
3.145


// No values types
undefined // the value doesn't exist, (we usually expected it to though)
null // the value isn't here (and we KNEW it wasn't here)
NaN // Not a number

// NOTE reference data types 💾
// The value AND reference to the original are passed


// Objects story KEY : VALUE pairs
let instructor = { name: 'mick', age: 28, handsome: true }

// Array store values by POSITION (index: 0, 1, 2 ,3)
let students = ['Ross', 'Julie', 'Emma', 'Isiah', 'Anne', 'Tara']
let mixed = ['name', 5, false]


let codeworks = {
  spring24: { inSession: true, students: 12, smart: true, catchphrase: "The other day the grass was brown, now it’s green because I ain’t give up." },
  winter24: { inSession: true, students: 7, smart: false, catchphrase: "In life you have to take the trash out, if you have trash in your life," }
}

// NOTE Operators
console.log(1 + 1)
console.log(1 - 1)
console.log(20 / 5)
console.log(20 * 5)

console.log('hello ' + 'there')
console.log('hello ' - 'there')

console.log('1' + 1)
console.log('1' - 1);
console.log(true + 1)
console.log(false - 1)

//comparisons
console.log(10 == '10');// true, 2 equals with compare with type casting. It will attempt to change the data types so they match
console.log(10 === '10');// false, 3 equals will not type cast, any difference in types will always be seen as different
// there is much much more we will learn in the future

let name = 'Jeremy'

// NOTE functions are a type of data that hold instructions to be completed at a later time
function greeting() {
  // the { } define the SCOPE of a function. what it holds
  let name = 'mick' // name was created inside of greeting, and cannot be accessed outside of its SCOPE
  console.log('👋 Hello there, my name is', name)
  // Js will always pull from the closest scope first
}

let burgers = 0

function increaseBurgers() {
  burgers += 1
  console.log('🍔', burgers);
}

let secretCode = "🌮🌮🦄🧌"

let myInput = ""

function addAlien() {
  console.log('+👽');
  myInput += '👽'
  console.log('#️⃣', myInput);
  drawInput()
}

function addUnicorn() {
  console.log('+🦄');
  myInput += '🦄'
  console.log('#️⃣', myInput);
  drawInput()
}

// NOTE parameters. Parameters are variables, local to the function, the "hold a place" for a value
function addEmoji(emoji) {
  console.log('+', emoji);
  myInput += emoji
  console.log('#️⃣', myInput);
  drawInput()
  // let inputElm = document.getElementById('my-input')
  // console.log('input', inputElm);
  // inputElm.innerText = myInput
}

function checkAnswer() {
  console.log("checking");
  console.log(secretCode == myInput);
  if (secretCode == myInput) {
    console.log('You got it boss');
    window.alert("You got it boss!")
    revealSecret()
  } else {
    console.log("You stinky, get out!");
    window.alert("You Suck!")
    resetCode()
  }
}

function drawInput() {
  let inputElm = document.getElementById('my-input')
  console.log('input', inputElm);
  inputElm.innerText = myInput
}

function resetCode() {
  myInput = ""
  drawInput()
}

function revealSecret() {
  let secretElm = document.querySelector('img')
  console.log(secretElm);
  secretElm.classList.remove('d-none')
}

// NOTE to limit the characters, you would do something along these line, just not quite this
function limitCharacters() {
  if (myInput.length == 4) {
    // THen limit
    let buttons = document.querySelectorAll('.input-button')
    for (let i = 0; i < buttons.length; i++) {
      const currentButton = buttons[i]
      currentButton.setAttribute('disabled', "")
    }
  }
}