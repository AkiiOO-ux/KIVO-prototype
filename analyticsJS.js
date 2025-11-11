// ==== BAR TOGGLE ====
function changeData(type) {
    const salesData = [90, 80, 70, 60, 50];
    const unitsData = [60, 75, 85, 70, 55];
    const bars = document.querySelectorAll(".fill");
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    if (type === "sales") buttons[0].classList.add("active");
    else buttons[1].classList.add("active");

    const data = type === "sales" ? salesData : unitsData;
    bars.forEach((bar, i) => {
        bar.style.width = data[i] + "%";
    });
}

// ==== BRANCH COMPARISON CHART ====
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("branchChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Oct. 10", "Oct. 11", "Oct. 12", "Oct. 13", "Oct. 14", "Oct. 15", "Oct. 16"],
            datasets: [
                {
                    label: "Main Branch",
                    data: [1200, 4600, 5000, 4000, 3800, 4900, 4600],
                    borderColor: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                },
                {
                    label: "2nd Branch",
                    data: [1000, 2200, 2600, 2700, 2800, 2000, 2300],
                    borderColor: "#f5d36a",
                    backgroundColor: "rgba(245,211,106,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                },
                {
                    label: "3rd Branch",
                    data: [900, 2500, 3100, 1500, 1200, 1000, 2000],
                    borderColor: "#78b8e0",
                    backgroundColor: "rgba(120,184,224,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                },
                {
                    label: "4th Branch",
                    data: [800, 2000, 1500, 3000, 4000, 4500, 4200],
                    borderColor: "#8fc2e2",
                    backgroundColor: "rgba(143,194,226,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                    labels: { color: "white" }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: { color: "white" },
                    grid: { color: "rgba(255,255,255,0.2)" }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "white" },
                    grid: { color: "rgba(255,255,255,0.2)" }
                }
            }
        }
    });
});

// ==== TREND FORECASTING CHART ====
document.addEventListener("DOMContentLoaded", function() {
    const ctxTrend = document.getElementById("trendChart").getContext("2d");

    new Chart(ctxTrend, {
        type: "line",
        data: {
            labels: ["Oct. 10", "Oct. 11", "Oct. 12", "Oct. 13", "Oct. 14", "Oct. 15", "Oct. 16", "Oct. 17"],
            datasets: [
                {
                    label: "Actual",
                    data: [7500, 7700, 8200, 6000, 6500, 8000, 9000, 9500],
                    borderColor: "#ffffff",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                },
                {
                    label: "Forecasted",
                    data: [6800, 7200, 7900, 7000, 6000, 7200, 8500, 9300],
                    borderColor: "#f5d36a",
                    backgroundColor: "rgba(245,211,106,0.2)",
                    borderWidth: 2,
                    tension: 0.3,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                    labels: { color: "white" }
                },
                title: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: { color: "white" },
                    grid: { color: "rgba(255,255,255,0.2)" }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "white" },
                    grid: { color: "rgba(255,255,255,0.2)" }
                }
            }
        }
    });
});
