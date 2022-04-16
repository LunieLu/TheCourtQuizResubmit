# **The Court Quiz** - A Milestone Project 

## Introduction

Hello & Welcome to my second Code Institute Milestone Project:
A Quiz website based around the book "A Court of Thorns and Roses" by Sarah J Maas; one of my all time favourite book series.

During my time learning JavaScript with Code Institute, I admit I have found it very challenging and a problem that seems to be just slightly out of reach.

This project will hopefully show a basic understanding of the knowledge I managed to gather during the weeks studying on my Full Stack Software Development Diploma with Code Institute; but it will also give an insight into the struggles I encountered during this time, with myself to be the first to admit that JavaScript is still a programming language that I do not feel confident writing in during the time of creating this project and ReadME.

However, that doesn't mean that I have given up - Merely that this is a stepping stone towards more hours spent tackling JavaScript projects from different angles and with the help of additional resources.

I will go into more detail below about the site and I thank you for taking the time to view this project.

[Link to the Live Project](https://lunielu.github.io/TheCourtQuiz/)

## Features

- Index Page
    - Logo
    - Tag line
    - Start Quiz
    - High Scores

- Quiz Page
    - Questions
    - Progress Bar
    - Score

- End Page
    - Final Score
    - Save Score/Name section
    - Play Again
    - Go Home

- High Scores Page
    - List of High Scores
    - Go Home

## Testing

### Validator Testing

- This site has been tested on the following validators:
    - HTML:
        - No known errors were returned when passed through the official [W3C Validator](https://validator.w3.org/#validate_by_input)
    - CSS:
        - No known errors were returned when passed through the official [Jigsaw W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Javascript:
        - 2 Errors were returned when passed through the official [JSHint Validator](https://jshint.com/)
            - Two unused variables
            - ```14	saveHighScore```
            - ```34	homeBtn```
                - This is due to these variables being pulled from the 'OnClick' functionality in the end.html file.
        - The following metrics were returned on the below files:
            - highscores.js
                - There is only one function in this file.
                - It takes one argument.
                - This function contains only one statement.
                - Cyclomatic complexity number for this function is 1.
            - quiz.js
                - There are 7 functions in this file.
                - Function with the largest signature take 1 arguments, while the median is 1.
                - Largest function has 12 statements in it, while the median is 2.
                - The most complex function has a cyclomatic complexity value of 4 while the median is 1.
            - end.js
                - There are 4 functions in this file.
                - Function with the largest signature take 2 arguments, while the median is 0.5.
                - Largest function has 7 statements in it, while the median is 2.5.
                - The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### Known Bugs & Fixes

- Scores not saving and returning a 'Null' value
    - I encountered an issue pretty early on in the project, where the scores would not save a integer, but was returning a 'null' value.
    - During testing and bug-fixing, I found that the file path syntax was incorrect on the end.js page for the 'highscores' section.
        - Instead of putting '/', I had input '..' instead on the windows.location.assign value.
        - Adjusting '..' and replacing it with '/' rectified the issue, with scores now saving to a local cache and showing on the 'highscores.html' page.
    - Tested again on 16/04 as a final 'testing' phase before submission, found that the 'save' functionality was returning a 404 error.
        - 

- Issues with "Go Home" button alert not directing user back to index.html when clicking "OK"
    - Once a user has completed the quiz, they are redirected to the end.html page; with the option to save their highscore.
    - I added an alert to pop-up if a user tries clicking 'Go Home' without saving their score.
    - During the testing phase, I found that the redirect was not taking a user back to the index.html page for "The Court Quiz" repo; instead it was just redirecting to a random "index.html" page that returned a 404 Error.
    - I managed to fix this by adjusting the syntax from windows.location.assign to windows.location.href and changing the file path from local files, to the url for the index.html page (https://lunielu.github.io/TheCourtQuiz/index.html).
    - This fixed the problem and users now direct back to the correct index.html page when they click OK on the pop-up from the 'Go Home' button on the end.html page.

### Unfixed Bugs

## Deployment

**Deploying a GitHub Repository on GitHub Pages**

- The site has been deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository menu for [The Court Quiz](https://github.com/LunieLu/TheCourtQuiz), please navigate to the Settings tab.
    - Under the heading 'Code and Automation', click on Pages.
    - From the source section drop-down menu, select the Main branch.
    - Press the 'Save' button and the site will provide a link to the completed website.

**Making a Local Clone**
- Find the GitHub Repository [The Court Quiz](https://github.com/LunieLu/TheCourtQuiz).
- Click the Code button.
- Copy the URL found under HTTPS.
- In Gitpod, change the directory to a location that you would like the cloned repo to be located.
- In the console, type 'git clone' and then paste the URL you copied.
- Press Enter and this will create the local clone.

## Credits

- Basic HTML, CSS & JavaScript Quiz Structure heavily influenced by [YouTube Tutorial by Brian Design](https://youtu.be/f4fB9Xg2JEY)
- Resources & Tutorials to create JavaScript alerts from [w3schools](https://www.w3schools.com/)
