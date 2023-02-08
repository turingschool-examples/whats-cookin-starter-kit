// import './styles.css';
// import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'




const recipeNames = [
    'Loaded Chocolate Chip Pudding Cookie Cups',
    'Maple Dijon Apple Cider Grilled Pork Chops',
    "Dirty Steve's Original Wing Sauce",
    'Elvis Pancakes',
    'Mock Udi’s Gluten Free Whole Grain Bread',
    'Ambrosia Cupcakes',
    'Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)',
    'Sesame Cookies',
    'Thai Chicken Tenders with Broiled Pineapple Slaw',
    'Egg and Rapini Casserole',
    'Pulled Pork',
    'Pumpkin Cheesecake Breakfast Smoothie',
    'Cinnamon Raisin Overnight French Toast w/ Apple Filling',
    'Brown Butter Garlic Shrimp',
    'Baked Stuffed Artichokes',
    'Puppy Chow Cookies',
    'Easy Creamy Potato Salad with Yogurt',
    'Slow-Cooker Italian-Stuffed Peppers',
    'Whole Wheat Milk and Honey Sandwich Bread',
    'The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies',
    'Butterscotch Pudding',
    'quinoa tabbouleh',
    'Birthday Cake Jello Shots',
    'Artichoke Spinach Dip Stuffed Mushrooms',
    'Baked Manicotti with Sausage and Peas',
    'Spinach Artichoke Quinoa Casserole',
    'Double Raspberry Soufflés',
    'A Cake To Warm Any Heart – Banana Split Cake',
    'Avocado Chickpea Salad',
    'Slow Cooker Peach Cobbler',
    '4 Cheese White Pizza',
    'Cereal Marshmallow Bars',
    'Hummus Deviled Eggs',
    'Creamsicle Pie',
    'Smothered Green Beans',
    'Pear & Walnut Salad with a Pear Vinaigrette',
    'Mexican Vegetables on Cornbread',
    'Barbecue Shrimp Stir-Fry',
    'Clayudas',
    'Farro with Shiitake Mushrooms and Baby Spinach',
    'Bang Bang Shrimp with Napa Cabbage Slaw',
    'Homemade Italian Meatballs',
    'Curried Strawberry Chicken Salad',
    'Bacon Wrapped Stuffed Pork Tenderloin',
    'Rolo Cookie Bars',
    'Buffalo Chicken Sliders',
    "Reese's Pieces Peanut Butter Cookies",
    'Farmer’s Market Flatbread Pizza',
    'Vegan Lentil Loaf',
    'Pastry Cream'
  ]

const recipeSection = document.getElementById('allRecipes')
window.addEventListener('load', createRecipeCards)

function createRecipeCards() {
    let count = 0
    recipeNames.forEach(recipe => {
        count++
        let size = (2 - (recipe.length / 65)).toFixed(2)
        recipeSection.innerHTML += `
        <article class="recipe-card" id="recipe${count}">
            <img class="recipe-img" src="../src/images/cookies-placeholder.jpeg" alt="Cookies placeholder">
            <img class="star-icon hidden" id="star-icon" src="../src/images/star-icon.png" alt="This recipe is in my recipes!">
            <h3 style="font-size: ${size}rem">${recipe}</h3>
        </article>`
    })
}