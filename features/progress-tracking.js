// Initial progress log
let progressLog = [];
let chart;

// Select HTML elements
const goalSelect = document.getElementById("goal-select");
const progressDate = document.getElementById("progress-date");
const progressValue = document.getElementById("progress-value");
const logProgressButton = document.getElementById("log-progress-btn");
const progressList = document.getElementById("progress-list");
const progressChartCanvas = document.getElementById("progress-chart");

// Function to log user progress
function logProgress() {
  const goal = goalSelect.value;
  const date = progressDate.value;
  const value = progressValue.value;

  // Validate input
  if (!date || !value) {
    alert("Please enter both the date and progress value.");
    return;
  }

  const progressEntry = { date, value, goal };
  progressLog.push(progressEntry);

  // Add entry to progress log display
  const listItem = document.createElement("li");
  listItem.textContent = `Goal: ${goal} | Date: ${date} | Value: ${value}`;
  progressList.appendChild(listItem);

  // Clear the inputs
  progressDate.value = "";
  progressValue.value = "";

  // Update the progress chart
  updateProgressChart();
}

// Function to update the progress chart
function updateProgressChart() {
  // Extract dates and values for the chart
  const dates = progressLog.map(entry => entry.date);
  const values = progressLog.map(entry => parseFloat(entry.value));

  // Create the chart if it doesn't exist yet
  if (!chart) {
    chart = new Chart(progressChartCanvas, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Progress",
            data: values,
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Progress Value",
            },
          },
        },
      },
    });
  } else {
    // Update the chart data
    chart.data.labels = dates;
    chart.data.datasets[0].data = values;
    chart.update();
  }
}

// Event listener for logging progress
logProgressButton.addEventListener("click", logProgress);
