const password = document.getElementById("password");
const icon = document.querySelector(".visible-eye");

let passwordType = password.type;

const showPassword = () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    icon.classList.add("hide");
  } else {
    password.setAttribute("type", passwordType);
    icon.classList.remove("hide");
  }
};
