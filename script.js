const btn = document.querySelector('button');
const questionBox = document.getElementById('questionBox');
const docBody = document.querySelector(".API-answer");
const answerDiv = document.createElement("div");

async function getAnswer(event) {
  try {
    event.preventDefault();
    removeOldImages();
    let isQuestion = questionBox.value;
    if (isQuestion.includes('?')) {
      let yesOrNo = await axios.get(`https://boiling-mountain-84087.herokuapp.com/http://yesno.wtf/api`);
      let answer = yesOrNo.data;
      console.log(answer);
      displayAnswer(answer);
    } else {
      console.log('fuck', isQuestion);
      notAQ();

    }
  } catch (error) {
    console.log(error);
  } finally {
    // alert('done');
  }
}
// getAnswer();

btn.addEventListener("click", getAnswer)

function displayAnswer(data) {
  // const answerDiv = document.createElement("div");
  let answerGif = document.createElement("img");
  let answerYesNo = document.createElement("p");
  // Get the GIF data from API return and assign it to an HTML element
  answerGif.src = data.image
  answerYesNo.textContent = data.answer;
  answerDiv.appendChild(answerYesNo)
  answerDiv.appendChild(answerGif);
  docBody.appendChild(answerDiv);
  console.log(data);
};

// let notAQRes = ["That's not proper grammar!", "Missing something bro.", "???"];
// for (let i = 0; i < isQuestion.length; i++) {

// }


function notAQ() {
  let notAQRes = ["That's not proper grammar!", "Missing something bro.", "???"];
  let arrayMath = Math.floor(Math.random() * notAQRes.length)
  let notAQuestion = document.createElement("p");
  notAQuestion.innerText = notAQRes[arrayMath];
  console.log(notAQuestion);
  docBody.appendChild(notAQuestion);
}


// Needs a function to remove previous GIF and data in input
function removeOldImages() {
  // picContainer.innerHTML = '';
  while (answerDiv.firstChild)
    answerDiv.removeChild(answerDiv.firstChild);
}





