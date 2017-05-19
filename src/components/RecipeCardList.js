import React from 'react'
import { RecipeCard } from '.'

const RecipeCardList = ({ entries }) => (
  <div className='RecipeCardList'>
    {entries.map(entry => <RecipeCard />)}
  </div>
)

export default RecipeCardList
