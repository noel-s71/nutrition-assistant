document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user input values
    const name = document.getElementById('full-name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const goal = document.getElementById('goal').value;
  
    // Display the profile summary
    document.getElementById('summary-name').textContent = `Name: ${name}`;
    document.getElementById('summary-age').textContent = `Age: ${age}`;
    document.getElementById('summary-gender').textContent = `Gender: ${gender}`;
    document.getElementById('summary-weight').textContent = `Weight: ${weight} kg`;
    document.getElementById('summary-height').textContent = `Height: ${height} cm`;
    document.getElementById('summary-goal').textContent = `Health Goal: ${goal}`;
  
    // Hide the form and show the profile summary
    document.getElementById('profile-form').style.display = 'none';
    document.getElementById('profile-summary').style.display = 'block';
  });
  