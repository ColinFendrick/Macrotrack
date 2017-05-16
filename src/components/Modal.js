import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import TextField from 'material-ui/TextField'
import { GridList, GridTile } from 'material-ui/GridList'
import FontIcon from 'material-ui/FontIcon'

const Modal = ({ target }) => (
  <div className='Modal' style={{'display': store.display[`${target}`]}}>
    <div className='modal-window'>
      <div className='modal-window-top'>
        <h4>{target}</h4>
        <TextField hintText='Search for Recipes' />
        <FontIcon className='fa fa-camera-retro'
          onTouchTap={() => store.toggle(target)} />
        <div onClick={() => store.toggle(target)}>X</div>
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
