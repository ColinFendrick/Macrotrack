import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import RaisedButton from 'material-ui/RaisedButton'
import { Modal } from '.'

const Log = () => (
  <div className='Log'>
    <div className='log-cal'>
      <Donut
        color='teal'
        size={256}
        value={(store.daily.calories - store.used.calories) / 2000}
    />
      <div>Daily Calories</div>
    </div>
    <div className='log-macro-donut'>
      <div><Donut
        value={(store.daily.protein - store.used.protein) / 2000} />
        <div>Protein</div>
      </div>
      <div><Donut
        value={(store.daily.carbs - store.used.carbs)} />
        <div>Carbs</div>
      </div>
      <div>
        <Donut
          value={(store.daily.fats - store.used.fats)} />
        <div>Fats</div>
      </div>
    </div>
    <div className='Daily Log'>
      <div className='add-food-buttons'>
        <div className='breakfast'>
          Breakfast:
          <RaisedButton label='+'
            onTouchTap={(() => {
              store.toggle('breakfast')
            })}
           />
          <Modal target='breakfast' />
        </div>
        <div className='lunch'>
        Lunch:
        <RaisedButton label='+'
          onTouchTap={(() => {
            store.toggle('lunch')
          })}
        />
          <Modal target='lunch' />
        </div>
        <div className='dinner'>
        Dinner:
        <RaisedButton label='+'
          onTouchTap={(() => {
            store.toggle('dinner')
          })}
        />
          <Modal target='dinner' />
        </div>
      </div>
    </div>
  </div>
)

export default observer(Log)
