let serviceForm = {
  service: "",
  questions: []
};

let qOrder = 0;
let cOrder = 0;

let question = {
  questionText: "",
  questionType: "",
  questionOrder: "",
  choices: []
}

let question_choices = {
  choiceText: "",
  choiceOrder: "",
}

//add service
let addService = document.getElementById("serviceName");
  serviceForm.service = addService.value;

  
  //add Question form dynamically
  let questionCount = 0;
  
  
  function addQuestionForm() {
    const container = document.getElementById('questionsList');
    const qId = `${questionCount++}`;
    
    const qDiv = document.createElement('div');
    qDiv.classList.add('border', 'p-3', 'mb-3');
    qDiv.innerHTML = `
    <div>
    <label>نص السؤال</label>
    <input type="text" id="data_${qId}_text" required>
    </div>
    <div>
    <label>نوع السؤال</label>
    <select id="data_${qId}_type" onchange="handleTypeChange(this, '${qId}')">
    <option value="1">نص</option>
    <option value="2">نعم / لا</option>
    <option value="3">اختيارات</option>
    </select>
    </div>
    <div id="${qId}_options" class="mt-2"></div>
    `;
    
    container.appendChild(qDiv);
    if(question)
      question = {
        questionText: "",
        questionType: "",
        questionOrder: "",
        choices: []
      };
  }

  //based on the type of questin it generats options form
  function handleTypeChange(selectElement, qId) {
    const optionsContainer = document.getElementById(`${qId}_options`);
    optionsContainer.innerHTML = '';
    
    if (selectElement.value === "3") {
      addOptionsButton(optionsContainer, qId);
    }
  }
  
  questionBtn = document.getElementById("addQuestionBtn");
  questionBtn.addEventListener("click", ()=> {
    addQuestionData();
    addQuestionForm();
  });
  
  function addQuestionData(){
    if(questionCount === 0){
      serviceForm.service = document.getElementById("serviceName").value;
    }  else{
      let question_counts = questionCount - 1;
      question.questionText = document.getElementById(`data_${question_counts}_text`).value;
      question.questionType = document.getElementById(`data_${question_counts}_type`).value;
      question.questionOrder = question_counts;
      serviceForm.questions.push(question);
    }
    console.log(serviceForm);
  }

function addOptionsButton(optionsContainer, qId){
    const addOptionBtn = document.createElement('button');
    addOptionBtn.textContent = 'إضافة اختيار';
    addOptionBtn.type = 'button';
    addOptionBtn.className = 'btn btn-secondary mt-2';
    addOptionBtn.id = "addOptionBtn"
    addOptionBtn.addEventListener("click",()=> addOptionField(optionsContainer, qId));

    optionsContainer.appendChild(addOptionBtn);
}


//add option input per click
let choiceCount = 0;

function addOptionField(optionContainer, qId){
  if(document.getElementById(`data_${choiceCount+qId}_choice`))
    addChoicesData(choiceCount+qId);
  var addNewChoiceInput = document.createElement("input");
  addNewChoiceInput.type = "text";
  addNewChoiceInput.name = "choice";
  addNewChoiceInput.id = "data_"+ (++choiceCount+qId)+"_choice";
  var choiceInputLabel = document.createElement("label");
  choiceInputLabel.textContent = "إضافة اختيار";
  var choicesdiv = document.createElement("div");

  choicesdiv.appendChild(choiceInputLabel);
  choicesdiv.appendChild(addNewChoiceInput);
  optionContainer.appendChild(choicesdiv);
}

function addChoicesData(count) {
  question_choices.choiceOrder = count;
  question_choices.choiceText = document.getElementById(`data_${count}_choice`).value;
  question.choices.push(question_choices);
  question_choices ={};
  count++;
}


let submetting = document.getElementById("submitButton");
submetting.addEventListener("click", () => {
  //pass the value of object "addService" to the backend 
});
