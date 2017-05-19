import React from 'react'
import store from '../store'
import TextField from 'material-ui/TextField'
import { observer } from 'mobx-react'

const AddFood = () => (
  <div className='AddFood' style={{'display': store.display.add}} >
    <div className='add-window'>
      <TextField hintText='Name' />
      <TextField hintText='Name' />
    </div>
  </div>
)

export default observer(AddFood)
