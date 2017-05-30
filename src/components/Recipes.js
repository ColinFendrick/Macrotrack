import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { RecipeCardList, Filters } from '.'
import { getData } from './api'
import { observer } from 'mobx-react'
import store from '../store'

class Recipes extends Component {
  updateResults (query) {
    getData(query)
  }

  render () {
    return <div className='Recipes'>
      <div>
        <TextField hintText='Search Recipes' onChange={e => this.updateResults(e.target.value)} />
        <Filters />
      </div>
      <div className='recipe-card-list'>
        <RecipeCardList entries={store.entries} />
      </div>
    </div>
  }
}

export default observer(Recipes)
