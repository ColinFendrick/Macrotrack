import React from 'react'
import { Donut } from 'rebass'
import store from '../store'
import { observer } from 'mobx-react'
import { LogItem } from '.'

const Log = () => (
  <div className='Log'>
    <div className='log-cal'>
      <Donut
        onTouchTap={() => console.log(store.log.Breakfast)}
        color='hsl(118, 24%, 45%)'
        size={256}
        value={1 - ((store.daily.calories - store.used.calories.total) / store.daily.calories)}
      />
      <div>Daily Calories</div>
    </div>
    <div className='log-macro-donut'>
      <div>
        <Donut color='hsl(280, 28%, 52%)'
          value={1 - ((store.daily.protein - store.used.protein.total) / store.daily.protein)} />
        <div>Protein</div>
      </div>
      <div>
        <Donut color='hsl(359, 64%, 45%)'
          value={1 - ((store.daily.carbs - store.used.carbs.total) / store.daily.carbs)} />
        <div>Carbs</div>
      </div>
      <div>
        <Donut color='hsl(37, 100%, 85%)'
          value={1 - ((store.daily.fats - store.used.fats.total) / store.daily.fats)} />
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
