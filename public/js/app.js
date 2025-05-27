let modal = document.getElementById("modal")
let btn = document.querySelector(".my-btn")
let loginBtn = document.getElementById("login-btn")
btn.addEventListener("click", () => {
  modal.style.display = "flex"
})
loginBtn.addEventListener("click", () => {
  modal.style.display = "none"
})