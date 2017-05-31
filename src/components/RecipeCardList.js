import React from 'react'
import { RecipeCard } from '.'
import store from '../store'
import { observer } from 'mobx-react'

const RecipeCardList = () => (
  <div className='RecipeCardList'>
    { store.entries.map((entry, i) =>
      <RecipeCard entry={entry} key={i} />)}
  </div>
)

export default observer(RecipeCardList)
