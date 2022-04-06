const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')






let firstName = "Steph";
let lastName = "Boatman";
function fullName() {
    return firstName + lastName;
}

fullName();

function add(a, b) {
    let c = a + b;
    return c;
}
add(100, 100);

function multiply(a, b) {
    let d = a * b;
}

multiply(c, c);