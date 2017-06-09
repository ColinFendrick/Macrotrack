import React, { Component } from 'react'
import store from '../store'
import { observer } from 'mobx-react'
import { FlatButton } from 'material-ui'
import { AddFood } from '.'

class AddCustomButtons extends Component {
  _open = () => {
    store.mealToggle('add')
  }

  render () {
    const { props: { meal } } = this

    return <div style={{'display': store.display.custom}}>
      <FlatButton
        label={meal}
        primary
        onTouchTap={() => this._open(meal)} />
      <AddFood meal={meal} />
    </div>
  }
}

export default observer(AddCustomButtons)
