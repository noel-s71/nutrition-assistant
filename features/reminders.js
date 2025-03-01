// Initialize an array to store reminders
let reminders = [];

// Elements
const mealTimeInput = document.getElementById('meal-time');
const waterTimeInput = document.getElementById('water-time');
const setRemindersButton = document.getElementById('set-reminders-btn');
const reminderSummary = document.getElementById('reminder-summary');
const reminderList = document.getElementById('reminder-list');
const clearRemindersButton = document.getElementById('clear-reminders-btn');

// Function to set reminders
function setReminders() {
  // Get the meal and water reminder times
  const mealTime = mealTimeInput.value;
  const waterTime = waterTimeInput.value;

  if (!mealTime || !waterTime) {
    alert("Please set both meal and water intake reminder times.");
    return;
  }

  // Store the reminders in the reminders array
  reminders.push({ type: 'Meal', time: mealTime });
  reminders.push({ type: 'Water Intake', time: waterTime });

  // Save the reminders in localStorage (persist the data)
  localStorage.setItem('reminders', JSON.stringify(reminders));

  // Update the reminder summary
  updateReminderSummary();

  // Schedule notifications for the reminders
  scheduleNotifications(mealTime, waterTime);

  // Clear the input fields
  mealTimeInput.value = '';
  waterTimeInput.value = '';
}

// Function to schedule reminders as browser notifications
function scheduleNotifications(mealTime, waterTime) {
  // Convert time to a Date object
  const mealReminderTime = new Date();
  const waterReminderTime = new Date();

  // Set the reminder time for meal
  mealReminderTime.setHours(mealTime.split(':')[0], mealTime.split(':')[1], 0, 0);
  // Set the reminder time for water intake
  waterReminderTime.setHours(waterTime.split(':')[0], waterTime.split(':')[1], 0, 0);

  // Calculate time difference from current time
  const now = new Date();
  const mealTimeDiff = mealReminderTime - now;
  const waterTimeDiff = waterReminderTime - now;

  // Schedule meal reminder notification
  if (mealTimeDiff > 0) {
    setTimeout(() => {
      sendNotification('Meal Time', 'It’s time to eat! Don’t forget your meal!');
    }, mealTimeDiff);
  }

  // Schedule water intake reminder notification
  if (waterTimeDiff > 0) {
    setTimeout(() => {
      sendNotification('Water Intake', 'Time to hydrate! Drink some water.');
    }, waterTimeDiff);
  }
}

// Function to send browser notifications
function sendNotification(title, message) {
  if (Notification.permission === 'granted') {
    new Notification(title, { body: message });
  } else {
    alert('Please enable notifications for this reminder.');
  }
}

// Function to update the reminder summary section
function updateReminderSummary() {
  // Clear the previous summary
  reminderList.innerHTML = '';

  // Loop through reminders and display each one
  reminders.forEach(reminder => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${reminder.type} Reminder:</strong> ${reminder.time}`;
    reminderList.appendChild(listItem);
  });

  // Show reminder summary and hide the form
  document.getElementById('reminder-form').style.display = 'none';
  reminderSummary.style.display = 'block';
}

// Function to allow the user to clear all reminders
function clearReminders() {
  reminders = [];
  localStorage.removeItem('reminders');
  reminderList.innerHTML = '';
  alert('All reminders cleared.');

  // Show the reminder form again
  document.getElementById('reminder-form').style.display = 'block';
  reminderSummary.style.display = 'none';
}

// Check if reminders exist in localStorage and display them
if (localStorage.getItem('reminders')) {
  reminders = JSON.parse(localStorage.getItem('reminders'));
  updateReminderSummary();
} else {
  document.getElementById('reminder-form').style.display = 'block';
  reminderSummary.style.display = 'none';
}

// Event listeners
setRemindersButton.addEventListener('click', setReminders);
clearRemindersButton.addEventListener('click', clearReminders);

// Request Notification Permission (for browser notifications)
if (Notification.permission !== 'granted') {
  Notification.requestPermission();
}
