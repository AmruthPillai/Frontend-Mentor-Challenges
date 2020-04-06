function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function onSubmit() {
  var formElem = document.getElementsByClassName("form")[0];
  var emailAddress = document.getElementById("emailAddress").value;

  if (validateEmail(emailAddress)) {
    formElem.classList.remove("incorrect");
  } else {
    formElem.classList.add("incorrect");
  }
}
