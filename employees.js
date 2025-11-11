document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("salesChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Oct. 10", "Oct. 11", "Oct. 12", "Oct. 13", "Oct. 14", "Oct. 15", "Oct. 16"],
      datasets: [
        {
          label: "Paolo V.",
          data: [4000, 2000, 4500, 3000, 3500, 4000, 5000],
          backgroundColor: "#5ca2cd",
          borderRadius: 5,
        },
        {
          label: "Mia S.",
          data: [2000, 3500, 4500, 1500, 2500, 3500, 4000],
          backgroundColor: "#f7e58a",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
          labels: { color: "#2a3a3f", boxWidth: 12 },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: "#2a3a3f" },
          grid: { display: false },
        },
        y: {
          stacked: true,
          ticks: { color: "#2a3a3f" },
          grid: { color: "rgba(0,0,0,0.05)" },
        },
      },
    },
  });
});
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
