import React, { Component } from 'react'
import store from '../store'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import { observer } from 'mobx-react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class AddFood extends Component {
  state = {
    'Name': '',
    'Calories': '',
    'Protein': '',
    'Carbs': '',
    'Fats': ''
  }
  _change = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  _update = () => {
    store.log[this.props.meal] = {...this.state}
    store.toggle('add')
  }
  render () {
    return <div className='AddFood' style={{'display': store.display.add}} >
      <div className='add-window'>
        <FontIcon className='fa fa-times delete-button'
          onTouchTap={() => store.toggle('add')} />
        <TextField hintText='Name' defaultValue='Name' onChange={this._change} />
        <TextField hintText='Calories' defaultValue='Calories' onChange={this._change} />
        <TextField hintText='Protein' defaultValue='Protein' onChange={this._change} />
        <TextField hintText='Carbs' defaultValue='Carbs' onChange={this._change} />
        <TextField hintText='Fats' defaultValue='Fats' onChange={this._change} />
        <FloatingActionButton>
          <ContentAdd onTouchTap={() => this._update()} />
        </FloatingActionButton>
      </div>
    </div>
  }
}

export default observer(AddFood)
