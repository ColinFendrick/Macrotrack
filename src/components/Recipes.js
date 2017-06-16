import React, { Component } from 'react'
import { TextField, FlatButton } from 'material-ui'
import { RecipeCard, Filters, AddCustomButtons } from '.'
import { getData } from './api'
import { observer } from 'mobx-react'
import store from '../store'

// If user scrolls to bottom, research and concat results to end so they can keep scrolling
// window.onscroll = e => {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     store.offset += 50
//     store.scroll = true
//     getData()
//   }
// }

class Recipes extends Component {
  state: {
    query: ''
  }
  render () {
    return <div className='Recipes'>
      <div>
        <TextField hintText='Search Recipes'
          onChange={e => {
            // Searches recipes on change
            this.setState({query: e.target.value})
          }} />
        <button type='submit' onClick={() => store._query(this.state.query)}>Submit</button>
        <Filters />
      </div>
      <FlatButton
        label='Add Custom Calorie Entry'
        primary
        onTouchTap={() => store.mealToggle('custom')} />
      <AddCustomButtons meal='Breakfast' />
      <AddCustomButtons meal='Lunch' />
      <AddCustomButtons meal='Dinner' />
      <AddCustomButtons meal='Snack' />

      <div className='recipe-card-list'>
        <div className='RecipeCardList'>
          {/* // Map the API search results */}
          { store.entries.map((entry, i) =>
            <RecipeCard entry={entry} key={i} />)}
        </div>
      </div>
    </div>
  }
}

export default observer(Recipes)
