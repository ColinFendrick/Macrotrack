import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { RecipeCard, Filters } from '.'
import { getData } from './api'
import { observer } from 'mobx-react'
import store from '../store'

// If user scrolls to bottom, research and concat results to end so they can keep scrolling
window.onscroll = e => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    store.offset += 50
    store.scroll = true
    getData()
  }
}

class Recipes extends Component {
  render () {
    return <div className='Recipes'>
      <div>
        <TextField hintText='Search Recipes'
          onChange={e => {
            // Searches recipes on change
            store.query = e.target.value
          }} />
        <Filters />
      </div>
      <div className='recipe-card-list'>
        <div className='RecipeCardList'>
          { store.entries.map((entry, i) =>
            // Map the API search results
            <RecipeCard entry={entry} key={i} />)}
        </div>
      </div>
    </div>
  }
}

export default observer(Recipes)
