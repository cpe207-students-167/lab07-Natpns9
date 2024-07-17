// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");



// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");


// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.addEventListener('keyup', () => {
  if (firstNameInput.value.trim() === "CPE207") {
    firstNameInput.classList.remove("is-invalid");
    firstNameInput.classList.add("is-valid");
  } else {
    firstNameInput.classList.remove("is-valid");
    firstNameInput.classList.add("is-invalid");
  }
});

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.addEventListener('keyup', () => {

});
emailInput.addEventListener('keyup', () => {
  
});

passwordInput.addEventListener('keyup', () => {

});
confirmPasswordInput.addEventListener('keyup', () => {

});
// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  // validate first name
  if (firstNameInput.value !== "CPE207") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name

  // validate email

  // validate password

  // validate confirm password

  if (isFirstNameOk) alert("Registered successfully");
};

// add callback function for Reset button.
clearBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default button behavior

  // Clear all input fields
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";

  // Reset validation states
  firstNameInput.classList.remove("is-valid", "is-invalid");
  lastNameInput.classList.remove("is-valid", "is-invalid");
  emailInput.classList.remove("is-valid", "is-invalid");
  passwordInput.classList.remove("is-valid", "is-invalid");
  confirmPasswordInput.classList.remove("is-valid", "is-invalid");
});

