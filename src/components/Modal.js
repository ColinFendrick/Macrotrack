import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import { GridList, GridTile } from 'material-ui/GridList'

const Modal = ({ target }) => (
  <div className='Modal' style={{'display': store.display[`${target}`]}}>
    <div className='modal-window'>
      {target}
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
