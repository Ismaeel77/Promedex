function addQuestion() {
  // Show More Questions
  const questionsSection = document.querySelector("#faq .questions-container");
  const moreBtn = document.querySelector("#faq .questions-container .more-btn");
  let questions = document.querySelectorAll("#faq .question");
  let n = 4;
  moreBtn.addEventListener("click", () => {
    // Create Question Container Div
    let queDiv = document.createElement("div");
    queDiv.setAttribute("class", "question mb-5");
    // Create Question P
    let quesP = document.createElement("p");
    quesP.setAttribute("class", "ques");
    // Create Question Number Span
    let quesSpan = document.createElement("span");
    quesSpan.setAttribute("class", "ques-num");
    quesSpan.textContent = `Q${n}: `;
    n++;
    quesP.appendChild(quesSpan);
    quesP.append(document.createTextNode("what's your favourite product and why?"));
    // Create Answer Span
    let spanAnswer = document.createElement("span");
    spanAnswer.setAttribute("class" , "d-block")
    spanAnswer.textContent ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi harum illum animi quaerat dicta sequi, sint laborum dolornisi harum illum animi quaerat dicta sequi.";
    queDiv.appendChild(quesP);
    queDiv.appendChild(spanAnswer);
    questionsSection.removeChild(moreBtn);
    questionsSection.appendChild(queDiv);
    questionsSection.appendChild(moreBtn);
  });

  let quesNum = document.querySelectorAll("#faq .question .ques-num");
  for (let i = 0; i < questions.length; i++) {
    quesNum[i].textContent = `Q${i + 1}: `;
  }
}

addQuestion()