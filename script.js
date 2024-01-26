"use strict";

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const errorIcon = document.getElementById("errorIcon");
  const emailInput = document.getElementById("emailInput");
  const submitButton = document.getElementById("btn");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    errorIcon.style.bottom = "55%";
    submitButton.style.top = "2px";
    emailInput.style.border = "2px solid var(--Soft-Red)";
    errorMessage.textContent = "Oops! Please add your email";
  } else if (!emailRegex.test(email)) {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    errorIcon.style.bottom = "55%";
    submitButton.style.top = "2px";
    emailInput.style.border = "2px solid var(--Soft-Red)";
    errorMessage.textContent = "Please provide a valid email";
    emailInput.placeholder = "example@email.com";
  } else {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.style.border = "1px solid var(--Desaturated-Red)";
    errorMessage.textContent = "";
    emailInput.placeholder = "Email Address";
    location.reload();
    alert("Thank you!");
  }
});
