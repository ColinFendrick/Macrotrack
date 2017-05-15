import React from 'react'
import { Modal } from '.'
import store from '../store'
import { observer } from 'mobx-react'
import RaisedButton from 'material-ui/RaisedButton'

const LogItem = ({ target }) => (
  <div className='LogItem'>
    <div className={target}>
      {target}
      Calories: {store.used.calories[`${target}`]}
      Protein: {store.used.protein[`${target}`]}
      Carbs: {store.used.carbs[`${target}`]}
      Fats: {store.used.fat[`${target}`]}
      <RaisedButton label='+'
        onTouchTap={(() => {
          store.toggle(`${target}`)
        })}
       />
      <Modal target={target} />
    </div>
  </div>
)

export default observer(LogItem)
