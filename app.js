const qwerty = document.getElementById ('qwerty');
const phrase = document.getElementById ('phrase');
const overlay = document.getElementById ('overlay');
const ul = phrase.firstElementChild;
const hearts = document.querySelectorAll ('.tries img');
const resetButton = document.querySelector ('.btn__reset');
const newButton = document.querySelectorAll('button');
let missed = 0;

const phrases = [
    'washington', 
    'liberty', 
    'end zone', 
    'great awakening', 
    'bill of rights'
];

//return a random phrase from an array
function getRandomPhraseAsArray(arr) {
    const randomNumber = arr[Math.floor(Math.random() * arr.length)];
    return randomNumber;
}

//add the letters of a string to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');//creates the li.
    li.textContent = arr[i]; //puts the character inside the li.
    ul.appendChild(li);//append the li to the #phrase ul.
    if (arr[i] !== ' ') {
        li.className = 'letter';
    } else {
        li.className = 'space';
    }
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//check if letter is in the phrase
const checkLetter = button => {
    const checkLetter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if (checkLetter[i].textContent === button) {
            checkLetter[i].classList.add('show');
            match = button;
        }
    } 
    return match;
}

//check if the game has been won or lost
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    if (letter.length === show.length) {
        overlay.classList.add('win');
        title.textContent = 'You Won!';
        overlay.style.display = 'flex';
    } else if (missed > 4) {
        overlay.style.display = ('lose');
        overlay.classList.add('lose');
        title.textContent = 'You Lost!';
        overlay.style.display = 'flex';
    }
   
}

//Listen for the start game button to be pressed
resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    startOver();
});  


//listen for the onscreen keyboard to be clicked
    qwerty.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
            e.target.className = 'chosen';
            const checked = checkLetter(e.target.textContent);
            if (!checked) { //meaning checked holds no value (null)
                missed ++;
                hearts[missed -1].src = "images/lostHeart.png";
            }
        } 
        return checkWin();
    });

    //change overlay class and h2 text
    function changeOverlay(overlayClassNew, h2TextNew, newBtnClass) { 
        overlay.className = overlayClassNew;
        h2.innerHtml = h2TextNew;
        //change button class/text
        resetButton.className = newBtnClass;
        resetButton.textContent = "Play It Again?";
        //display screen
        overlay.style.display = 'flex';
    }
    
    // function resetGame() {
    //     function fiveHearts() {
    //         for (let i = 0; hearts.length; i++) {
    //             hearts[i].src = 'images/liveheart.png';
    //         }
    //     }
    // }
    function startOver() {
        for (let i = 0; hearts.length; i++) {
            hearts[i].src = 'images/liveheart.png';
        }
        for (let i = 0; i < newButton.length; i++) {
            newButton[i].remove('chosen');
            newButton[i].disabled = false;
        }

        function removePhrase() {
            ul.replaceChildren();
        }

        removePhrase();
        startOver();
        fiveHearts();
        missed = 0;
        overlay.style.display = 'none';
        getRandomPhraseAsArray(phrases);
    }