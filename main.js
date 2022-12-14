const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", openmodal);
closeBtn.addEventListener("click", closemodal);
window.addEventListener("click", outsideclick);

function openmodal() {
  modal.style.display = "block";
}

function closemodal() {
  modal.style.display = "none";
}

function outsideclick(e) {
  if (e.target == modal) closemodal();
}
