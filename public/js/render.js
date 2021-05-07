// Test query
const renderTarget = async (param) => {

    if (param) {
        const response = await fetch('/api/recipe/' + param, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log('Success!');
        } else {
            alert('Failed to obtain data.');
        }
    }
}

// Test query
router.get('/:query', async (req, res) => {
    if (typeof req.params.query === "string") {
        try {
            console.log("Querying for: " + req.params.query);
            const recipeData = await Recipe.findAll({
              where: {
                title: {
                  [Op.substring]: `${req.params.query}`,
                }
              }
            });
            const fixedRecipes = recipeData.map((recipe) => recipe.get({ plain: true }));
            console.log(fixedRecipes);
            res.render('search', {fixedRecipes});
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
    } else if (typeof req.params.query === "number") {
        try {
            console.log("Querying for: " + req.params.query);
            const recipeData = await Recipe.findByPk(req.params.query)
            const fixedRec = recipeData.get({ plain: true });
            console.log(fixedRec);
            res.render('render-single-recipe', {fixedRec});
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
    }
  });