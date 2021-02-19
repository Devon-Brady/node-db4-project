const express = require('express');
const Recipes = require('./recipes_model');
const router = express.Router();

router.get("/", (req, res) => {
    Recipes.getRecipes().then((recipes) => {
      res.status(200).json(recipes);
    });
  });
  router.get('/:id/list',(req,res)=>{
      const id = req.params.id;
      Recipes.getShoppingList(id)
      .then((data)=>{
          res.status(200).json(data);
      })
      .catch((err)=>{
          res.status(500).json({message:`Server Error: ${err}`})
      });
  });
  router.get('/:id/steps', (req, res) => {
    const id = req.params.id;
    Recipes.getInstructions(id)
      .then(data => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({message:`Server Error: ${err}`})
      })
  })

   module.exports = router