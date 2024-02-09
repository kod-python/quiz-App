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
      if (answer == quiz[currentQuiz].correct) {
        score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2> You answered ${score} / ${quizData.length} questions correctly </h2>`;
      }
    }
  });

  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer == quizData[currentQuiz].correct) {
        score++;
      } else {
        // If the answer is wrong, prompt the user and provide the correct answer
        alert("Wrong answer! The correct answer is: " + quizData[currentQuiz].correct.toUpperCase());
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        let remark = "";
        if (score >= 8) {
          remark = "Excellent! You really know your stuff!";
        } else if (score >= 5) {
          remark = "Well done! You did a good job!";
        } else {
          remark = "Keep practicing! You'll get better!";
        }
  
        quiz.innerHTML = <h2>You answered ${score} / ${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>;
      } 
    }else {
      // Print an informational message when no answer is selected
      alert("Please select an answer before submitting.");
    }
  });
