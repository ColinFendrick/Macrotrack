import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import { FlatButton } from 'material-ui'

class AddFood extends Component {
  state = {
    item_name: 'Calories',
    nf_calories: 0,
    nf_protein: 0,
    nf_total_carbohydrate: 0,
    nf_total_fat: 0
  }

  _change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _submit = () => {
    store.add(this.state, this.props.meal)
  }

  render () {
    return <div className='AddFood' style={{'display': store.display.add}} >
      <div className='add-window'>
        <div className='add-inputs'>
          <div className='add-input-indiv'>
            Calories:
            <input type='number' name='nf_calories'
              onChange={this._change} value={this.state.nf_calories}
            />
          </div>
          <div className='add-input-indiv'>
            Protein (g):
            <input type='number' name='nf_protein'
              onChange={this._change} value={this.state.nf_protein}
            />
          </div>
          <div className='add-input-indiv'>
            Carbs (g):
            <input type='number' name='nf_total_carbohydrate'
              onChange={this._change} value={this.state.nf_total_carbohydrate}
            />
          </div>
          <div className='add-input-indiv'>
            Fats (g):
            <input type='number' name='nf_total_fat'
              onChange={this._change} value={this.state.nf_total_fat}
            />
          </div>
        </div>
        <div className='add-buttons'>
          <FlatButton label='cancel' primary onTouchTap={() => store.mealToggle('add')} />
          <FlatButton label='submit' primary onTouchTap={this._submit} />
        </div>
      </div>
    </div>
  }
}

export default observer(AddFood)
