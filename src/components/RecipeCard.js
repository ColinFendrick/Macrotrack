import React from 'react'
import { Card, CardHeader, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import store from '../store'
import { observer } from 'mobx-react'
import { Modal } from '.'

const RecipeCard = () => (
  <Card className='recipe-card'>
    <CardHeader />
    <CardMedia
      overlay={<CardTitle title='Salmon and Stuff' subtitle='Salmon' />}
      >
      <img className='recipe-image' src='https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg' />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </CardText>
    <CardActions>
      <FlatButton label='Add to Breakfast'
        onTouchTap={(() => {
          store.toggle('Breakfast')
        })} />
      <FlatButton label='Add to Lunch'
        onTouchTap={(() => {
          store.toggle('Lunch')
        })} />
      <FlatButton label='Add to Dinner' onTouchTap={(() => {
        store.toggle('Dinner')
      })} />
    </CardActions>
    <Modal target='Breakfast' />
    <Modal target='Lunch' />
    <Modal target='Dinner' />
  </Card>
)

export default observer(RecipeCard)
