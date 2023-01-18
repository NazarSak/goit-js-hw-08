
// // Знизу є другий код підкажіть будь ласка в чому там помилками бо  вмене висвічує ерор










import throttle from "lodash.throttle";



const form = document.querySelector(".feedback-form");
const input = document.querySelector(".email");
const textarea = document.querySelector(".message")


const STORAGE_KEY = "feedback-form-state"

let formData = {};


form.addEventListener("input",  throttle(storageFormData,500));

form.addEventListener("submit",submitForm)

populateTextarea ()


function storageFormData(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function submitForm (evt) {
    evt.preventDefault();
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(saveData)
evt.target.reset();
localStorage.removeItem(STORAGE_KEY)
formData = {};
}

function populateTextarea () {
 const savemessage = localStorage.getItem(STORAGE_KEY) ;

 if (savemessage) {
   formData = JSON.parse(savemessage);
   input.value = formData.email;
   textarea.value = formData.message;
}
 }

























