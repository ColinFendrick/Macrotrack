import React, { Component } from 'react'
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import { FlatButton, Dialog } from 'material-ui'
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
      newState.dialog = `Add ${food.fields.item_name} to ${meal}`
      newState.meal = meal
      return newState
    })
  }

  _close = () => {
    this.setState(oldState => {
      let newState = {...oldState}
      newState.open = false
      newState.food = {}
      newState.dialog = ''
      newState.meal = ''
      return newState
    })
  }

  _submit = () => {
    store.add(this.state.food.fields, this.state.meal)
    this.setState(oldState => {
      let newState = {...oldState}
      return newState
    }, () => this._close())
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
      <CardMedia
        overlay={<CardTitle title={entry.fields.item_name.replace(/\W/g, ' ').substring(0, 30)} />}
      >
        <img className='recipe-image' src='http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.336.252.jpeg' />
      </CardMedia>
      <CardText className='card-text'>
        <div className='card-description'>
          {entry.fields.item_description ? entry.fields.item_description : null}
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
        </div>
      </CardText>
      <CardActions>
        <FlatButton label='Add to Breakfast'
          onTouchTap={() => this._open(entry, 'Breakfast')} />
        <FlatButton label='Add to Lunch'
          onTouchTap={() => this._open(entry, 'Lunch')} />
        <FlatButton label='Add to Dinner'
          onTouchTap={() => this._open(entry, 'Dinner')} />
        <FlatButton label='Add to Snacks'
          onTouchTap={() => this._open(entry, 'Snack')} />
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
