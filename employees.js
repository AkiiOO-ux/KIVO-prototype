// ROLE PERMISSIONS TOGGLE FUNCTIONALITY
document.querySelectorAll('.toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
  });
});

// POPUP MODAL FOR ADD EMPLOYEE
const modal = document.getElementById("employeeModal");
const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("employeeForm");
const successMsg = document.getElementById("successMsg");

addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  successMsg.style.display = "none";
  form.reset();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
});
