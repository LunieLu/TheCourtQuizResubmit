const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progresstext = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
        question: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: ,
    },
    {
        question: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer: ,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progresstext.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()