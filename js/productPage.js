// Show More Questions
const moreBtn = document.querySelector("#faq .questions-container .more-btn");
const questionsSection = document.querySelector("#faq .questions-container");
let questions = document.querySelectorAll("#faq .question");
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
  quesP.appendChild(quesSpan);
  quesP.textContent = "what's your favourite product and why?";
  // Create Answer Span
  let spanAnswer = document.createElement("span");
  spanAnswer.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi harum illum animi quaerat dicta sequi, sint laborum dolornisi harum illum animi quaerat dicta sequi.";
  queDiv.appendChild(quesP);
  queDiv.appendChild(spanAnswer);
  questionsSection.removeChild(moreBtn);
  questionsSection.appendChild(queDiv);
  questionsSection.appendChild(moreBtn);
});

let quesNum = document.querySelectorAll("#faq .question .ques-num");
for (let i = 0; i < questions.length; i++) {
  quesNum[i].textContent = `Q${i}: `;
}