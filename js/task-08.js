const form = document.querySelector(".login-form");
// const email = document.querySelector("email");
// const password = document.querySelector("password");
// const button = document.querySelector("button");

form.addEventListener("submit", handleSubmit);
let array = {};
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  //  console.log(elements/)
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  // const email = email.value
  // const password = password.value
  array = { email:email.value , password:password.value}

  console.log(array);
  
  event.currentTarget.reset();
}
