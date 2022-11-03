document.addEventListener('DOMContentLoaded', () => {
const qwerty = document.getElementById ('qwerty');
const phrase = document.getElementById ('phrase');
const resetButton = document.querySelector ('.btn_reset');
let correctAnswers = 0;

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

//return a random phrase from an array
getRandomPhraseAsArray = (array) => {
    const randomNumber = array[Math.floor(Math.random() * array.length)];
    return randomNumber;
}

//add the letters of a string to the display
addPhraseToDisplay = (array) => {
    for (let i = 0; i < array.length; i++)
    const li = document.createElement('li');//creates the li.
    li.textContent = array[i]; //puts the character inside the li.
    ul.appendChild(li);//append the li to the #phrase ul.
    if (array[i] !== '') {
        li.className = 'letter';
    } else {
        li.classname = 'space';
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
}