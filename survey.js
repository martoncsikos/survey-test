// STYLES

const styles = `
  p {
  margin: 0;
}

#survey-container {
  position: fixed;
  top: 20px;
  right: 00px;
  width: 800px;
  z-index: 10;
  transform: translateX(100%)
}

.survey-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 5px 0px rgba(204,204,204,0.75);
  margin-right: 20px;
}

.survey-question {
  display: flex;
  justify-content: center;
  align-items: center;
}


.survey-answers {
  display: flex;
  flex-direction: row;
}

.answer-button {
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #EEE;
}

.answer-button:hover {
  background-color: #DDD;
}

.slide-in {
  animation: slide-in .5s forwards;
}

.slide-out {
  animation: slide-out .5s forwards;
}

@keyframes slide-in {
  100% { transform: translateX(0%); }
}

@keyframes slide-out {
  0% { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}
`;


const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet)


// HTML

const surveyHTML = `
  <div class="survey-content">
    <div class="survey-question">
      <p>Have you ever thought about purchasing an add-on for your Swedish Penis Pump?</p>
    </div>
    <div class="survey-answers">
        <button onClick="submitSurvey('Yes')" class="answer-button">Yes</button>
        <button onClick="submitSurvey('No')" class="answer-button">No</button>
    </div>
  </div>
 `

const surveyContainer = document.createElement('div');
surveyContainer.id = 'survey-container';
surveyContainer.innerHTML = surveyHTML;
document.body.appendChild(surveyContainer);


// JS

function showSurvey() {
  const surveyContainer = document.getElementById('survey-container');
  surveyContainer.classList.add('slide-in');
  surveyContainer.classList.remove('slide-out');
}

function hideSurvey() {
  const surveyContainer = document.getElementById('survey-container');
  surveyContainer.classList.remove('slide-in');
  surveyContainer.classList.add('slide-out');
}

function sendAnswer(answer) {
  console.log(`Answer sent to server: ${answer}`);
}

function submitSurvey(answer) {
  sendAnswer(answer);
  hideSurvey();
}

setTimeout(showSurvey, 1000);
