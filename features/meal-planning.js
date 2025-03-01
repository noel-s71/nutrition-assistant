// Define food items with ingredients (this can be expanded or fetched from a database)
const foodDatabase = [
    { name: "Apple", ingredients: ["Apple"] },
    { name: "Banana", ingredients: ["Banana"] },
    { name: "Chicken Breast", ingredients: ["Chicken Breast", "Olive Oil", "Garlic"] },
    { name: "Rice", ingredients: ["Rice", "Water"] },
    { name: "Salad", ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive Oil"] },
    { name: "Cereal", ingredients: ["Cereal", "Milk"] }
  ];
  
  let mealPlan = {}; // Store the meals for the week
  let shoppingList = new Set(); // Using a Set to avoid duplicate ingredients
  
  // Elements
  const mealDaySelect = document.getElementById('meal-day');
  const mealTypeSelect = document.getElementById('meal-type');
  const mealFoodSelect = document.getElementById('meal-food');
  const addMealButton = document.getElementById('add-meal-btn');
  const mealPlanList = document.getElementById('meal-plan-list');
  const shoppingListSummary = document.getElementById('shopping-list-summary');
  const shoppingListUl = document.getElementById('shopping-list');
  const generateShoppingListButton = document.getElementById('generate-shopping-list-btn');
  
  // Populate food items into the select dropdown
  function populateFoodSelect() {
    mealFoodSelect.innerHTML = '';
    foodDatabase.forEach(food => {
      const option = document.createElement('option');
      option.value = food.name;
      option.textContent = food.name;
      mealFoodSelect.appendChild(option);
    });
  }
  
  // Add meal to the meal plan
  function addMealToPlan() {
    const day = mealDaySelect.value;
    const type = mealTypeSelect.value;
    const foodName = mealFoodSelect.value;
  
    if (!mealPlan[day]) mealPlan[day] = {};
    if (!mealPlan[day][type]) mealPlan[day][type] = [];
  
    mealPlan[day][type].push(foodName);
  
    updateMealPlanSummary();
    updateShoppingList(foodName);
  }
  
  // Update meal plan summary
  function updateMealPlanSummary() {
    mealPlanList.innerHTML = '';
    Object.keys(mealPlan).forEach(day => {
      const dayItem = document.createElement('li');
      dayItem.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)}:`;
  
      const mealTypes = mealPlan[day];
      Object.keys(mealTypes).forEach(type => {
        const mealItem = document.createElement('ul');
        mealItem.innerHTML = `<strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong>`;
        mealTypes[type].forEach(food => {
          const foodItem = document.createElement('li');
          foodItem.textContent = food;
          mealItem.appendChild(foodItem);
        });
        dayItem.appendChild(mealItem);
      });
      mealPlanList.appendChild(dayItem);
    });
  }
  
  // Update shopping list based on meals planned
  function updateShoppingList(foodName) {
    const food = foodDatabase.find(f => f.name === foodName);
    food.ingredients.forEach(ingredient => shoppingList.add(ingredient));
  
    updateShoppingListSummary();
  }
  
  // Update shopping list summary
  function updateShoppingListSummary() {
    shoppingListUl.innerHTML = '';
    shoppingList.forEach(ingredient => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      shoppingListUl.appendChild(ingredientItem);
    });
  }
  
  // Generate shopping list button click handler
  generateShoppingListButton.addEventListener('click', () => {
    alert('Shopping list generated!');
  });
  
  // Add event listener to the "Add Meal" button
  addMealButton.addEventListener('click', addMealToPlan);
  
  // Initialize the app
  populateFoodSelect();
  