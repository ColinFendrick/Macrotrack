import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import TextField from 'material-ui/TextField'
import { GridList, GridTile } from 'material-ui/GridList'
import FontIcon from 'material-ui/FontIcon'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const Modal = ({ target }) => (
  <div className='Modal' style={{'display': store.display[`${target}`]}}>
    <div className='modal-window'>
      <div className='modal-window-top'>
        <h4>{target}</h4>
        <TextField hintText='Search for Recipes' />
        <FontIcon className='fa fa-times delete-button'
          onTouchTap={() => store.toggle(target)} />
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
        <GridTile title='Salmon' subtitle='fuck'>
          <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
        </GridTile>
        <GridTile title='Salmon' subtitle='you'>
          <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
        </GridTile>
        <GridTile title='Salmon' subtitle='lebowski'>
          <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
        </GridTile>
      </GridList>
    </div>
  </div>
)

export default observer(Modal)
