function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function onSubmit() {
  var firstName = document.getElementsByClassName("first-name form-group")[0];
  var firstNameInput = document.getElementById("firstName").value;

  var lastName = document.getElementsByClassName("last-name form-group")[0];
  var lastNameInput = document.getElementById("lastName").value;

  var emailAddress = document.getElementsByClassName(
    "email-address form-group"
  )[0];
  var emailAddressInput = document.getElementById("emailAddress").value;

  var password = document.getElementsByClassName("password form-group")[0];
  var passwordInput = document.getElementById("password").value;

  if (firstNameInput === "") {
    firstName.classList.add("incorrect");
    firstName.getElementsByTagName("div")[0].innerHTML =
      "First name cannot be empty";
  } else {
    firstName.classList.remove("incorrect");
    firstName.getElementsByTagName("div")[0].innerHTML = "";
  }

  if (lastNameInput === "") {
    lastName.classList.add("incorrect");
    lastName.getElementsByTagName("div")[0].innerHTML =
      "Last name cannot be empty";
  } else {
    lastName.classList.remove("incorrect");
    lastName.getElementsByTagName("div")[0].innerHTML = "";
  }

  if (emailAddressInput === "") {
    emailAddress.classList.add("incorrect");
    emailAddress.getElementsByTagName("div")[0].innerHTML =
      "Email address cannot be empty";
  } else if (!validateEmail(emailAddressInput)) {
    emailAddress.classList.add("incorrect");
    emailAddress.getElementsByTagName("div")[0].innerHTML =
      "This doesn't look like an email";
  } else {
    emailAddress.classList.remove("incorrect");
    emailAddress.getElementsByTagName("div")[0].innerHTML = "";
  }

  if (passwordInput === "") {
    password.classList.add("incorrect");
    password.getElementsByTagName("div")[0].innerHTML =
      "Password cannot be empty";
  } else {
    password.classList.remove("incorrect");
    password.getElementsByTagName("div")[0].innerHTML = "";
  }
}
