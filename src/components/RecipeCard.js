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
      newState.dialog = `Add ${food.fields.item_name} to ${meal}`
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

  _submit = meal => {
    store.add(store.log, this.state.food.fields, this.state.meal)
    this._close()
    store.used.calories[meal] = Object.keys(store.log[meal]).map(key => store.log[meal][key].nf_calories).reduce((a, b) => a + b)
    store.used.protein[meal] = Object.keys(store.log[meal]).map(key => store.log[meal][key].nf_protein).reduce((a, b) => a + b)
    store.used.carbs[meal] = Object.keys(store.log[meal]).map(key => store.log[meal][key].nf_total_carbohydrate).reduce((a, b) => a + b)
    store.used.fats[meal] = Object.keys(store.log[meal]).map(key => store.log[meal][key].nf_total_fat).reduce((a, b) => a + b)
    console.log(store.used.fats[meal])
  }

  action = [<FlatButton
    label='Cancel'
    primary
    onTouchTap={() => this._close()}
        />,
    <FlatButton
      label='Submit'
      primary
      onTouchTap={() => this._submit(this.state.meal)}
    />]

  render () {
    const { props: { entry } } = this

    return <Card className='recipe-card'>
      <CardHeader />
      <CardMedia
        overlay={<CardTitle title={entry.fields.item_name} />}
      >
        <img className='recipe-image' src='http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.336.252.jpeg' />
      </CardMedia>
      <CardText className='card-text'>
        <div className='card-description'>
          {entry.fields.item_description ? entry.fields.item_description : 'Description Unavailable'}
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
