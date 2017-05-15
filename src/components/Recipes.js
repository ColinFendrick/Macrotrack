import React from 'react'
import TextField from 'material-ui/TextField'
import { RecipeCard, Modal } from '.'

const Recipes = () => (
  <div className='Recipes'>
    <TextField hintText='Search Recipes' />
    <div className='recipe-card-list'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
    <Modal target='Breakfast' />
    <Modal target='Lunch' />
    <Modal target='Dinner' />
  </div>
)

export default Recipes
