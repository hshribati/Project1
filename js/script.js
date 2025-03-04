document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form"); // Ensure the form has this ID in HTML
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Show the confirmation message
    confirmationMessage.textContent = "Thank you for signing up for our Quran class!";
    confirmationMessage.style.display = "block";

    // Optionally, clear the form fields
    form.reset();
  });
});
