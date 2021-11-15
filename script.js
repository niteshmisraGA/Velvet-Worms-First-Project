// Accessing relevant elements from the HTML.
const btn = document.querySelector('button');
const questionBox = document.getElementById('questionBox');
const docBody = document.querySelector(".API-answer");
const answerDiv = document.createElement("div");

// API caller, the backbone of the site.
async function getAnswer(event) {
  try {
    event.preventDefault();
    // Prevents 'error' message stacking.
    removeOldError();
    // Prevents API data from building up on page.
    removeOldImages();
    let isQuestion = questionBox.value;
    if (isQuestion.includes('?')) {
      let yesOrNo = await axios.get(`https://boiling-mountain-84087.herokuapp.com/http://yesno.wtf/api`);
      let answer = yesOrNo.data;
      displayAnswer(answer);
    } else {
      notAQ();
    }
  } catch (error) {
    console.log(error);
  } finally {

  }
}

// Listening for mouse click on button, and "enter" key press.
btn.addEventListener("click", getAnswer);

// This is how the sausage is made.
function displayAnswer(data) {
  let answerGif = document.createElement("img");
  let answerYesNo = document.createElement("p");
  // Get the GIF data from API return and assign it to an HTML element
  answerGif.src = data.image
  answerYesNo.textContent = data.answer;
  answerDiv.appendChild(answerYesNo)
  answerDiv.appendChild(answerGif);
  docBody.appendChild(answerDiv);
};

// This func is invoked on the condition that user's input lacks a "?," and returns a sort of error message.
function notAQ() {
  let notAQRes = ["Ask a question.", "Did you say something?", "---> ? <---"];
  // Picks a random message from the above arr to display.
  let arrayMath = Math.floor(Math.random() * notAQRes.length)
  let notAQuestion = document.createElement("p");
  notAQuestion.innerText = notAQRes[arrayMath];
  notAQuestion.classList.add("notAQP");
  docBody.appendChild(notAQuestion);
}

// Removes previous rendered API answer data
function removeOldImages() {
  while (answerDiv.firstChild)
    answerDiv.removeChild(answerDiv.firstChild);
}
// Removes previous "not a question response."
function removeOldError() {
  while (docBody.firstChild)
    docBody.removeChild(docBody.firstChild);
}





