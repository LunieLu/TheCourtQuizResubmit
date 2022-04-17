const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progresstext = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is the name of the first court Feyre is taken to as a human?',
        choice1: 'The Summer Court',
        choice2: 'The Spring Court',
        choice3: 'The Night Court',
        choice4: 'The Day Court',
        answer: 2,
    },
    {
        question: 'What is the name of the land that the Fae reside in?',
        choice1: 'Earth',
        choice2: 'Camelot',
        choice3: 'Prythian',
        choice4: 'Mordor',
        answer: 3,
    },
    {
        question: 'Who is the author of a Court of Thorns and Roses?',
        choice1: 'Sarah J Maas',
        choice2: 'J K Rowling',
        choice3: 'James Patterson',
        choice4: 'Maria V Snyder',
        answer: 1,
    },
    {
        question: 'Which animal was Feyre tracking at the beginning of the book?',
        choice1: 'Rabbit',
        choice2: 'Fox',
        choice3: 'Pheasant',
        choice4: 'Doe',
        answer: 4,
    },
    {
        question: "What colour are Tamlin's eyes?",
        choice1: 'Grey',
        choice2: 'Green',
        choice3: 'Brown',
        choice4: 'Blue',
        answer: 2,
    },
    {
        question: 'What separates the Fae & Human realms?',
        choice1: 'A shield',
        choice2: 'Portals',
        choice3: 'A curtain',
        choice4: 'A wall',
        answer: 4,
    },
    {
        question: 'What year was A Court of Thorns and Roses released?',
        choice1: '2015',
        choice2: '2007',
        choice3: '2010',
        choice4: '2013',
        answer: 1,
    },
    {
        question: 'What do Humans wear as protection against the Fae?',
        choice1: 'A sword',
        choice2: 'The colour red',
        choice3: 'Items made of iron',
        choice4: 'A flower crown',
        answer: 3,
    },
    {
        question: "What symbol did Feyre paint on her sister Elaine's drawer?",
        choice1: 'A heart',
        choice2: 'A flower',
        choice3: 'A crown',
        choice4: 'A star',
        answer: 2,
    },
    {
        question: 'How did Feyre kill the Middengard Wyrm?',
        choice1: 'With fire',
        choice2: 'Stabbing it in the eye',
        choice3: 'Impaling it on bones',
        choice4: 'Drowned it',
        answer: 3,
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
        // this section is the end of the quiz - if no more questions, send user to 'end.html'
    }
    
    questionCounter++;
    progresstext.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    // Increasing the sentence of 'Question 1 of 10' for example
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    // Increasing the width of the progress bar, overwriting css style, with the colour white


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    // choosing a number between 0 - 9 (as 10 is the current max questions)
    currentQuestion = availableQuestions[questionsIndex];
    // deciding a question to show user
    question.innerText = currentQuestion.question;
    // changing text to show the question data from the question array
    

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);
    // stops the questions from looping

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });

});

function move() {
    if (width < 100) {
        width+=10;
        progressBarFull.style.width = width + '%';
        progressBarFull.innerHTML = width * 1 + '%';
    };
};

function incrementScore(num) {
    score +=num;
    // ^ this is short for score = score + num
    scoreText.innerText = score;
    // updating score text from score number
};

startGame();