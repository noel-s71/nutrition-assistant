document.getElementById('food-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const foodName = document.getElementById('food-name').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    const foodType = document.getElementById('food-type').value;
  
    // Nutrition database (simplified for demonstration purposes)
    const nutritionDatabase = {
      fruit: { calories: 52, carbs: 14, protein: 0.3, fat: 0.2 },
      vegetable: { calories: 25, carbs: 5, protein: 1.5, fat: 0.3 },
      protein: { calories: 250, carbs: 0, protein: 30, fat: 12 },
      grain: { calories: 100, carbs: 20, protein: 3, fat: 1 },
      dairy: { calories: 60, carbs: 5, protein: 4, fat: 3.5 },
    };
  
    const foodData = nutritionDatabase[foodType];
  
    // Calculate nutrients based on quantity
    const foodCalories = (foodData.calories * quantity) / 100;
    const foodCarbs = (foodData.carbs * quantity) / 100;
    const foodProtein = (foodData.protein * quantity) / 100;
    const foodFat = (foodData.fat * quantity) / 100;
  
    // Update the log
    const logList = document.getElementById('log-list');
    const logItem = document.createElement('li');
    logItem.textContent = `${foodName} - ${quantity}g | Calories: ${foodCalories.toFixed(2)} | Carbs: ${foodCarbs.toFixed(2)}g | Protein: ${foodProtein.toFixed(2)}g | Fat: ${foodFat.toFixed(2)}g`;
  
    logList.appendChild(logItem);
  
    // Update the summary
    updateSummary(foodCalories, foodCarbs, foodProtein, foodFat);
  });
  
  let totalCalories = 0;
  let totalCarbs = 0;
  let totalProteins = 0;
  let totalFats = 0;
  
  function updateSummary(calories, carbs, protein, fat) {
    totalCalories += calories;
    totalCarbs += carbs;
    totalProteins += protein;
    totalFats += fat;
  
    document.getElementById('calories').textContent = `Total Calories: ${totalCalories.toFixed(2)} kcal`;
    document.getElementById('carbs').textContent = `Carbohydrates: ${totalCarbs.toFixed(2)}g`;
    document.getElementById('proteins').textContent = `Proteins: ${totalProteins.toFixed(2)}g`;
    document.getElementById('fats').textContent = `Fats: ${totalFats.toFixed(2)}g`;
  }
  