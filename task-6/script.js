const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset error messages
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";
  successMessage.textContent = "";

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameError.style.display = "block";
    valid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailError.style.display = "block";
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    emailError.style.display = "block";
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    messageError.style.display = "block";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});
