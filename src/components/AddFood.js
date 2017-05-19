import React from 'react'
import store from '../store'
import TextField from 'material-ui/TextField'

const AddFood = () => (
  <div className='AddFood' style={{'display': store.display.add}} >
    <TextField hintText='Name' />
  </div>
)

export default AddFood
