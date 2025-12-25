document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required!";
  } else {
    error.textContent = "";
    alert("Message sent successfully!");
    this.reset();
  }
});

function scrollToSection() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
