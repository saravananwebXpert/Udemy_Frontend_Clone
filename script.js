const login = document.getElementById("login");
const loginsec = document.getElementById("loginsection");
login.addEventListener("click", () => {
  loginsection.style.display = "block";
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
  loginsection.style.display = "none";
});

const closed = document.getElementById("closed");
close.addEventListener("click", () => {
  loginsection.style.display = "none";
});
