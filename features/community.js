// Initialize variables to simulate user data
let friendsList = []; // List of friends (in real-world, would be fetched from a server or database)
let inChallenge = false; // To track if the user is in a challenge

// Select DOM elements
const searchUserInput = document.getElementById('search-user');
const addFriendBtn = document.getElementById('add-friend-btn');
const friendListElement = document.getElementById('friend-list');
const challengeBtn = document.getElementById('challenge-btn');
const challengeStatusElement = document.getElementById('challenge-status');
const shareBtn = document.getElementById('share-btn');

// Event Listener to Add Friends
addFriendBtn.addEventListener('click', function () {
  const username = searchUserInput.value.trim();
  if (username && !friendsList.includes(username)) {
    friendsList.push(username);
    updateFriendList();
    alert(`${username} added as a friend!`);
    searchUserInput.value = ''; // Clear the input
  } else if (friendsList.includes(username)) {
    alert('You are already friends with this user!');
  } else {
    alert('Please enter a valid username!');
  }
});

// Function to update the friend list UI
function updateFriendList() {
  friendListElement.innerHTML = '';
  friendsList.forEach(friend => {
    const li = document.createElement('li');
    li.textContent = friend;
    friendListElement.appendChild(li);
  });
}

// Event Listener for Joining a Challenge
challengeBtn.addEventListener('click', function () {
  if (!inChallenge) {
    inChallenge = true;
    challengeStatusElement.textContent = 'You have joined the "Water Challenge"!';
    alert('You have successfully joined the "Water Challenge"!');
  } else {
    alert('You are already in a challenge!');
  }
});

// Event Listener for Social Media Sharing
shareBtn.addEventListener('click', function () {
  // Use the Share API (for browsers that support it)
  if (navigator.share) {
    navigator.share({
      title: 'My Food and Fitness Progress',
      text: 'I just completed a health challenge and am tracking my meals!',
      url: window.location.href,
    })
    .then(() => console.log('Sharing was successful'))
    .catch((error) => console.log('Sharing failed', error));
  } else {
    // Fallback if the Share API is not supported
    alert('Sharing not supported on this browser. You can manually share via other platforms.');
  }
});

// For demonstration purposes, add some default friends and a challenge
friendsList = ['Alice', 'Bob', 'Charlie'];
updateFriendList();

// You could implement a feature to pull real user data here, as well as sending requests to APIs for friends, challenges, and progress.
