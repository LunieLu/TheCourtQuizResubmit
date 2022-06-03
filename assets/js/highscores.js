const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');

function body() {
    document.body.style.backgroundImage = "url('assets/images/jeremy-perkins-stars.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    }
document.addEventListener("DOMContentLoaded", body());