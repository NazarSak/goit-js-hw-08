import lodash from "lodash.throttle"


const form = document.querySelector(".feedback-form");
const input = document.querySelector(".email");
const message = document.querySelector(".message")

form.addEventListener("input",inputForm)

form.addEventListener("submit",submitForm)

// 

function inputForm (evt) {
formData[evt.target.name] = evt.target.value.trim();
localStorage.setItem("feedback-form-state",JSON.stringify(FormData));    
}


function submitForm (evt) {
    evt.preventDefault()

  const parseData = JSON.parse(localStorage.getItem("feedback-form-state"));

  evt.currentTarget.reset()

  localStorage.removeItem("feedback-form-state");
  formData = {};
}

function reloadPAge () {
   const savedlocal =  localStorage.getItem("feedback-form-state")
   if (savedValues) {
    formData = JSON.parse(savedlocal);
    console.log(formData);
    input.value = formData.email;
    textarea.value = formData.message;
}

}

