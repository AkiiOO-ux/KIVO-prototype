// Sidebar toggle
const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');

  // Toggle sidebar on hamburger click
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Optional: close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });


// Show/Hide dashboard sections
function showSection(section) {
  const sections = ['sales', 'purchase', 'stock', 'expense', 'delivery'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(section).classList.remove('hidden');
}

// ======================
// EXPENSE PIE CHART
// ======================
const expenseCtx = document.getElementById('expenseChart').getContext('2d');
const pieChart = new Chart(expenseCtx, {
  type: 'pie',
  data: {
    labels: ['Profit', 'Expense'],
    datasets: [{
      data: [6000, 3356],
      backgroundColor: ['grey', '#FFFFFF'],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#fff', font: { size: 14, weight: 'bold' } }
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    }
  }
});

// ======================
// SALES LINE CHART
// ======================
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Sales',
      data: [2000, 2500, 1800, 3200, 2900],
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: '#fff',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.2)' } },
      y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.2)' } }
    },
    plugins: {
      legend: { labels: { color: '#fff' } }
    }
  }
});

// Update sales chart data
function updateChart(type) {
  let data;
  if (type === "daily") data = [2000, 2500, 1800, 3200, 2900];
  else if (type === "weekly") data = [9000, 8700, 9200, 8800, 9100];
  else data = [37000, 40000, 42000, 41000, 39000];

  salesChart.data.datasets[0].data = data;
  salesChart.update();

  document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tabs button[onclick="updateChart('${type}')"]`).classList.add("active");
}

// Open modal when profile clicked
function profileClick() {
  document.getElementById('profileModal').style.display = 'block';
}

// Close modal
function closeProfileModal() {
  document.getElementById('profileModal').style.display = 'none';
}

// Optional: close modal if click outside the content
window.onclick = function(event) {
  const modal = document.getElementById('profileModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Placeholder functions for buttons
function checkIn() {
  alert('Checked in!');
}
// Show/hide notification popup
function notificationClick() {
  const popup = document.getElementById("notificationPopup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

// Close button for notifications
function closeNotificationPopup() {
  document.getElementById("notificationPopup").style.display = "none";
}

// Close popup when clicking outside it
window.addEventListener("click", function(event) {
  const popup = document.getElementById("notificationPopup");
  if (popup.style.display === "block" && !event.target.closest(".notification") && !event.target.closest("#notificationPopup")) {
    popup.style.display = "none";
  }
});

