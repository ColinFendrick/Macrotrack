import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import TextField from 'material-ui/TextField'
import { GridList, GridTile } from 'material-ui/GridList'
import FontIcon from 'material-ui/FontIcon'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { AddFood } from '.'
import { get } from './api'

class Modal extends Component {
  state = {
    entries: []
  }
  componentDidMount () {
    this.updateResults()
  }
  updateResults () {
    get().then(entries => this.setState({ entries }))
    console.log(this.state)
  }
  render () {
    return <div className='Modal' style={{'display': store.display[`${this.props.target}`]}}>
      <div className='modal-window'>
        <div className='modal-window-top'>
          <h4>{this.props.target}</h4>
          <TextField hintText='Search for Recipes' onChange={() => updateResults()} />
          <FontIcon className='fa fa-times delete-button'
            onTouchTap={() => store.toggle(this.props.target)} />
        </div>
        <div className='filters'>
          <Toggle label='Show only foods within budget' />
          <Toggle label='Vegetarian' />
          <DropDownMenu value={store.filter} onChange={(_, x, value) => store._filter(value)}>
            <MenuItem primaryText='Filter By' value={0} />
            <MenuItem primaryText='Calories: Lowest to Highest' value={1} />
            <MenuItem primaryText='Calories: Highest to Lowest' value={2} />
            <MenuItem primaryText='Protein: Lowest to Highest' value={3} />
            <MenuItem primaryText='Protein: Highest to Lowest' value={4} />
            <MenuItem primaryText='Carbs: Lowest to Highest' value={5} />
            <MenuItem primaryText='Carbs: Highest to Lowest' value={6} />
            <MenuItem primaryText='Fats: Lowest to Highest' value={7} />
            <MenuItem primaryText='Fats: Highest to Lowest' value={8} />
          </DropDownMenu>
        </div>
        <GridList cellHeight={180}>
          <GridTile title='Salmon'>
            <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
          </GridTile>
          <GridTile title='Salmon' subtitle='subtitles'>
            <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
          </GridTile>
          <GridTile title='Salmon' subtitle='subtitles'>
            <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
          </GridTile>
          <GridTile title='Salmon' subtitle='subtitles'>
            <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
          </GridTile>
        </GridList>
        <div className='add-custom'>
          <FloatingActionButton>
            <ContentAdd onTouchTap={() => store.toggle('add')} />
          </FloatingActionButton>
        </div>
        <AddFood />
      </div>
    </div>
  }
}

export default observer(Modal)
