import React from 'react'
import { RecipeCard } from '.'

const RecipeCardList = ({ entries }) => (
  <div className='RecipeCardList'>
    {entries.map(entry =>
      <RecipeCard entry={entry} key={entry._id} />)}
  </div>
)

export default RecipeCardList
