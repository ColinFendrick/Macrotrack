import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { RecipeCardList, Filters } from '.'
import { getData } from './api'
import { observer } from 'mobx-react'
import store from '../store'

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
            store.query = e.target.value
          }} />
        <Filters />
      </div>
      <div className='recipe-card-list'>
        <RecipeCardList />
      </div>
    </div>
  }
}

export default observer(Recipes)
