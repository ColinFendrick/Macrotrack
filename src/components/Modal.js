import React from 'react'
import { observer } from 'mobx-react'
import store from '../store'

const Modal = ({ target }) => (
  <div className='Modal' style={{'display': store.display[`${target}`]}}>
    <div className='modal-window'>
      {target}
    </div>
  </div>
)

export default observer(Modal)
