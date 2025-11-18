const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const rememberMe = document.querySelector("#remenber-me");
const dataForm = { email: "", password: "" };

const validEmailInput = (value) => {
  return value === "admin.vivabem@gmail.com";
};
const validPasswordInput = (value) => {
  return value === "adm1n__@123";
};
const createNotificationValid = (type, isCreated = true) => {
  const p = document.querySelector(`.incorret-${type}`);
  return isCreated ? (p.textContent = `${type} está incorreto`) : p.remove();
};

form.addEventListener("submit", (e) => {
  const { email: valueEmail, password: valuePassword } = dataForm;
  e.preventDefault();

  console.log(valueEmail, validEmailInput(valueEmail));

  if (validEmailInput(valueEmail) && validPasswordInput(valuePassword)) {
    window.location = "./home.html";
  } else {
    const p = document.querySelector(`.incorret-Send`);
    p.textContent =
      "Não foi possivel entrar, por favor verifique as informações";
  }
});

email.addEventListener("change", (e) => {
  const { value } = e.target;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(value)) {
    dataForm.email = value;
    email.classList.remove("incorret");
    createNotificationValid("Email", false);
  } else {
    console.log(emailRegex.test(value));
    createNotificationValid("Email");
    email.classList.add("incorret");
  }
});

password.addEventListener("change", (e) => {
  const { value } = e.target;
  const removedSpaceInInput = value.replace(/\s+/g, "");

  if (!value || removedSpaceInInput.length === 0) {
    createNotificationValid("Password");
    password.classList.add("incorret");
  } else {
    dataForm.password = value;
  }
});
