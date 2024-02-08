const quizData = [
    {
        question: "What is the capital of France?",
        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b",
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "Mark Twain",
        c: "J.K. Rowling",
        d: "Stephen King",
        correct: "a",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Jupiter",
        correct: "b",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Leonardo da Vinci",
        b: "Pablo Picasso",
        c: "Vincent van Gogh",
        d: "Michelangelo",
        correct: "a",
    },
    {
        question: "What is the chemical symbol for water?",
        a: "Wt",
        b: "H2O",
        c: "Co",
        d: "Ho",
        correct: "b",
    },
    {
        question: "Who discovered penicillin?",
        a: "Alexander Fleming",
        b: "Marie Curie",
        c: "Isaac Newton",
        d: "Albert Einstein",
        correct: "a",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        correct: "b",
    },
    {
        question: "Who is known as the father of modern physics?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Galileo Galilei",
        d: "Niels Bohr",
        correct: "b",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Nauru",
        correct: "b",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Euro",
        c: "Dollar",
        d: "Yen",
        correct: "d",
    },
];

// create variables

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll
(".answer");

const answerEl = document.getElementById
("question");

const a_text = document.getElementById
("a_text");

const b_text = document.getElementById
("b_text");

const c_text = document.getElementById
("c_text");

const d_text = document.getElementById
("d_text");


const submitBtn = document.getElementById
("submit");


let currenQuiz = 0;
let score = 0;



function loadQuiz(){

    deselectAnswers();

    const currenQuizData = quizData[currenQuiz];

    questionEl.innerText = currenQuizData.question;


 a_text.innerText = currenQuizData.a;
 b_text.innerText = currenQuizData.b;
 c_text.innerText = currenQuizData.c;
 d_text.innerText = currenQuizData.d;


}

loadQuiz();

function deselectAnswers(){

    answerEls.forEach(answerEls => answerEls.checked = false)
}



function getSelected() {
    
    answerEls.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
            
        }
    });

    return answer
}


submitBtn.addEventListener("click", () => {
 const answer = getSelected()

 if(answer){
    if (answer == quiz[currenQuiz].correct){
        score++
    }
    
    currenQuiz++

    if(currenQuiz < quizData.length){
        loadQuiz
    }

    else{
        quiz.innerHTML = `<h2>you answered ${score} / ${quizData.length} questions correctly</h2>
        <button onclick = "location.reload()">Reload</button>`
    }
 }

})