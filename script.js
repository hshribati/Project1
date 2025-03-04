document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Basic validation
    if (name === "" || email === "" || phone === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Show confirmation message
    confirmationMessage.innerText = "Thank you for signing up! We will contact you soon.";
    confirmationMessage.style.display = "block";

    // Clear form fields
    form.reset();
  });
});
