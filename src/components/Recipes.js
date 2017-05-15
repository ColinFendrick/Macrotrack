import React from 'react'
import TextField from 'material-ui/TextField'
import { RecipeCard } from '.'

const Recipes = () => (
  <div className='Recipes'>
    <TextField hintText='Search Recipes' />
    <div className='recipe-card-list'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </div>
)

export default Recipes
