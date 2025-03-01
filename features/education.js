// Data for Articles, Tips, and Recipes
const articles = [
    {
      title: 'The Importance of Balanced Diet',
      url: 'https://www.example.com/articles/balanced-diet',
      description: 'Learn why a balanced diet is crucial for maintaining overall health.'
    },
    {
      title: 'Understanding Macronutrients and Micronutrients',
      url: 'https://www.example.com/articles/macro-micro-nutrients',
      description: 'Get to know the difference between macronutrients and micronutrients and their role in your health.'
    },
    {
      title: 'How to Stay Hydrated and Why It Matters',
      url: 'https://www.example.com/articles/stay-hydrated',
      description: 'Find out how water plays a critical role in your daily nutrition and health.'
    }
  ];
  
  const tips = [
    'Drink at least 8 glasses of water daily.',
    'Incorporate more fruits and vegetables into your meals.',
    'Avoid processed sugars and opt for natural sweeteners.',
    'Eat smaller portions but more frequently throughout the day.',
    'Make sure to get enough sleep for better health and weight management.'
  ];
  
  const recipes = [
    {
      name: 'Healthy Avocado Salad',
      ingredients: 'Avocado, cucumber, tomatoes, olive oil, lemon juice, salt, pepper.',
      directions: 'Mix all the ingredients in a bowl and serve as a refreshing salad.'
    },
    {
      name: 'Quinoa and Chickpea Bowl',
      ingredients: 'Quinoa, chickpeas, spinach, olive oil, lemon, salt, pepper.',
      directions: 'Cook quinoa and chickpeas, then mix with spinach and drizzle with olive oil and lemon juice.'
    },
    {
      name: 'Banana Oatmeal Pancakes',
      ingredients: 'Oats, banana, eggs, almond milk, baking powder, cinnamon.',
      directions: 'Blend the ingredients and cook pancakes on a skillet until golden brown.'
    }
  ];
  
  // Function to display articles
  function displayArticles() {
    const articlesList = document.getElementById('articles-list');
    articles.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${article.url}" target="_blank">
          <strong>${article.title}</strong>: ${article.description}
        </a>
      `;
      articlesList.appendChild(li);
    });
  }
  
  // Function to display tips
  function displayTips() {
    const tipsList = document.getElementById('tips-list');
    tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });
  }
  
  // Function to display recipes
  function displayRecipes() {
    const recipesList = document.getElementById('recipes-list');
    recipes.forEach(recipe => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${recipe.name}</strong><br>
        Ingredients: ${recipe.ingredients}<br>
        Directions: ${recipe.directions}
      `;
      recipesList.appendChild(li);
    });
  }
  
  // Call functions to populate content on page load
  displayArticles();
  displayTips();
  displayRecipes();
  