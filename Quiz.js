const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does the acronym 'DOM' stand for in JavaScript?",
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Dynamic Object Model",
        d: "Digital Object Model",
        correct: "a"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        a: "var",
        b: "let",
        c: "const",
        d: "variable",
        correct: "b"
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        a: "To end the function's execution",
        b: "To return a value from the function",
        c: "To declare a variable",
        d: "To print a message to the console",
        correct: "b"
    },
    {
        question: "How do you comment out a single line in JavaScript?",
        a: "// This is a comment",
        b: "<!-- This is a comment -->",
        c: "/* This is a comment */",
        d: "''' This is a comment '''",
        correct: "a"
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        a: "To check the type of a variable",
        b: "To create a new variable",
        c: "To perform a mathematical operation",
        d: "To loop through an array",
        correct: "a"
    },
    {
        question: "Which function is used to convert a string to an integer in JavaScript?",
        a: "parseInt()",
        b: "stringToInteger()",
        c: "toInteger()",
        d: "parseString()",
        correct: "a"
    },
    {
        question: "What is the 'event loop' in JavaScript?",
        a: "A loop that runs continuously in the background",
        b: "A loop that handles asynchronous tasks",
        c: "A loop that iterates through an array",
        d: "A loop that prints messages to the console",
        correct: "b"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        a: "==",
        b: "===",
        c: "!=",
        d: "!==",
        correct: "b"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        a: "To refer to the current HTML document",
        b: "To refer to the current function",
        c: "To refer to the current object",
        d: "To refer to the global scope",
        correct: "c"
    },
    {
        question: "What is the purpose of the 'JSON' object in JavaScript?",
        a: "To handle networking in JavaScript",
        b: "To store data in a key-value format",
        c: "To manipulate the DOM",
        d: "To create animations",
        correct: "b"
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})