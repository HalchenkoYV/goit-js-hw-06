const form = document.querySelector(".login-form");
// const email = document.querySelector("email");
// const password = document.querySelector("password");
// const button = document.querySelector("button");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
//  console.log(elements/)
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

    const array = `${form.email.name}:${email.value}, ${form.password.name}:${password.value}`
  console.log(array);
  event.currentTarget.reset();
}
