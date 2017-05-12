import React from 'react'
import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import RaisedButton from 'material-ui/RaisedButton'

const LogItem = ({ target }) => (
  <div className={target}>
    {target}:
      <RaisedButton label='+'
        onTouchTap={(() => {
          store.toggle(`${target}`)
        })}
       />
    <Modal target={target} />
  </div>
)

export default observer(LogItem)
