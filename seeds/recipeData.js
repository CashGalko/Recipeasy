const { Recipe } = require('../models');

const recipedata = [
  {
    "instructions": "Toss ingredients lightly and spoon into a buttered baking dish. Top with additional crushed cracker crumbs, and brush with melted butter. Bake in a preheated at 350 degrees oven for 25 to 30 minutes or until delicately browned.",
    "ingredients": [
      "1/2 cup celery, finely chopped",
      "1 small green pepper finely chopped",
      "1/2 cup finely sliced green onions",
      "1/4 cup chopped parsley",
      "1 pound crabmeat",
      "1 1/4 cups coarsely crushed cracker crumbs",
      "1/2 teaspoon salt",
      "3/4 teaspoons dry mustard",
      "Dash hot sauce",
      "1/4 cup heavy cream",
      "1/2 cup melted butter"
    ],
    "title": "Grammie Hamblet's Deviled Crab",
    "picture_link": null
  },
  {
    "instructions": "Watch how to make this recipe.\nSprinkle the steak with salt and pepper. Set aside.\nIn a large Dutch oven (preferably enameled cast iron) over medium-high heat, render the bacon until just starting to crisp, 6 to 7 minutes, stirring as needed. Remove 1 tablespoon of the bacon fat and set aside. Add the onions and jalapenos and cook until the onions are translucent, about 5 minutes more. Add in the garlic cook 1 to 2 minutes. Remove all from the pot to a small bowl. Set aside.\nWipe down the inside of the pot, add the reserved 1 tablespoon bacon fat and, when starting to smoke, add in 1/3 to 1/2 of the steak and cook, stirring as needed until just starting to brown, about 8 minutes. Remove to the vegetable bowl, repeat with the remaining steak.\nOnce the steak is cooked, deglaze with 1 tablespoon apple cider vinegar. Then return all the vegetables and cooked steak back to the pot and add in the beans, including the liquid in the can. Add the molasses, brown sugar, soy and ketchup, and stir to combine. Bring to a simmer over low heat, cover and cook for 2 hours, stirring every 20 to 30 minutes to assure that the bottom doesn't stick.\nAdd in more apple cider vinegar, a few tablespoons at a time to personal taste, and serve with crusty bread.",
    "ingredients": [
      "2 pounds skirt steak, cut into 1/2-inch dice",
      "Kosher salt and fresh cracked black pepper",
      "4 to 6 slices thick-cut applewood smoked bacon, 1/4-inch diced (about 1 cup)",
      "1 1/2 cups 1/4-inch diced red onion",
      "1/2 cup seeded and finely diced jalapenos (2 medium)",
      "3 tablespoons minced garlic",
      "1 teaspoon kosher salt",
      "2 teaspoons fresh cracked black pepper",
      "Apple cider vinegar, best quality",
      "1 (15-ounce) can cannellini beans, with liquid",
      "1 (15-ounce) can lima beans, with liquid",
      "1 (15-ounce) can kidney beans, with liquid",
      "1/3 cup molasses",
      "2 tablespoons dark brown sugar",
      "3 tablespoons soy sauce",
      "1/3 cup ketchup",
      "Crusty bread, for serving"
    ],
    "title": "Infineon Raceway Baked Beans",
    "picture_link": "Ja5uaD8Q7m7vvtWwk2.48dr1eCre/qi"
  },
  {
    "instructions": "In a large saucepan, let the beans soak in enough cold water to cover for 1 hour and drain. Return the beans to the pan with the 8 cups of water and garlic. Bring the water to a boil, lower the heat, and simmer until tender, about 1 hour.\nMeanwhile, heat the oil in a large heavy skillet over moderate heat. Add the pepper, onion, and cumin and cook, stirring, until softened.\nDrain the beans and reserve 1/2 cup of them. Add the remaining beans to the pepper mixture with the remaining 1/4 cup water, and simmer, covered, until very tender, about 15 minutes.\nIn a food processor, blend bean mixture with the vinegar and pulse until well combined but not pureed smooth. Season the dip with salt, pepper, and vinegar. Transfer to a serving bowl, and stir in the reserved 1/2 cup beans. Let the dip cool to room temperature or chill.\nWhen to serve, garnish the dip with the reserved bell pepper, onion, tomato, chile, cilantro leaves, and sour cream. Serve with the tortilla chips.",
    "ingredients": [
      "1 1/2 cups dried black beans, picked over and rinsed",
      "8 cups water, plus 1/4 cup",
      "2 cloves garlic",
      "3 tablespoons vegetable oil",
      "1 large green bell pepper, finely chopped, reserving about 1 teaspoon for garnish",
      "1 small red onion, finely chopped, reserving about 1 teaspoon for garnish",
      "2 teaspoons ground cumin",
      "2 tablespoons cider vinegar",
      "Salt and pepper",
      "1 plum tomato, finely chopped",
      "1 small red chile, finely chopped",
      "Fresh cilantro leaves, for garnish",
      "Dollop sour cream, for garnish",
      "Serving Suggestion: Tortilla chips"
    ],
    "title": "Southwestern Black Bean Dip",
    "picture_link": null
  },
];

function splitRecipe() {

  var newRecArray = [];

  for (let i = 0; i < recipedata.length; i++) {

    var fixedRec = {};

    fixedRec.instructions = recipedata[i].instructions;
    fixedRec.title = recipedata[i].title;
    fixedRec.picture_link = recipedata[i].picture_link;
    fixedRec.ingredients = recipedata[i].ingredients.toString();

    newRecArray.push(fixedRec);

  }
  return Recipe.bulkCreate(newRecArray);
}

module.exports = splitRecipe;
