import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import store from '../store'
import { observer } from 'mobx-react'

class RecipeCard extends Component {
  state = {
    open: false,
    food: {},
    dialog: '',
    meal: ''
  }
  _open = (food, meal) => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open = true
      newState.food = food
      newState.dialog = `Add ${food.item_name} to ${meal}`
      newState.meal = meal
      return newState
    })
  }
  _close = () => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open = false
      newState.dialog = ''
      newState.meal = ''
      return newState
    })
  }
  _submit = () => {
    store.add(this.state.food, this.state.meal)
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
    const { props: { entry } } = this

    return <Card className='recipe-card'>
      <CardHeader />
      <CardMedia
        overlay={<CardTitle title={entry.fields.item_name} />}
      >
        <img className='recipe-image' src={entry.fields.images_front_full_url} />
      </CardMedia>
      <CardText className='card-text'>
        <div className='card-description'>
          {entry.fields.item_description}
        </div>
        <div className='card-nutrition'>
          <div className='calories card-nutrition-details'>
            <div>Calories</div>
            <div>{entry.fields.nf_calories}</div>
          </div>
          <div className='protein card-nutrition-details'>
            <div>Protein</div>
            <div>{entry.fields.nf_protein}</div>
          </div>
          <div className='fat card-nutrition-details'>
            <div>Fat</div>
            <div>{entry.fields.nf_total_fat}</div>
          </div>
          <div className='carb card-nutrition-details'>
            <div>Carbohydrates</div>
            <div>{entry.fields.nf_total_carbohydrate}</div>
          </div>
          {entry.fields.images_front_full_url}
        </div>
      </CardText>
      <CardActions>
        <FlatButton label='Add to Breakfast'
          onTouchTap={() => this._open(entry.fields, 'Breakfast')} />
        <FlatButton label='Add to Lunch'
          onTouchTap={() => this._open(entry.fields, 'Lunch')} />
        <FlatButton label='Add to Dinner'
          onTouchTap={() => this._open(entry.fields, 'Dinner')} />
        <FlatButton label='Add to Snacks'
          onTouchTap={() => this._open(entry.fields, 'Snack')} />
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
