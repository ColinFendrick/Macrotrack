import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import store from '../store'
import { observer } from 'mobx-react'

class RecipeCard extends Component {
  state = {
    open: false,
    dialog: ''
  }
  _open = input => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open = true
      newState.dialog = `Add Salmon to ${input}`
      return newState
    })
  }
  _close = () => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open = false
      newState.dialog = ''
      return newState
    })
  }
  _submit = () => {
    this._close()
  }
  action = [<FlatButton
    label='Cancel'
    primary
    onTouchTap={() => this._close()}
        />,
    <FlatButton
      label='Submit'
      primary
      onTouchTap={() => this._submit()}
    />]
  render () {
    return <Card className='recipe-card'>
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
          onTouchTap={() => this._open('Breakfast')} />
        <FlatButton label='Add to Lunch'
          onTouchTap={() => this._open('Lunch')} />
        <FlatButton label='Add to Dinner'
          onTouchTap={() => this._open('Dinner')} />
      </CardActions>
      <Dialog
        title={this.state.dialog}
        actions={this.action}
        open={this.state.open}
    />
    </Card>
  }
}

export default observer(RecipeCard)
