import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import Toggle from 'material-ui/Toggle'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { AddFood, SearchList } from '.'
import { get } from './api'

class Modal extends Component {
  state = {
    entries: []
  }
  updateResults (query) {
    get(query).then(r => this.setState({ entries: r.hits }))
  }
  render () {
    return <div className='Modal' style={{'display': store.display[`${this.props.target}`]}}>
      <div className='modal-window'>
        <div className='modal-window-top'>
          <h4>{this.props.target}</h4>
          <TextField hintText='Search for Recipes' onChange={e => this.updateResults(e.target.value)} />
          <FontIcon className='fa fa-times delete-button'
            onTouchTap={() => store.toggle(this.props.target)} />
        </div>
        <div className='filters'>
          <Toggle label='Show only foods within budget' />
          <Toggle label='Vegetarian' />
          <DropDownMenu value={store.filter} onChange={(_, x, value) => store._filter(value)}>
            <MenuItem primaryText='Filter By' value={0} />
            <MenuItem primaryText='Calories: Lowest to Highest' value={1} />
            <MenuItem primaryText='Calories: Highest to Lowest' value={2} />
            <MenuItem primaryText='Protein: Lowest to Highest' value={3} />
            <MenuItem primaryText='Protein: Highest to Lowest' value={4} />
            <MenuItem primaryText='Carbs: Lowest to Highest' value={5} />
            <MenuItem primaryText='Carbs: Highest to Lowest' value={6} />
            <MenuItem primaryText='Fats: Lowest to Highest' value={7} />
            <MenuItem primaryText='Fats: Highest to Lowest' value={8} />
          </DropDownMenu>
        </div>
        <SearchList entries={this.state.entries} />
        <div className='add-custom'>
          <FloatingActionButton>
            <ContentAdd onTouchTap={() => store.toggle('add')} />
          </FloatingActionButton>
        </div>
        <AddFood />
      </div>
    </div>
  }
}

export default observer(Modal)
