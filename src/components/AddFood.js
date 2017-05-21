import React from 'react'
import store from '../store'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import { observer } from 'mobx-react'

const AddFood = () => (
  <div className='AddFood' style={{'display': store.display.add}} >

    <div className='add-window'>
      <FontIcon className='fa fa-times delete-button'
        onTouchTap={() => store.toggle('add')} />
      <TextField hintText='Name' />
      <TextField hintText='Calories' />
    </div>
  </div>
)

export default observer(AddFood)
