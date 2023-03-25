// Side Menu
var navItems = document.getElementById("nav-items");
function show() {
  navItems.style.right = "0";
}
function hide() {
  navItems.style.right = "-300px";
}

// Sticky Navigation Bar
window.onscroll = function () {
  stickyFunc();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Form Validation
const username = document.getElementById("username");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const tnc = document.getElementById("tnc");

const errorUsername = document.getElementById("error-username");
const errorEmail = document.getElementById("error-email");
const errorAge = document.getElementById("error-age");
const errorPassword = document.getElementById("error-password");
const errorPassword2 = document.getElementById("error-password2");
const errorTnc = document.getElementById("error-tnc");

const button = document.getElementById("button-submit");

button.addEventListener("click", (event) => {
  event.preventDefault();
  validation();
});

function validation() {
  var errUsername = "";
  var errEmail = "";
  var errAge = "";
  var errPassword = "";
  var errPassword2 = "";
  var errTnc = "";

  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;
  const ageValue = age.value;

  if (usernameValue === "") {
    errUsername += "Username is required";
    username.parentElement.classList.add("error");
    username.parentElement.classList.remove("success");
  } else {
    username.parentElement.classList.remove("error");
    username.parentElement.classList.add("success");
  }

  if (emailValue === "") {
    errEmail += "Email is required";
    email.parentElement.classList.add("error");
    email.parentElement.classList.remove("success");
  } else if (!emailValue.includes("@gmail.com")) {
    errEmail += "Invalid Email";
    email.parentElement.classList.add("error");
    email.parentElement.classList.remove("success");
  } else {
    email.parentElement.classList.remove("error");
    email.parentElement.classList.add("success");
  }

  if (passwordValue === "") {
    errPassword += "Password is required";
    password.parentElement.classList.add("error");
    password.parentElement.classList.remove("success");
  } else if (passwordValue.length < 8) {
    errPassword += "Password must be 8 characters or more";
    password.parentElement.classList.add("error");
    password.parentElement.classList.remove("success");
  } else {
    password.parentElement.classList.remove("error");
    password.parentElement.classList.add("success");
  }

  if (password2Value === "") {
    errPassword2 += "Confirm your password";
    password2.parentElement.classList.add("error");
    password2.parentElement.classList.remove("success");
  } else if (password2Value !== passwordValue) {
    errPassword2 += "Password doesn't match";
    password2.parentElement.classList.add("error");
    password2.parentElement.classList.remove("success");
  } else {
    password2.parentElement.classList.remove("error");
    password2.parentElement.classList.add("success");
  }

  if (ageValue < 17) {
    errAge += "Must be at least 17 years old";
    age.parentElement.classList.add("error");
    age.parentElement.classList.remove("success");
  } else {
    age.parentElement.classList.remove("error");
    age.parentElement.classList.add("success");
  }

  if (!tnc.checked) {
    errTnc += "Must agree to Terms and Conditions";
  }

  if (
    errUsername == "" &&
    errEmail == "" &&
    errAge == "" &&
    errPassword == "" &&
    errPassword2 == "" &&
    errTnc == ""
  ) {
    alert("Successfully Registered!");
  }

  errorUsername.innerHTML = errUsername;
  errorEmail.innerHTML = errEmail;
  errorAge.innerHTML = errAge;
  errorPassword.innerHTML = errPassword;
  errorPassword2.innerHTML = errPassword2;
  errorTnc.innerHTML = errTnc;
}
