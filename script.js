const quizData = [
    {
      question: "What is the capital of France",
      a: "London",
      b: "Paris",
      c: "Berlin",
      d: "Rome",
      correct: "b",
    },
    {
      question: "What is the capital of France",
      a: "London",
      b: "Paris",
      c: "Berlin",
      d: "Rome",
      correct: "b",
    },
  ];
  
  // create variable
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("questions");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
      deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
  
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
  }
  
  loadQuiz();
  
  function deselectAnswers() {
    answerEls.forEach((answerEls) => (answerEls.checked = false));
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answer) => {
      if (answerEls.checked) {
        answer = answerEls.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click",  () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quiz[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = 
          <h2> You answered ${score} / ${quizData.length} questions correctly </h2>;
      }
    }
  });
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
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = (quizData [currentQuiz]);
    questionEl.innerText = currentQuizData.question;
  
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  loadQuiz();
  
  function deselectAnswers() {
    answerEls.forEach((answerEls) => (answerEls.checked = false));
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEls) => {
      if (answerEls.checked) {
        answer = answerEls.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer == quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`;
      }
    }
  });
  ﻿