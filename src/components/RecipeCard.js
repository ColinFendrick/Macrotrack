import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import store from '../store'
import { observer } from 'mobx-react'

class RecipeCard extends Component {
  state = {
    open: {
      'breakfast': false,
      'lunch': false,
      'dinner': false
    }
  }
  _open = input => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open[input] = true
      return newState
    })
  }
  _close = input => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open[input] = false
      return newState
    })
  }
  _submit = input => {
    this._close(input)
  }
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
          onTouchTap={() => this._open('breakfast')} />
        <FlatButton label='Add to Lunch'
          onTouchTap={() => this._open('lunch')} />
        <FlatButton label='Add to Dinner'
          onTouchTap={() => this._open('dinner')} />
      </CardActions>
      <Dialog
        title='Add Salmon and Stuff to Breakfast'
        actions={[<FlatButton
          label='Cancel'
          primary
          onTouchTap={() => this._close('breakfast')}
              />,
          <FlatButton
            label='Submit'
            primary
            keyboardFocused
            onTouchTap={() => this._submit('breakfast')}
          />]}
        open={this.state.open.breakfast}
    />
      <Dialog
        title='Add Salmon and Stuff to Lunch'
        actions={[<FlatButton
          label='Cancel'
          primary
          onTouchTap={() => this._close('lunch')}
              />,
          <FlatButton
            label='Submit'
            primary
            keyboardFocused
            onTouchTap={() => this._submit('lunch')}
          />]}
        open={this.state.open.lunch}
    />
      <Dialog
        title='Add Salmon and Stuff to Dinner'
        actions={[<FlatButton
          label='Cancel'
          primary
          onTouchTap={() => this._close('dinner')}
              />,
          <FlatButton
            label='Submit'
            primary
            keyboardFocused
            onTouchTap={() => this._submit('dinner')}
          />]}
        open={this.state.open.dinner}
    />
    </Card>
  }
}

export default observer(RecipeCard)
