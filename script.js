let slideIndex = 0;
const images = ["1.png", "2.png", "3.png"];
const texts = ["Image 1", "Image 2", "Image 3"];

function showSlides() {
  const sliderImage = document.getElementById("sliderImage");
  const imageText = document.getElementById("imageText");
  slideIndex = (slideIndex + 1) % images.length;
  sliderImage.src = images[slideIndex];
  imageText.textContent = texts[slideIndex];
  setTimeout(showSlides, 3000);
}

function openPopup(src) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.display = "block";
  popup.innerHTML = `<img src="${src}" style="width: 100%"><button onclick="closePopup(this)">Close</button>`;
  document.body.appendChild(popup);
}

function closePopup(button) {
  button.parentElement.style.display = "none";
}

document.addEventListener("DOMContentLoaded", showSlides);
document.getElementById("contactForm").onsubmit = function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");
  var valid = true;

  if (email === "" || !email.includes("@")) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (message.trim() === "") {
    messageError.style.display = "block";
    valid = false;
  } else {
    messageError.style.display = "none";
  }

  if (valid) {
    this.submit();
  }
};
