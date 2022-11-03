const qwerty = document.getElementById ('qwerty');
const phrase = document.getElementById ('phrase');
const overlay = document.getElementById ('#overlay');
const ul = document.getElementById ('#phrase ul');
const resetButton = document.querySelector ('.btn__reset');
let missed = 0;

const phrases = [
    'washington', 
    'liberty', 
    'end zone', 
    'great awakening', 
    'bill of rights'
];

resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});  

// //return a random phrase from an array
// function getRandomPhraseAsArray(arr) {
//     const randomNumber = arr[Math.floor(Math.random() * arr.length)];
//     return randomNumber;
// }

// //add the letters of a string to the display
// function addPhraseToDisplay(arr) {
//     for (let i = 0; i < arr.length; i++) {
//     const li = document.createElement('li');//creates the li.
//     li.textContent = arr[i]; //puts the character inside the li.
//     ul.appendChild(li);//append the li to the #phrase ul.
//     if (arr[i] !== '') {
//         li.className = 'letter';
//     } else {
//         li.classname = 'space';
//     }
// }

// const phraseArray = getRandomPhraseAsArray(phrases);
// addPhraseToDisplay(phraseArray);

// //check if letter is in the phrase
// const checkLetter = button => {
//     const checkLetter = document.querySelectorAll('li');
//     const match = null;
//     for (let i = 0; i < checkLetter.length; i++);
//         if (checkLetter[i].textContent === button) {
//             checkLetter[i].classList.add('show');
//             match = button;
//         }

// // //check if the game has been won or lost
// // const checkWin = () => {
// //     qwerty.addEventListener('click', (e) => {
// //         if (e.target.) {

// //         }

// //     }

