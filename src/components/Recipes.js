import React, { Component } from 'react'
import { TextField } from 'material-ui'
import { RecipeCardList, Filters } from '.'
import { getData } from './api'
import { observer } from 'mobx-react'

let search

let pos = 75

window.onscroll = e => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    getData(search, pos)
    pos += 50
  }
}

class Recipes extends Component {
  render () {
    return <div className='Recipes'>
      <div>
        <TextField hintText='Search Recipes'
          onChange={e => {
            getData(e.target.value)
            search = e.target.value
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
