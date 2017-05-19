import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { AddFood, SearchList, Filters } from '.'
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
        <Filters />
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
