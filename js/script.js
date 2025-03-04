document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form"); 
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Ensure the message is displayed for all selections
    confirmationMessage.textContent = "Thank you for signing up for our Quran class!";
    confirmationMessage.style.display = "block";

    // Optionally, clear the form fields after submission
    form.reset();
  });
});
