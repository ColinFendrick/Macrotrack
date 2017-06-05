import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '../store'
import { TextField,
  FontIcon,
  FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { AddFood, SearchList, Filters } from '.'
import { getData } from './api'

class Modal extends Component {
  updateResults (query) {
    getData(query)
  }

  render () {
    const { props: { meal } } = this
    return <div className='Modal'
      style={{'display': store.display[meal]}}>
      <div className='modal-window'>
        <div className='modal-window-top'>
          <h4>{this.props.meal}</h4>
          <TextField hintText='Search for Recipes'
            onChange={e => this.updateResults(e.target.value)} />
          <FontIcon className='fa fa-times delete-button'
            onTouchTap={() => store.mealToggle(meal)} />
        </div>
        <Filters />
        <SearchList meal={meal} />
        <div className='add-custom'>
          <FloatingActionButton>
            <ContentAdd onTouchTap={() => store.toggle('add')} />
          </FloatingActionButton>
        </div>
        <AddFood meal={meal} />
      </div>
    </div>
  }
}

export default observer(Modal)
