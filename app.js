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
    return randomNumber.split('');
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
		/*Create a conditional that compares the text of the button parameter
		to the text of the li at the current index of the loop*/ 
		if (checkLetter[i].textContent === button) { 
		/*If they match, add the "show" class to the li*/    
				checkLetter[i].classList.add('show');
		/*if they match, store the button text in the match variable.*/    
				match = button;
		}
  } 
    /*once the loop completes, return the match variable */
    return match;
}

//check if the game has been won or lost
const checkWin = () => {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    /*Check if the length of the 2 variables are the same */
    if (letter.length === show.length) {
    /*If the they are the same, create the 'win' class to start the overlay*/    
        overlay.classList.add('win');
				overlay.classList.remove('lose');
    /*Change the headline text of the start overlay to show a person won*/    
        title.textContent = 'You Won!';
				resetButton.textContent = "Play Again?";
    /*Change the display property of the overlay to 'flex' */    
        overlay.style.display = 'flex';
    /*If the missed counter > 4, display the 'lose' overlay */    
    } else if (missed > 4) {    
        overlay.style.display = ('lose');
    /*create the 'lose' overlay by adding the 'lose' to the start overlay*/    
        overlay.classList.add('lose');
				overlay.classList.remove('win');
    /*Change the headline text of the start overlay to show a person lost*/    
        title.textContent = 'You Lost!';
				resetButton.textContent = "Play Again?";
        overlay.style.display = 'flex';
    }
}
		//Listen for the start game button to be pressed
		resetButton.addEventListener('click', () => {
				overlay.style.display = 'none';
				startOver();
		});  
				//Listen for the onscreen keyboard to be clicked
				/*Start by creating an event listener for the qwerty element that listens for the
				“click” event*/
		qwerty.addEventListener('click', (e) => {
				/*Use a conditional to filter out clicks that don’t happen on the buttons or if the
				button already has the “chosen” class*/        
		if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
					//Add the “chosen” class to the button that was pressed.
				e.target.className = 'chosen';
				//Call the checkLetter function and store the results in a variable.
				const checked = checkLetter(e.target.textContent);
				/*If the checkLetter function does not find a letter, 
				remove one of the heart images and increment the missed counter */
				if (!checked) { //meaning checked holds no value (null)
						missed ++;
						hearts[missed -1].src = "images/lostHeart.png";
				}
		} 
		return checkWin();
});

    // //change overlay class and h2 text
    // function changeOverlay(overlayClassNew, h2TextNew, newBtnClass) { 
    //     overlay.className = overlayClassNew;
    //     h2.innerHtml = h2TextNew;
    //     //change button class/text
    //     resetButton.className = newBtnClass;
    //     resetButton.textContent = "Play It Again?";
    //     //display screen
    //     overlay.style.display = 'flex';
    // }

    //reset gameboard
    function startOver() {
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';
        }
        for (let i = 0; i < newButton.length; i++) {
            newButton[i].classList.remove('chosen');
            newButton[i].disabled = false;
        }
            
        function removePhrase() {
            ul.replaceChildren();
        }

        removePhrase();
        missed = 0;
        const newPhrase = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhrase);
    }




















































    // // function resetGame() {
    // //     function fiveHearts() {
    // //         for (let i = 0; hearts.length; i++) {
    // //             hearts[i].src = 'images/liveheart.png';
    // //         }
    // //     }
    // // }