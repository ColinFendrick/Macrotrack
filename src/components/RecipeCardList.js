import React from 'react'
import { RecipeCard } from '.'
import store from '../store'
import { observer } from 'mobx-react'

const RecipeCardList = () => {
  const list = store.entries ? store.entries.map((entry, i) =>
    <RecipeCard entry={entry} key={i} />)
  : <div />

  return <div className='RecipeCardList'>
    {list}
  </div>
}

export default observer(RecipeCardList)
