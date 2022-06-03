const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function body() {
    document.body.style.backgroundImage = "url('assets/images/jeremy-perkins-stars.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    }
document.addEventListener("DOMContentLoaded", body());

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    var letters = new RegExp('[A-Za-z]');
    if(username.value.match(letters)) {
        saveScoreBtn.disabled = false;
    }
    else {
        saveScoreBtn.disabled = true;
    }
});

const saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    }); 

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('https://lunielu.github.io/TheCourtQuizResubmit/');
};

function homeBtn() {
    let text = "Are you sure you want to leave without submitting your high score?";
    if (confirm(text) == true) {
        window.location.href = 'https://lunielu.github.io/TheCourtQuizResubmit/';
    } else {
        return;
    }
}