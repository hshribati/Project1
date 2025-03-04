document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from actually submitting

    confirmationMessage.textContent = "Thank you for signing up for our Qur'an class!";
    confirmationMessage.style.display = "block";

    // Optionally, clear the form after submission
    form.reset();
  });
});
