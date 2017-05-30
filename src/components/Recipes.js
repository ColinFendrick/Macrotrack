import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import { RecipeCardList } from '.'
import { getData } from './api'
import store from '../store'

class Recipes extends Component {
  state = {
    entries: []
  }

  updateResults (query) {
    getData(query)
    // .then(r => this.setState({ entries: r.hits }))
  }

  render () {
    return <div className='Recipes'>
      <div>
        <TextField hintText='Search Recipes' onChange={e => this.updateResults(e.target.value)} />
        <Toggle
          defaultToggled={store.toggle}
          label='Show only foods within budget'
          onTouchTap={() => store._toggle} />
      </div>
      <div className='recipe-card-list'>
        <RecipeCardList entries={this.state.entries} />
      </div>
    </div>
  }
}

export default Recipes
