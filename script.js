// JavaScript (script.js)

const questions = [

        // ... your existing questions ...
    
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon dioxide", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Hydrogen", correct: false },
            ]
        },
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        {
            question: "Which is the smallest country in the world?",
            answers: [
                { text: "Vatican City", correct: true },
                { text: "Bhutan", correct: false },
                { text: "Nepal", correct: false },
                { text: "Sri Lanka", correct: false },
            ]
        },
        {
            question: "Which is the largest desert in the world?",
            answers: [
                { text: "Kalahari", correct: false },
                { text: "Gobi", correct: false },
                { text: "Sahara", correct: false },
                { text: "Antarctica", correct: true },
            ]
        },
        {
            question: "Which is the smallest continent in the world?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: true },
                { text: "Arctic", correct: false },
                { text: "Africa", correct: false },
            ]
        },
    
    ];
    
    // The rest of your code remains the same...
    

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "next"; // Hide the next button initially
    showQuestion();
}

function showQuestion() {
    resetState();
    answerButtons.innerHTML = ""; // Clear previous answer buttons
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(index));
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild);
}



function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
        
    } else {
        selectBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        if (button.dataset.correct === "flase") {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"; // Show the next button
}


function showScore(){
    questionElement.innerHTML = `your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    resetState();
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length ){
        showQuestion();
     } 
    else{
   
       showScore();
}
}


nextButton.addEventListener("click", ()=>{

if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}

});

// function checkAnswer(selectedIndex) {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (currentQuestion.answers[selectedIndex].correct) {
//         score++;
//     }
    
//     if (currentQuestionIndex < questions.length -1) {
//         showQuestion();
//         currentQuestionIndex++;
//     } else {
//         // Display the final score or any other message
//         questionElement.innerHTML = "Quiz Completed! Your Score: " + score + " out of " + questions.length;
//         answerButtons.innerHTML = "";
//         nextButton.innerHTML = "Restart";
//         nextButton.style.display = "block"; // Show the restart button
//         nextButton.addEventListener("click", startQuiz);
//     }
// }

startQuiz();
