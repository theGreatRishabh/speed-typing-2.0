window.addEventListener('load',init);

// Globals


// Available levels
const levels = {
    easy: 6,
    medium: 4,
    hard: 3
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'Apple',
    'Ball',
    'Cat',
    'Dog',
    'Elephant',
    'You',
    'javascript',
    'gym',
    'establishment',
    'symptoms',
];

// Initialize Game
function init(){
    // Show no. of seconds
    seconds.innerHTML = currentLevel -1;
    // Load word from array
    showWord(words);
    // Start Matching on word input
    wordInput.addEventListener('input', startMatch)
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check gaee status
    setInterval(checkStatus, 50);
}

// Start Match
function startMatch(){
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel;
        console.log('hi');
        showWord(words);
        wordInput.value = '';
        score++;     
    }

    // If score is -1 display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else{
    scoreDisplay.innerHTML = score; 
    }  
}

// Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct !!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word
function showWord(words) {
    // Generate Random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown(){
    // Make sure time is not run out
    if (time > 0){
        // decrement
        time--;
    } else if (time === 0) {
        // Game is over
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!'
        score = -1;
    }
}