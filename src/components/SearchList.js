import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'

const Searchlist = ({ entries }) => (
  <GridList cellHeight={180}>
    {entries.map(entry => <GridTile title='salmon'>
      <img src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
    </GridTile>)}
  </GridList>
)

export default Searchlist
