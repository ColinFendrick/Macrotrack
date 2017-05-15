import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import { LogItem } from '.'

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
      <div>
        <Donut
          value={(store.daily.protein - store.used.protein) / 2000} />
        <div>Protein</div>
      </div>
      <div>
        <Donut
          value={(store.daily.carbs - store.used.carbs)} />
        <div>Carbs</div>
      </div>
      <div>
        <Donut
          value={(store.daily.fats - store.used.fats)} />
        <div>Fats</div>
      </div>
    </div>
    <div className='daily-log'>
      <div className='add-food-buttons'>
        <LogItem target='Breakfast' />
        <LogItem target='Lunch' />
        <LogItem target='Dinner' />
      </div>
    </div>
    <div className='weekly-log' />
  </div>
)

export default observer(Log)
