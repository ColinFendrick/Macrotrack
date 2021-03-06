import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import { TextField,
  FontIcon,
  GridList,
  GridTile,
  Dialog,
  FlatButton } from 'material-ui'
import { AddFood, Filters, FoodNutrients } from '.'

class Modal extends Component {
  state = {
    open: false,
    food: null,
    dialog: '',
    meal: ''
  }
  // Confirm food addition
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
  // Close food addition dialog
  _close = () => {
    this.setState({
      open: false,
      food: null,
      dialog: '',
      meal: ''
    })
  }
  // Submits food to store
  _submit = () => {
    store.add(this.state.food.fields, this.state.meal)
    this._close()
  }
  // Actions for the buttons
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
    const { props: { meal } } = this

    return <div className='Modal'
      style={{'display': store.display[meal]}}>
      <div className='modal-window'>
        <div className='modal-window-top'>
          <h4>{this.props.meal}</h4>
          <TextField hintText='Search for Recipes'
            onChange={e => {
              // Calls API on searchbar change
              store.query = e.target.value
            }} />
          <FontIcon className='fa fa-times delete-button'
            // Turns modal off
            onTouchTap={() => store.mealToggle(meal)} />
        </div>
        <Filters />
        <div className='grid-list'>
          <GridList cellHeight={180}
            className='grid-list'
            style={this.gridList}>
            {/* Map all the API data into grids */}
            {store.entries.map((entry, i) => {
              return <GridTile
                key={i}
                title={entry.fields.item_name.replace(/\W/g, ' ')}
                subtitle={entry.fields.item_description ? entry.fields.item_description : null}
                onTouchTap={() => this._open(entry, meal)}>
                <img src='http://images2.fanpop.com/images/photos/5400000/Random-Food-random-5409310-1280-800.jpg'
                  alt=' No image' />
              </GridTile>
            }
          )}
          </GridList>
        </div>
        <div className='add-custom'>
          {/* Custom calorie entry modal */}
          <FlatButton
            label='Add Custom Calorie Entry'
            primary
            onTouchTap={() => store.mealToggle('add')} />
        </div>
        <AddFood meal={meal} />
      </div>
      <Dialog
        open={this.state.open}
        title={this.state.dialog}
        actions={this.action}
      >
        <FoodNutrients food={this.state.food} />
      </Dialog>
    </div>
  }
}

export default observer(Modal)
