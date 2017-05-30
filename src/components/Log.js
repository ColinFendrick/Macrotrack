import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import { LogItem } from '.'

const Log = () => (
  <div className='Log'>
    <div className='log-cal'>
      <Donut
        color='hsl(118, 24%, 45%)'
        size={256}
        value={(store.daily.calories - store.used.calories.total) / 2000}
      />
      <div>Daily Calories</div>
    </div>
    <div className='log-macro-donut'>
      <div>
        <Donut color='hsl(280, 28%, 52%)'
          value={(store.daily.protein - store.used.protein) / 2000} />
        <div>Protein</div>
      </div>
      <div>
        <Donut color='hsl(359, 64%, 45%)'
          value={(store.daily.carbs - store.used.carbs)} />
        <div>Carbs</div>
      </div>
      <div>
        <Donut color='hsl(37, 100%, 85%)'
          value={(store.daily.fats - store.used.fats)} />
        <div>Fats</div>
      </div>
    </div>
    <div className='daily-log'>
      <div className='add-food-buttons'>
        <LogItem meal='Breakfast' />
        <LogItem meal='Lunch' />
        <LogItem meal='Dinner' />
        <LogItem meal='Snack' />
      </div>
    </div>
    <div className='weekly-log' />
  </div>
)

export default observer(Log)
