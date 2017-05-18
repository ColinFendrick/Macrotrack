import React from 'react'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import { RecipeCard } from '.'

const Recipes = () => (
  <div className='Recipes'>
    <div>
      <TextField hintText='Search Recipes' />
      <Toggle label='Show only foods within budget' />
      <Toggle label='Vegetarian' />
    </div>
    <div className='recipe-card-list'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </div>
)

export default Recipes
