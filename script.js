const quizData = [

{

    question: "what is the capital of France?",

    a:"London",
    b:"Paris",
    c:"Berlin",
    d:"Rome",
    correct: "b"
},


{

    question: "what is the capital of France?",

    a:"London",
    b:"Paris",
    c:"Berlin",
    d:"Rome",
    correct: "b"
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

    deselectAnswers()

    const currenQuizData = quizData = [currenQuiz]

    questionEl.innerText = currenQuizData.question


 a_text.innerText = currenQuizData.a;
 b_text.innerText = currenQuizData.b;
 c_text.innerText = currenQuizData.c;
 d_text.innerText = currenQuizData.d;


}



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